import { describe, expect, it } from 'vite-plus/test'
import packageJson from '../package.json'

describe('published package contents', () => {
  it('includes runtime locale files', () => {
    expect(packageJson.files).toContain('locales')
  })
})
