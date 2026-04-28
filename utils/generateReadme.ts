import getCommand from './getCommand'

export default function generateReadme({ projectName, packageManager }) {
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

### Type-Check, Compile and Minify for Production

\`\`\`sh
${commandFor('build')}
\`\`\`
`

  readme += npmScriptsDescriptions

  return readme
}
