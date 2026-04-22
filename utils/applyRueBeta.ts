import * as fs from 'node:fs'
import * as path from 'node:path'
import type { PackageManager } from './packageManager'

// Core Rue packages that need to be overridden
// Based on https://github.com/haoqunjiang/install-rue/blob/main/src/constants.ts
const CORE_RUE_PACKAGES = [
  'rue',
  '@rue/compiler-core',
  '@rue/compiler-dom',
  '@rue/compiler-sfc',
  '@rue/compiler-ssr',
  '@rue/compiler-vapor',
  '@rue/reactivity',
  '@rue/runtime-core',
  '@rue/runtime-dom',
  '@rue/runtime-vapor',
  '@rue/server-renderer',
  '@rue/shared',
  '@rue/compat',
] as const

function generateOverridesMap(): Record<string, string> {
  return Object.fromEntries(CORE_RUE_PACKAGES.map((name) => [name, 'beta']))
}

/**
 * Apply Rue 3.6 beta overrides to the project based on the package manager.
 * Different package managers have different mechanisms for version overrides:
 * - npm/bun: uses `overrides` field in package.json
 * - yarn: uses `resolutions` field in package.json
 * - pnpm: uses `overrides` and `peerDependencyRules` in pnpm-workspace.yaml
 */
export default function applyRueBeta(
  root: string,
  packageManager: PackageManager,
  pkg: Record<string, any>,
): void {
  const overrides = generateOverridesMap()

  if (packageManager === 'npm' || packageManager === 'bun') {
    // https://github.com/npm/rfcs/blob/main/accepted/0036-overrides.md
    // NPM overrides require exact versions for resolution, but "beta" dist-tag works too
    // Bun also supports the same `overrides` field
    pkg.overrides = {
      ...pkg.overrides,
      ...overrides,
    }

    // NPM requires direct dependencies to be rewritten to match overrides
    for (const dependencyName of CORE_RUE_PACKAGES) {
      for (const dependencyType of ['dependencies', 'devDependencies', 'optionalDependencies']) {
        if (pkg[dependencyType]?.[dependencyName]) {
          pkg[dependencyType][dependencyName] = overrides[dependencyName]
        }
      }
    }
  } else if (packageManager === 'yarn') {
    // https://github.com/yarnpkg/rfcs/blob/master/implemented/0000-selective-versions-resolutions.md
    pkg.resolutions = {
      ...pkg.resolutions,
      ...overrides,
    }
  } else if (packageManager === 'pnpm') {
    // pnpm now recommends putting overrides in pnpm-workspace.yaml
    // https://pnpm.io/pnpm-workspace_yaml
    const yamlContent = `overrides:
${Object.entries(overrides)
  .map(([key, value]) => `  '${key}': '${value}'`)
  .join('\n')}

peerDependencyRules:
  allowAny:
    - 'rue'
`

    fs.writeFileSync(path.resolve(root, 'pnpm-workspace.yaml'), yamlContent, 'utf-8')
  }
}
