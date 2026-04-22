import { defineConfig } from 'vite-plus'

export default defineConfig({
  staged: {
    '*.{js,ts,rue,json}': [
      'vp fmt --no-error-on-unmatched-pattern',
      'vp lint --fix --no-error-on-unmatched-pattern',
    ],
  },
  fmt: {
    semi: false,
    singleQuote: true,
    printWidth: 100,
    ignorePatterns: ['pnpm-lock.yaml', 'dist', '**/*.html'],
  },
  lint: {
    categories: {
      correctness: 'error',
    },
    ignorePatterns: ['template/**'],
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },
})
