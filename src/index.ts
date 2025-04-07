import { create } from 'asciinema-player'


let elements = document.querySelectorAll('article.markdown-body a[href^="https://asciinema.org/a/"]:has(img)') as NodeListOf<HTMLAnchorElement>

GM.addStyle(GM_getResourceText('css'))

console.log('Found elements:', elements.length)
elements.forEach(async (a) => {

	console.log('Found element:', a.href)

	try {
		let target = a.href + '.cast'

		let img = a.querySelector('img')
		if (img == null) return
		let player = document.createElement('div')
		a.parentElement?.replaceChild(player, a)
		console.log(target)
		create(target, player)
	} catch (error) {
		console.error('Error fetching cast file:', error)
	}
})