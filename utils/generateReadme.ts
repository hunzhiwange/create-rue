import getCommand from './getCommand'

const sfcTypeSupportDoc = [
  '',
  '## Type Support for `.rue` Imports in TS',
  '',
  'TypeScript cannot handle type information for `.rue` imports by default, so we replace the `tsc` CLI with `rue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Rue.volar) to make the TypeScript language service aware of `.rue` types.',
  '',
].join('\n')

export default function generateReadme({
  projectName,
  packageManager,
  needsTypeScript,
  needsCypress,
  needsCypressCT,
  needsPlaywright,
  needsVitest,
  needsEslint,
}) {
  const commandFor = (scriptName: string, args?: string) =>
    getCommand(packageManager, scriptName, args)

  let readme = `# ${projectName}

This template should help get you started developing with Rue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Rue (Official)](https://marketplace.visualstudio.com/items?itemName=Rue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Rue.js devtools](https://chromewebstore.google.com/detail/ruejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Rue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/rue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)
${needsTypeScript ? sfcTypeSupportDoc : ''}
## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

`

  let npmScriptsDescriptions = `\`\`\`sh
${commandFor('install')}
\`\`\`

### Compile and Hot-Reload for Development

\`\`\`sh
${commandFor('dev')}
\`\`\`

### ${needsTypeScript ? 'Type-Check, ' : ''}Compile and Minify for Production

\`\`\`sh
${commandFor('build')}
\`\`\`
`

  if (needsVitest) {
    npmScriptsDescriptions += `
### Run Unit Tests with [Vitest](https://vitest.dev/)

\`\`\`sh
${commandFor('test:unit')}
\`\`\`
`
  }

  if (needsCypressCT) {
    npmScriptsDescriptions += `
### Run Headed Component Tests with [Cypress Component Testing](https://on.cypress.io/component)

\`\`\`sh
${commandFor('test:unit:dev')} # or \`${commandFor('test:unit')}\` for headless testing
\`\`\`
`
  }

  if (needsCypress) {
    npmScriptsDescriptions += `
### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

\`\`\`sh
${commandFor('test:e2e:dev')}
\`\`\`

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with \`test:e2e\` before deploying (e.g. in CI environments):

\`\`\`sh
${commandFor('build')}
${commandFor('test:e2e')}
\`\`\`
`
  }

  if (needsPlaywright) {
    npmScriptsDescriptions += `
### Run End-to-End Tests with [Playwright](https://playwright.dev)

\`\`\`sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
${commandFor('build')}

# Runs the end-to-end tests
${commandFor('test:e2e')}
# Runs the tests only on Chromium
${commandFor('test:e2e', '--project=chromium')}
# Runs the tests of a specific file
${commandFor('test:e2e', 'tests/example.spec.ts')}
# Runs the tests in debug mode
${commandFor('test:e2e', '--debug')}
\`\`\`
`
  }

  if (needsEslint) {
    npmScriptsDescriptions += `
### Lint with [ESLint](https://eslint.org/)

\`\`\`sh
${commandFor('lint')}
\`\`\`
`
  }

  readme += npmScriptsDescriptions

  return readme
}
