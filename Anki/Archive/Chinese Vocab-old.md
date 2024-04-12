---
date-modified: 2024-04-12T12:32
---
# Anki Cards

# Card 1 
## Front English + Pinyin
```html
{{#Tags}}<div class=tags>{{Tags}}</div>{{/Tags}}

<div class="english">{{English}}</div>
<div class=pinyin>{{Pinyin}} <br>
	{{^Sound (Mandarin)}}{{tts zh_CN speed=0.9:Simplified}}{{/Sound (Mandarin)}}
	{{#Sound (Mandarin)}}{{Sound (Mandarin)}}{{/Sound (Mandarin)}}
</div>
<script>
  // Split hierarchical tags
  var tagsContainerEl = document.querySelectorAll('.tags > *')
  if (tagsContainerEl.length > 0) {
    var tags = []
    tagsContainerEl.forEach((tagEl) => {
      tagEl.classList.add('prettify-tag')
      tags.push(tagEl.innerHTML)
      tags.forEach((tag) => {
        var childTag = tag.split('::').filter(Boolean)
        tagEl.innerHTML = childTag[childTag.length - 1].trim()
      })
    })
  } else {
    tagsContainerEl = document.querySelector('.tags')
    var tags = tagsContainerEl.innerHTML.split(' ').filter(Boolean)
    var html = '|&nbsp;'
    tags.forEach((tag) => {
      var childTag = tag.split('::').filter(Boolean)
      html +=
        "<span class='prettify-tag'>" +
        childTag[childTag.length - 1] + '&nbsp;|&nbsp;'
        '</span>'
    })
    tagsContainerEl.innerHTML = html
  }
</script>
>
```

## Back Hanzi, Alternates, Classifer, Examples
```html
{{FrontSide}}

<hr id=answer>

<div class="hanzi"><span lang="zh-CN">{{Color Hanzi}}</span>{{#Traditional}}<span lang="zh-HK"> | {{Color Traditional}}</span>{{/Traditional}}</div>


{{#Also Written}}<div class="also" lang="zh-CN"><small>Alt. </small>{{Also Written}}</div>{{/Also Written}}

{{#Classifier}}<div class="classifier" lang="zh-CN"><small>CL: </small>{{Classifier}}</div>{{/Classifier}}

{{#Examples}}<div class="example" lang="zh-CN">{{Examples}}</div>{{/Examples}}

<div class=comment>
	<a href="https://www.mdbg.net/chinese/dictionary?page=worddict&wdrst=0&wdqb={{Simplified}}">MDBG</a>
</div>
```


# Card 2 
## Front Hanzi + Pinyin
```html
<div class=tags>{{Tags}}</div>

<div class="hanzi"><span lang="zh-CN">{{Color Hanzi}}</span>{{#Traditional}}<span lang="zh-HK"> | {{Color Traditional}}</span>{{/Traditional}}</div>

<div class=pinyin>{{Pinyin}}<br>
	{{^Sound (Mandarin)}}{{tts zh_CN speed=0.9:Simplified}}{{/Sound (Mandarin)}}
	{{#Sound (Mandarin)}}{{Sound (Mandarin)}}{{/Sound (Mandarin)}}
</div>

<script>
  // Split hierarchical tags
  var tagsContainerEl = document.querySelectorAll('.tags > *')
  if (tagsContainerEl.length > 0) {
    var tags = []
    tagsContainerEl.forEach((tagEl) => {
      tagEl.classList.add('prettify-tag')
      tags.push(tagEl.innerHTML)
      tags.forEach((tag) => {
        var childTag = tag.split('::').filter(Boolean)
        tagEl.innerHTML = childTag[childTag.length - 1].trim()
      })
    })
  } else {
    tagsContainerEl = document.querySelector('.tags')
    var tags = tagsContainerEl.innerHTML.split(' ').filter(Boolean)
    var html = '|&nbsp;'
    tags.forEach((tag) => {
      var childTag = tag.split('::').filter(Boolean)
      html +=
        "<span class='prettify-tag'>" +
        childTag[childTag.length - 1] + '&nbsp;|&nbsp;'
        '</span>'
    })
    tagsContainerEl.innerHTML = html
  }
</script>
```
## Back English, Alternates, Classifer, Examples
```html
{{FrontSide}}

<hr id=answer>

<div class="english">{{English}}</div>

{{#Also Written}}<div class="also" lang="zh-CN"><small>Alt. </small>{{Also Written}}</div>{{/Also Written}}

{{#Classifier}}<div class="classifier" lang="zh-CN"><small>CL: </small>{{Classifier}}</div>{{/Classifier}}

{{#Examples}}<div class="example" lang="zh-CN">{{Examples}}</div>{{/Examples}}

<div class=comment>
	<a href="https://www.mdbg.net/chinese/dictionary?page=worddict&wdrst=0&wdqb={{Simplified}}">MDBG</a>
</div>
```
# Card 3
## Front Hanzi 
```html
<div class=tags>{{Tags}}</div>

<div class="hanzi"><span lang="zh-CN">{{Simplified}}</span>{{#Traditional}}<span lang="zh-HK"> | {{Traditional}}</span>{{/Traditional}}</div>

<script>
  // Split hierarchical tags
  var tagsContainerEl = document.querySelectorAll('.tags > *')
  if (tagsContainerEl.length > 0) {
    var tags = []
    tagsContainerEl.forEach((tagEl) => {
      tagEl.classList.add('prettify-tag')
      tags.push(tagEl.innerHTML)
      tags.forEach((tag) => {
        var childTag = tag.split('::').filter(Boolean)
        tagEl.innerHTML = childTag[childTag.length - 1].trim()
      })
    })
  } else {
    tagsContainerEl = document.querySelector('.tags')
    var tags = tagsContainerEl.innerHTML.split(' ').filter(Boolean)
    var html = '|&nbsp;'
    tags.forEach((tag) => {
      var childTag = tag.split('::').filter(Boolean)
      html +=
        "<span class='prettify-tag'>" +
        childTag[childTag.length - 1] + '&nbsp;|&nbsp;'
        '</span>'
    })
    tagsContainerEl.innerHTML = html
  }
</script>

```
## Back Pinyin, Engish, Alternates, Classifer, Examples
```html
{{FrontSide}}

<hr id=answer>

<div class="english">{{English}}</div>

<div class=pinyin>{{Pinyin}}<br>
	{{^Sound (Mandarin)}}{{tts zh_CN speed=0.9:Simplified}}{{/Sound (Mandarin)}}
	{{#Sound (Mandarin)}}{{Sound (Mandarin)}}{{/Sound (Mandarin)}}
</div>

{{#Also Written}}<div class="also" lang="zh-CN"><small>Alt. </small>{{Also Written}}</div>{{/Also Written}}

{{#Classifier}}<div class="classifier" lang="zh-CN"><small>CL: </small>{{Classifier}}</div>{{/Classifier}}

{{#Examples}}<div class="example" lang="zh-CN">{{Examples}}</div>{{/Examples}}

<div class=comment>
	<a href="https://www.mdbg.net/chinese/dictionary?page=worddict&wdrst=0&wdqb={{Simplified}}">MDBG</a>
</div>
```

# Card Styling
## Flexoki
[Flexoki Theme css](flexoki-theme.css)
```css
:root {  /* Flexoki Day */
  --tx: #100F0F;
	--tx-2:#6F6E69;
	--tx-3:#B7B5AC;
	--ui:#E6E4D9;
	--ui-2:#DAD8CE;
	--ui-3:#CECDC3;
	--bg: #FFFCF0;
	--bg-2: #F2F0E5;
	--red:#AF3029;
	--orange:#BC5215;
	--yellow:#AD8301;
	--green:#66800B;
	--cyan:#24837B;
	--blue:#205EA6;
	--purple:#5E409D;
	--pink:#A02F6F;
}
.nightMode { /* Flexoki Night */
	--tx: #CECDC3;
	--tx-2: #878580;
	--tx-3: #575653;
	--ui: #282726;
	--ui-2:#343331;
	--ui-3:#403E3C;
	--bg: #100F0F;
	--bg-2: #1C1B1A;
	--red:#D14D41;
	--orange:#DA702C;
	--yellow:#D0A215;
	--green:#879A39;
	--cyan:#3AA99F;
	--blue:#4385BE;
	--purple:#8B7EC8;
	--pink:#CE5D97;
}
```

## Core Card
[Core Card css](core-card.css)
```css
:root {
	/* Calculated from 
	https://www.fluid-type-scale.com/calculate?minFontSize=18&minWidth=1080&minRatio=1.25&maxFontSize=20&maxWidth=1800&maxRatio=1.333&steps=xxs%2Cxs%2Csm%2Cbase%2Cmd%2Clg%2Cxl%2Cxxl%2Cxxxl&baseStep=base&prefix=fs&decimals=2&previewFont=Inter&previewText=Almost+before+we+knew+it%2C+we+had+left+the+ground&previewWidth=1080
	*/
	--fs-xxs: clamp(9.22px, -0.11vi + 10.37px, 8.44px);
	--fs-xs: clamp(11.52px, -0.04vi + 11.92px, 11.26px);
	--fs-sm: clamp(14.4px, 0.08vi + 13.49px, 15px);
	--fs-base: clamp(18px, 0.28vi + 15px, 20px);
	--fs-md: clamp(22.5px, 0.58vi + 16.26px, 26.66px);
	--fs-lg: clamp(28.13px, 1.03vi + 17.01px, 35.54px);
	--fs-xl: clamp(35.16px, 1.7vi + 16.83px, 47.37px);
	--fs-xxl: clamp(43.95px, 2.67vi + 15.14px, 63.15px);
	--fs-xxxl: clamp(54.93px, 4.06vi + 11.07px, 84.17px);

	/* Font Stacks */
	--font-ui: system-ui, sans-serif; /* UI font stack */
	--font-sans-serif: "Helvetica Neue", Helvetica, Inter, Roboto, Arial, sans-serif; /* Sans-Serif Font Stack */
	--font-serif: Georgia, "Times New Roman", Times, serif; /* Serif Font Stack */
	--font-monospace: "Cascadia Code", "Source Code Pro", Menlo, Consolas, "DejaVu Sans Mono",ui-monospace, monospace; /* Monospace Font Stack */
	--font-math: MJXZERO, MJXTEX, STIXGeneral, "Arial Unicode MS", serif; /*Math Font Stack*/
}

.card {
	padding:3% 1%;
	font-family: var(--font-sans-serif);
	font-size: var(--fs-md);
	text-align: center;
	color: black;
	background-color: white;
}

.mobile:not(.ipad) .card {font-size: var(--fs-base);}

.tags {
	color:grey;
	text-align:right;
	font-size:var(--fs-sm);
	font-family: var(--font-ui);
	padding-bottom:10px;
}

```

## Chinese Vocab
```css
@import url("flexoki-theme.css"); /* Import Flexoki Colours */
@import url("core-card.css"); /*Import font sizing* and families */

/* APPLY TO ALL PLATFORMS*/
.card {
    padding:3%;
    font-size: var(--fs-md);
    font-family: var(--font-sans-serif);
		font-optical-sizing: auto;
    line-height: 1.5;
    text-align: center;
    color: var(--tx);
    background-color: var(--bg);
    word-wrap: break-word;
}

.card.nightMode {
		color: var(--tx);
}

.tags { /* Top Info and Answer Box */
    color:var(--tx-3);
    text-align:right;
    font-size:var(--fs-sm);
    padding-bottom:8px;
} 

/* Chinese Fonts*/
.win :lang(zh) {font-family: KaiTi, "MS Mincho", "ＭＳ 明朝", serif;}
.mac :lang(zh-HK) {font-family: "Kaiti TC", STKaiti, "Noto Serif TC", serif;}
.mac :lang(zh-CN) {font-family: "Kaiti SC", STKaiti, "Noto Serif SC", serif;}

.mobile :lang(zh-HK) {font-family: "Noto Serif TC", "Noto Serif Trad", HYQIHei, serif;}
.mobile :lang(zh-CN) {font-family: "Noto Serif SC", "Noto Serif Simp", HYQIHei, serif;}

/* Ensure Traditional and Simplified */
:lang(zh-CN) {font-variant-east-asian: simplified;}
:lang(zh-HK) {font-variant-east-asian: traditional;}


ruby rt {visibility: hidden;}
ruby:hover rt {visibility: visible;}

/* CLASSIFER */
/* RUBY */
.classifier ruby {font-variant-east-asian: ruby;}
.classifier ruby > rt {font-size: 70%;}


/* HANZI */
.mobile .hanzi {font-size:var(--fs-xl);}
.hanzi {font-size:var(--fs-xxl);}

/* ENGLISH */
.english {line-height: 1.2;}
.english :is(ol, ol li) {
		list-style-type: none;
		text-align:center;
		font-size: var(--fs-base);
    margin: 0;
    padding: 0;
		color: var(--tx);
}

.eng-classifer { /*Noun, Adj Pleco*/
    display: block;
    margin-top: 0.3em;
    margin-bottom: 0.3em;
    font-weight: bold;
    font-size: var(--fs-sm);
    text-transform: uppercase;
    color: var(--tx-3);
}

/* PINYIN */
.pinyin a.hint{font-style:italic;}
.tone1 {color: var(--red);} /* Red */
.tone2 {color: var(--orange);} /* Orange */
.tone3 {color: var(--green);} /* Green */
.tone4 {color: var(--blue);} /* Blue */
.tone5 {color: var(--tx-2);} /* Gray */

/* ALSO */
.also {font-size:var(--fs-md);}

/* Make info smaller */
.classifier small, .also small {
	font-size:var(--fs-base);
	color:var(--tx-2);
	font-variant: small-caps;
	vertical-align:bottom;
}

/* EXAMPLES */
.example::before {
		font-size: var(--fs-sm);
    content: "Ex:";
    display: block;
    color: var(--tx-2);
		font-variant: small-caps;
    text-decoration:underline;
    margin-bottom: 1%;
}

.example {
		font-size: var(--fs-base);
    color: var(--tx-2);
    line-height: 1.2;
    text-align: left;
    margin: 3% 5%;
    min-height: calc(var(--fs-base)*4.5);
    max-height: clamp(calc(var(--fs-base)*7), calc(var(--fs-base)*16), 35vh);
    overflow-y: auto;
    border-block-end:2px solid var(--ui-2);
    border-end-start-radius:2%;
    border-end-end-radius:2%;
}

.example br:nth-of-type(3n+2){ /* Add spacing between examples */
    display: flex;
    height: 0rem;
}

/* COMMENT */
.replay-button svg {
	width: 20px;
	height: 20px;
}
.replay-button svg circle {fill: var(--bg);}
.replay-button svg path {fill: var(--tx-2);}
.comment a {
	font-size: var(--fs-sm);
	color: var(--tx-2);
	text-decoration:underline;
}
```