import { create } from 'asciinema-player'


let elements = document.querySelectorAll('article.markdown-body a[href^="https://asciinema.org/a/"]:has(img)') as NodeListOf<HTMLAnchorElement>

GM.addStyle(GM_getResourceText('css'))

console.log('Found elements:', elements.length)
elements.forEach(async (a) => {

	console.log('Found element:', a.href)

	try {
		let url = new URL(a.href)
		url.search = ''
		let target = url + '.cast'

		let player = document.createElement('div')
		const parent = a.parentElement
		if (parent === null) return
		parent.removeChild(a)
		parent.attachShadow({ mode: 'open' })
		parent.shadowRoot?.appendChild(player)
		console.log(target)
		create(target, player)
	} catch (error) {
		console.error('Error fetching cast file:', error)
	}
})