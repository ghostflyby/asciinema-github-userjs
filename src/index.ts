import { create } from 'asciinema-player'


let elements = document.querySelectorAll('article.markdown-body a[href^="https://asciinema.org/a/"]:has(img)') as NodeListOf<HTMLAnchorElement>

GM.addStyle(GM_getResourceText('css'))

console.log('Found elements:', elements.length)
elements.forEach((el) => {

	console.log('Found element:', el.href)
	el.addEventListener('click', async (e) => {

		console.log('Clicked on:', el.href)
		e.preventDefault()
		e.stopPropagation()

		try {
			let target = el.href + '.cast'
			let response = await fetch(target, { method: 'GET' })
			if (!response.ok) {
				throw new Error(`Failed to fetch cast file: ${response.statusText}`)
			}

			let img = el.querySelector('img')
			if (img == null) return
			let player = document.createElement('div')
			el.replaceChild(player, img)
			console.log(target)
			create(target, player)
		} catch (error) {
			console.error('Error fetching cast file:', error)
		}
	}, { once: true })

	el.addEventListener('click', e => { e.preventDefault() })
	el.addEventListener('dragstart', e => { e.preventDefault() })
})