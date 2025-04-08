import playerCss from 'asciinema-player/dist/bundle/asciinema-player.css?raw'
import { create } from 'asciinema-player'


let dirty = true

setInterval(() => {
	if (dirty)
		run()
	dirty = false
}, 500)

function run() {
	let elements = document.querySelectorAll('article.markdown-body a[href^="https://asciinema.org/a/"]:has(img)') as NodeListOf<HTMLAnchorElement>

	console.log('Found elements:', elements.length)

	elements.forEach(async (a) => {

		console.log('Found element:', a.href)

		try {
			const url = new URL(a.href)
			url.search = ''
			const target = url + '.cast'
			const iframeUrl = url + '/iframe'

			const parent = a.parentElement
			if (parent === null) return



			console.log('Fetching cast opts:', iframeUrl)
			GM_xmlhttpRequest({
				url: iframeUrl, method: 'GET',
				onload: (response) => {
					console.log('Fetched cast opts:', iframeUrl)

					const opts = JSON.parse(response.responseText.match(/const opts = (\{.*?\});/s)?.[1] ?? '{}')
					console.log(opts)
					parent.removeChild(a)
					const shadowRoot = parent.attachShadow({ mode: 'open' })

					const player = document.createElement('div')
					const playerStyle = document.createElement('style')
					const hostStyle = document.createElement('style')
					hostStyle.textContent = `
					:host {
					position: relative;
					z-index: 0;
					`
					playerStyle.textContent = playerCss
					shadowRoot.append(hostStyle, playerStyle, player)
					create(target, player, { ...opts })
				}
			})

		} catch (error) {
			console.error('Error fetching cast file:', error)
		}
	})

}

const observer = new MutationObserver(() => {
	dirty = true
});
observer.observe(document.body, {
	childList: true,
	subtree: true,
	attributes: false,
	characterData: false
})