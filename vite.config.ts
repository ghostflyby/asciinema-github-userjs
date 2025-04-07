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
        grant: ['GM.addStyle']
      },
      server: {
        port: 3000
      }
    })
  ]
})
