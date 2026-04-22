#!/usr/bin/env zx
import 'zx/globals'

$.verbose = true

const { version } = JSON.parse(await fs.readFile('./package.json'))
await $`pnpm build`
await $`git push --follow-tags`
