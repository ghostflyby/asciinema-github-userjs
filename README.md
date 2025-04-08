# Asciinema GitHub Userscript

## Overview

Asciinema GitHub Userscript is a userscript that automatically embeds [Asciinema](https://asciinema.org/) players into GitHub. It detects asciinema.org/a links with preview in Markdown content and replaces them with an embedded player.

## Installation

1. Install a userscript manager for your browser, such as [Tampermonkey](https://www.tampermonkey.net/)
2. install [https://ghostflyby.github.io/asciinema-github-userjs/asciinema-github.user.js](https://ghostflyby.github.io/asciinema-github-userjs/asciinema-github.user.js)

## Usage

After installing the script, visit a GitHub page containing Asciinema links, such as the [asciinema project page](https://github.com/asciinema/asciinema)

## build
install pnpm

```bash
pnpm install
pnpm run build
```

The script is in `dist/asciinema-github.user.js`

## Note
Due to the CSP of GitHub, the AsciinemaPlayer library is bundled into the script.

If you don't trust the prebuilt script, you can build it yourself.