function playBoth() {
	var maleAudio = document.querySelector('#male .soundLink, #male .replaybutton');
	var femaleAudio = document.querySelector('#female .soundLink, #female .replaybutton');
	maleAudio.click()
	setTimeout(function () { femaleAudio.click(); }, 1000);
}
function getNum() {
	// Create a 2 step hint showing length of words before Hanzi
	let clue = document.getElementById('firstHint');
	if (clue.innerText.startsWith('#')) {
		let simp =  document.getElementById('simplified').textContent.trim().length;
		clue.innerText = clue.innerText.replace('#', simp);
		const re = /\((s)\)/g;
		clue.innerText = (simp > 1) ? clue.innerText.replace(re, '$1') : clue.innerText.replace(re, '');
	} else {
		clue.style.display = 'none';
		document.getElementById('hintPinyin').style.display = 'inline';
	}
}
function detectAnkiPlatform() {
    if (window.anki && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.cb !== undefined) {
        return 'AnkiMobile';
    } else if (document.querySelector('span.align-middle') && document.querySelector('span.align-middle').textContent.includes('AnkiWeb')) {
        return 'AnkiWeb';
    } else if (typeof AnkiDroidJS !== 'undefined') {
        return 'AnkiDroid';
    } else if (typeof pycmd !== 'undefined') {
        return 'AnkiDesktop';
    } else {
        return 'Unknown';
    }
}

function formatCard() {
	const simplified = document.getElementById('simplified').textContent.trim();
	const traditional = document.getElementById('traditional').textContent.trim();
	const pinyin = document.getElementById('pinyin').textContent.trim();
	const blockquoteEL = document.getElementsByTagName('blockquote');

	function checkTrad() {
		// Checks to see if Traditional Characters are different and removes they are the same
		const el = document.getElementById('trad');
		if (el && simplified === traditional) el.remove();
	}
	function findKeywords() { // Searches for vocab words and adds the keyword class
		if (blockquoteEL.length > 0) {
			const reKeywords = (detectAnkiPlatform()==='AnkiMobile') ? new RegExp(`(?:<b(?:.*[^>])?>)?(\\s?${simplified}|${traditional}|${pinyin}\\s?)(?:<\/b>)?`, 'gi') : new RegExp(`(?:<b>)?(\\s?${simplified}|${traditional}|${pinyin}\\s?)(?:<\/b>)?`, 'gi');
			for (const bq of blockquoteEL) {
				bq.innerHTML = bq.innerHTML.replace(reKeywords, '<span class="keyword">$1</span>');
			}
		}
	}	
	function onlyBlockquote() {
		const qtEl = document.getElementById('english');
		const quotes = qtEl.querySelectorAll('blockquote');
		const insert = document.getElementById('example0');
		for (let q of quotes) {
			insert.append(q);
			/* insert by level
			const hanzi = q.firstElementChild
			const pyText = (q.children.length == 3) ? q.children[1] : undefined;
			const translation = q.lastElementChild;
			const bq = document.createElement('blockquote');
			bq.appendChild(hanzi);
			insert.append(hanzi);
			*/
		}
	}
	function isBack(cardType) {
		const isBack = document.getElementById('answer');
		if (isBack) {
			switch (cardType) {
				case 'card1': // Test Pinyin
					const el = document.getElementById('example0');
					el.classList.remove('only-hanzi');
					el.firstElementChild.style.display = 'none';
					el.lastElementChild.style.display = 'block';
					playBoth();
					break;
				case 'card2': // Test Hanzi
					document.getElementById('firstHint').style.display = 'none';
					document.getElementById('hintPinyin').style.display = 'inline';
					document.getElementById('example0').classList.remove('hide-bq');
					playBoth();
					break;
				case 'card3': // Test Meaning
					document.querySelector('div.pinyin > a.hint').style.display = 'none';
					document.querySelector('div.pinyin > div.hint').style.display = 'inline';
					document.getElementById('example0').style.display = 'none';
					break;
			}
		}
	}
	function whichCard() {
		const cardClasses = document.body.classList;
		const cardType = cardClasses[1];
		// card1 is Test Pinyin, card2 is Test Hanzi, card2 is Test Meaning
		checkTrad();
		findKeywords();
		if (cardType==='card3'){
			onlyBlockquote();
			playBoth();
		}
		isBack(cardType);
	}
	whichCard()
};

if (document.readyState === 'loading') {
	// Loading hasn't finished yet
	document.addEventListener('DOMContentLoaded', formatCard);
  } else {
	// `DOMContentLoaded` has already fired
	formatCard();
  }
