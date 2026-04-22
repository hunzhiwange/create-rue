#!/usr/bin/env node

import * as fs from 'node:fs'
import * as path from 'node:path'
import { fileURLToPath } from 'node:url'
import { parseArgs } from 'node:util'
import { intro, outro, text, confirm, isCancel, cancel } from '@clack/prompts'
import { red, green, bold, dim } from 'picocolors'

import ejs from 'ejs'

import * as banners from './utils/banners'

import renderTemplate from './utils/renderTemplate'
import {
  postOrderDirectoryTraverse,
  preOrderDirectoryTraverse,
  dotGitDirectoryState,
} from './utils/directoryTraverse'
import generateReadme from './utils/generateReadme'
import getCommand from './utils/getCommand'
import getLanguage from './utils/getLanguage'
import { inferPackageManager } from './utils/packageManager'

import cliPackageJson from './package.json' with { type: 'json' }

const language = await getLanguage(fileURLToPath(new URL('./locales', import.meta.url)))

const FEATURE_FLAGS = ['default'] as const

type PromptResult = {
  projectName?: string
  shouldOverwrite?: boolean
  packageName?: string
}

function isValidPackageName(projectName) {
  return /^(?:@[a-z0-9-*~][a-z0-9-*._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/.test(projectName)
}

function toValidPackageName(projectName) {
  return projectName
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/^[._]/, '')
    .replace(/[^a-z0-9-~]+/g, '-')
}

function canSkipEmptying(dir: string) {
  if (!fs.existsSync(dir)) {
    return true
  }

  const files = fs.readdirSync(dir)
  if (files.length === 0) {
    return true
  }
  if (files.length === 1 && files[0] === '.git') {
    dotGitDirectoryState.hasDotGitDirectory = true
    return true
  }

  return false
}

function emptyDir(dir) {
  if (!fs.existsSync(dir)) {
    return
  }

  postOrderDirectoryTraverse(
    dir,
    (dir) => fs.rmdirSync(dir),
    (file) => fs.unlinkSync(file),
  )
}

async function unwrapPrompt<T>(maybeCancelPromise: Promise<T | symbol>): Promise<T> {
  const result = await maybeCancelPromise

  if (isCancel(result)) {
    cancel(red('✖') + ` ${language.errors.operationCancelled}`)
    process.exit(0)
  }
  return result
}

const helpMessage = `\
Usage: create-rue [--default] [OPTIONS...] [DIRECTORY]

Create a new Rue.js project.
Runs in interactive mode if started without --default, or if DIRECTORY is missing or not a valid package name.

Options:
  --force
    Create the project even if the directory is not empty.
  --help
    Display this help message.
  --version
    Display the version number of this CLI.

Available feature flags:
  --default
    Create a project with the default configuration without any additional features.
`

async function init() {
  const cwd = process.cwd()
  const args = process.argv.slice(2)

  // // alias is not supported by parseArgs so we declare all the flags altogether
  const flags = [...FEATURE_FLAGS, 'force', 'help', 'version'] as const
  type CLIOptions = {
    [key in (typeof flags)[number]]: { readonly type: 'boolean' }
  }
  const options = Object.fromEntries(flags.map((key) => [key, { type: 'boolean' }])) as CLIOptions

  const { values: argv, positionals } = parseArgs({
    args,
    options,
    strict: true,
    allowPositionals: true,
  })

  if (argv.help) {
    console.log(helpMessage)
    process.exit(0)
  }

  if (argv.version) {
    console.log(`${cliPackageJson.name} v${cliPackageJson.version}`)
    process.exit(0)
  }

  let targetDir = positionals[0]
  const defaultProjectName = targetDir || 'rue-project'

  const forceOverwrite = argv.force

  // Infer package manager from user agent early so we can use it in prompts
  const inferredPackageManager = inferPackageManager()

  const result: PromptResult = {
    projectName: defaultProjectName,
    shouldOverwrite: forceOverwrite,
    packageName: defaultProjectName,
  }

  intro(
    process.stdout.isTTY && process.stdout.getColorDepth() > 8
      ? banners.gradientBanner
      : banners.defaultBanner,
  )

  if (!targetDir) {
    const _result = await unwrapPrompt(
      text({
        message: language.projectName.message,
        placeholder: defaultProjectName,
        defaultValue: defaultProjectName,
        validate: (value) =>
          !value || value.trim().length > 0 ? undefined : language.projectName.invalidMessage,
      }),
    )
    const projectName = _result?.trim() || defaultProjectName
    targetDir = result.projectName = result.packageName = projectName
  }

  if (!canSkipEmptying(targetDir) && !forceOverwrite) {
    result.shouldOverwrite = await unwrapPrompt(
      confirm({
        message: `${
          targetDir === '.'
            ? language.shouldOverwrite.dirForPrompts.current
            : `${language.shouldOverwrite.dirForPrompts.target} "${targetDir}"`
        } ${language.shouldOverwrite.message}`,
        initialValue: false,
      }),
    )

    if (!result.shouldOverwrite) {
      cancel(red('✖') + ` ${language.errors.operationCancelled}`)
      process.exit(0)
    }
  }

  if (!isValidPackageName(targetDir)) {
    result.packageName = await unwrapPrompt(
      text({
        message: language.packageName.message,
        initialValue: toValidPackageName(targetDir),
        validate: (value) =>
          isValidPackageName(value) ? undefined : language.packageName.invalidMessage,
      }),
    )
  }

  const root = path.resolve(cwd, targetDir)

  if (fs.existsSync(root) && result.shouldOverwrite) {
    emptyDir(root)
  } else if (!fs.existsSync(root)) {
    fs.mkdirSync(root)
  }

  console.log(`\n${language.infos.scaffolding} ${root}...`)

  const pkg = { name: result.packageName, version: '0.0.0' }
  fs.writeFileSync(path.resolve(root, 'package.json'), JSON.stringify(pkg, null, 2))

  const templateRoot = fileURLToPath(new URL('./template', import.meta.url))
  const callbacks = []
  const render = function render(templateName) {
    const templateDir = path.resolve(templateRoot, templateName)
    renderTemplate(templateDir, root, callbacks)
  }
  // Render base template
  render('base')

  // An external data store for callbacks to share data
  const dataStore = {}
  // Process callbacks
  for (const cb of callbacks) {
    await cb(dataStore)
  }

  // EJS template rendering
  preOrderDirectoryTraverse(
    root,
    () => {},
    (filepath) => {
      if (filepath.endsWith('.ejs')) {
        const template = fs.readFileSync(filepath, 'utf-8')
        const dest = filepath.replace(/\.ejs$/, '')
        const content = ejs.render(template, dataStore[dest])

        fs.writeFileSync(dest, content)
        fs.unlinkSync(filepath)
      }
    },
  )

  const packageManager = inferredPackageManager

  // README generation
  fs.writeFileSync(
    path.resolve(root, 'README.md'),
    generateReadme({
      projectName: result.projectName ?? result.packageName ?? defaultProjectName,
      packageManager,
    }),
  )

  let outroMessage = `${language.infos.done}\n\n`
  if (root !== cwd) {
    const cdProjectName = path.relative(cwd, root)
    outroMessage += `   ${bold(green(`cd ${cdProjectName.includes(' ') ? `"${cdProjectName}"` : cdProjectName}`))}\n`
  }
  outroMessage += `   ${bold(green(getCommand(packageManager, 'install')))}\n`
  outroMessage += `   ${bold(green(getCommand(packageManager, 'format')))}\n`
  outroMessage += `   ${bold(green(getCommand(packageManager, 'dev')))}\n`

  if (!dotGitDirectoryState.hasDotGitDirectory) {
    outroMessage += `
${dim('|')} ${language.infos.optionalGitCommand}

   ${bold(green('git init && git add -A && git commit -m "initial commit"'))}`
  }

  outro(outroMessage)
}

init().catch((e) => {
  console.error(e)
  process.exit(1)
})
