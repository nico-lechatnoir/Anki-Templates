(function () {// Breadcrumbs to current deck
	var deckEl = document.querySelector('.prettify-deck')
	var subDecks = deckEl.innerHTML.split('::').filter(Boolean)
	html = []
	subDecks.forEach((subDeck) => {
		html.push("<span class='prettify-subdeck'>" + subDeck + '</span>')
	})
	deckEl.innerHTML = html.join('&nbsp;/&nbsp;')
})()