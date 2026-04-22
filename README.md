# create-rue <a href="https://npmx.dev/package/create-rue"><img src="https://npmx.dev/api/registry/badge/version/create-rue" alt="npm package"></a> <a href="https://npmx.dev/package/create-rue"><img src="https://npmx.dev/api/registry/badge/downloads-week/create-rue" alt="npm package"></a> <a href="https://nodejs.org/en/about/previous-releases"><img src="https://npmx.dev/api/registry/badge/engines/create-rue" alt="node compatibility"></a>

The recommended way to start a Vite-powered Rue project

## Usage

To create a new Rue project using `create-rue`, simply run the following command in your terminal:

```sh
npm create rue@latest
```

> [!IMPORTANT]
> (`@latest` or `@legacy`) MUST NOT be omitted, otherwise `npm` may resolve to a cached and outdated version of the package.

By default, the command runs in interactive mode with prompts. You can skip these prompts by providing feature flags as CLI arguments. To see all available feature flags and options:

```sh
npm create rue@latest -- --help
```

**PowerShell users:** You'll need to quote the double dashes: `npm create rue@latest '--' --help`
