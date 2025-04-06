import { defineConfig } from 'vite'
import Userscript from 'vite-userscript-plugin'

import { license, name, version } from './package.json'

export default defineConfig({
  build: {
    minify: false,
  },
  plugins: [
    Userscript({
      fileName: 'asciinema-github',
      entry: 'src/index.ts',
      header: {
        name,
        version,
        license,
        match: 'https://github.com/*',
        grant: ['GM.addStyle', 'GM_getResourceText'],
        resource: [
          ['css', 'https://cdn.jsdelivr.net/npm/asciinema-player@3.9.0/dist/bundle/asciinema-player.css'],
        ]
      },
      server: {
        port: 3000
      }
    })
  ]
})
