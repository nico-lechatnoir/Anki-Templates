function playBoth() {
	const maleAudio = document.querySelector('#male .soundLink, #male .replaybutton');
	const femaleAudio = document.querySelector('#female .soundLink, #female .replaybutton');
	const rand = Math.round(Math.random());
	if (rand === 0) {
		if (maleAudio) maleAudio.click();
		if (femaleAudio) setTimeout(() => { femaleAudio.click(); }, 1000);
	} else {
		if (femaleAudio) femaleAudio.click();
		if (maleAudio) setTimeout(() => { maleAudio.click(); }, 1000);
	}
}
function getNum() {
	// Create a 2 step hint showing length of words before Hanzi
	const clue = document.getElementById('firstHint');
	if (clue.innerText.startsWith('#')) {
		const simp = document.getElementById('simplified').textContent.trim().length;
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
function randomFont() {
	const FONTSETS = {
		'zh-cmn-Hans-CN': ['HanziPen SC', 'Heiti SC', 'Kaiti SC', 'Libian SC', 'LingWai SC', 'Xingkai SC'],
		'zh-cmn-Hant-TW': ['HanziPen TC', 'Heiti TC', 'Kaiti TC', 'Libian TC', 'LingWai TC', 'Xingkai TC']
	};
	const INDEX = Math.floor(Math.random() * FONTSETS['zh-cmn-Hans-CN'].length);
	const WORDS = document.getElementById('conditionalContent').children;
	const REGEX = new RegExp(`${Object.keys(FONTSETS).join('|')}`, "i");
	for (w of WORDS) {
		if (REGEX.test(w.lang)){
			let font = FONTSETS[w.lang][INDEX];
			w.setAttribute('style', `font-family:${font};`);
			//w.style.fontFamily = font;

			console.log("Selected font:", font);
			//console.log(w, w.attributes)
			//console.log("Attributes: ",w.attributes.getNamedItem("style"), "style.fontFamily: ", w.style.fontFamily)
		}
	}
};
function formatCard() {
	const simplified = document.getElementById('simplified').textContent.trim();
	const traditional = document.getElementById('traditional').textContent.trim();
	const pinyin = document.getElementById('pinyin').textContent.trim();
	const blockquoteEL = document.getElementsByTagName('blockquote');
	const bqLength = blockquoteEL.length;
	const cardType = document.getElementById('cardType').textContent.trim();
	const isBack = document.getElementById('answer');
	const platform = detectAnkiPlatform();
	//console.log(simplified, traditional, pinyin, blockquoteEL, cardType, isBack, platform)

	function checkTrad() {
		// Checks to see if Traditional Characters are different and removes they are the same
		const el = document.getElementById('trad');
		if (el && simplified !== traditional) el.classList.toggle('hide');
	}
	function findKeywords() {
		// Searches for vocab words and adds the keyword class
		if (bqLength > 0) {
			const reKeywords = (platform === 'AnkiMobile') ? new RegExp(`(?:<b(?:.*[^>])?>)?(\\s?${simplified}|${traditional}|${pinyin}\\s?)(?:<\/b>)?`, 'gi') : new RegExp(`(?:<b>)?(\\s?${simplified}|${traditional}|${pinyin}\\s?)(?:<\/b>)?`, 'gi');
			for (const bq of blockquoteEL) {
				if (bq.getElementsByClassName('keyword').length === 0) bq.innerHTML = bq.innerHTML.replace(reKeywords, '<span class="keyword">$1</span>');
			}
		}
	}
	function onlyBlockquote() {
		// Inserts only contents of blockquotes into new element
		if (bqLength > 0) {
			const insert = document.getElementById('example0');
			for (let bq of blockquoteEL) {
				insert.append(bq);
				/* insert by level
				const hanzi = bq.firstElementChild;
				const pyText = (bq.children.length === 3) ? bq.children[1] : undefined;
				const translation = bq.lastElementChild;
				const el = document.createElement('blockquote');
				el.appendChild(hanzi);
				insert.append(hanzi);
				*/
			}
		}
	}
	switch (cardType) {
		case 'Test Pinyin': // Test Pinyin
			checkTrad();
			findKeywords();
			if (isBack) {
				const el = document.getElementById('example0');
				el.classList.remove('only-hanzi');
				el.firstElementChild.style.display = 'none';
				el.lastElementChild.style.display = 'block';
			}
			break;
		case 'Test Hanzi':
			if (isBack) {
				checkTrad();
				findKeywords();
				document.getElementById('firstHint').style.display = 'none';
				document.getElementById('hintPinyin').style.display = 'inline';
				document.getElementById('example0').classList.remove('hide-bq');
			}
			break;
		case 'Test Meaning':
			checkTrad();
			findKeywords();
			if (!isBack) {
				onlyBlockquote();
			} else {
				document.querySelector('div.pinyin > a.hint').style.display = 'none';
				document.querySelector('div.pinyin > div.hint').style.display = 'inline';
				document.getElementById('example0').style.display = 'none';
			}
			break;
		default:
			checkTrad();
			findKeywords();
	};
};
if (document.readyState === 'loading') {
	// Loading hasn't finished yet
	document.addEventListener('DOMContentLoaded', formatCard);
} else {
	// `DOMContentLoaded` has already fired
	formatCard();
}
