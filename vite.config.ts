import { defineConfig } from 'vite'
import Userscript from 'vite-userscript-plugin'

import { license, author, name, version } from './package.json'

export default defineConfig({
  build: {
    minify: false
  },
  plugins: [
    Userscript({
      fileName: 'asciinema-github',
      entry: 'src/index.ts',
      header: {
        name,
        version,
        license,
        author: author.name,
        match: 'https://github.com/*',
        grant: ['GM_xmlhttpRequest'],
        connect: 'asciinema.org',
        description: 'Asciinema player for GitHub',
        updateURL: 'https://ghostflyby.github.io/asciinema-github-userjs/asciinema-github.meta.js',
        downloadURL: 'https://ghostflyby.github.io/asciinema-github-userjs/asciinema-github.user.js',
        source: 'https://github.com/ghostflyby/asciinema-github-userjs'
      },
      server: {
        port: 3000
      }
    })
  ]
})
