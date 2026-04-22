export type PackageManager = 'npm' | 'yarn' | 'pnpm' | 'bun'

/**
 * Infers the package manager from the user agent string.
 * Falls back to npm if unable to detect.
 */
export function inferPackageManager(): PackageManager {
  const userAgent = process.env.npm_config_user_agent ?? ''

  if (/pnpm/.test(userAgent)) return 'pnpm'
  if (/yarn/.test(userAgent)) return 'yarn'
  if (/bun/.test(userAgent)) return 'bun'

  return 'npm'
}
