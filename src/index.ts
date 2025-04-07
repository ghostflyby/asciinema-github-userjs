import css from 'asciinema-player/dist/bundle/asciinema-player.css?raw'

let elements = document.querySelectorAll('article.markdown-body a[href^="https://asciinema.org/a/"]:has(img)') as NodeListOf<HTMLAnchorElement>

console.log('Found elements:', elements.length)

import { create } from 'asciinema-player'
elements.forEach(async (a) => {

	console.log('Found element:', a.href)

	try {
		const url = new URL(a.href)
		url.search = ''
		const target = url + '.cast'
		const iframeUrl = url + '/iframe'

		const parent = a.parentElement
		if (parent === null) return
		parent.removeChild(a)


		GM_xmlhttpRequest({
			url: iframeUrl, method: 'GET',
			onload: (response) => {
				const opts = JSON.parse(response.responseText.match(/const opts = (\{.*?\});/s)?.[1] ?? '{}')
				console.log(opts)
				const shadowRoot = parent.attachShadow({ mode: 'open' })

				const player = document.createElement('div')
				const style = document.createElement('style')
				style.textContent = css
				shadowRoot.append(style, player)
				create(target, player, { ...opts })
			}
		})

	} catch (error) {
		console.error('Error fetching cast file:', error)
	}
})