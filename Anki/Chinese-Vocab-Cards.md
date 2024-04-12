---
date-modified: 2024-04-12T13:02:00
---
# Anki Cards

# Card 1 
## Front English + Pinyin
```html
<div class="prettify-flashcard">
  <div class="prettify-field prettify-field--front">
    {{#Tags}}<div class="prettify-tags">{{Tags}}</div>{{/Tags}}

    <div class="english">{{English}}</div>
    <div class="pinyin">{{Pinyin}} <br>
      {{^Sound (Mandarin)}}{{tts zh_CN speed=0.9:Simplified}}{{/Sound (Mandarin)}}{{Sound (Mandarin)}}
    </div>
</div>

<script>
  // Split hierarchical tags
  var tagsContainerEl = document.querySelectorAll('.prettify-tags > *')
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
    tagsContainerEl = document.querySelector('.prettify-tags')
    var tags = tagsContainerEl.innerHTML.split(' ').filter(Boolean)
    var html = ''
    tags.forEach((tag) => {
      var childTag = tag.split('::').filter(Boolean)
      html +=
        "<span class='prettify-tag'>" +
        childTag[childTag.length - 1] +
        '</span>'
    })
    tagsContainerEl.innerHTML = html
  }
</script>
```

## Back Hanzi, Alternates, Classifer, Examples
```html
<div class="prettify-flashcard">
  <div class="prettify-field prettify-field--front">
    {{#Tags}}<div class="prettify-tags">{{Tags}}</div>{{/Tags}}
    
    <div class="english">{{English}}</div>
    <div class="pinyin">{{Pinyin}} <br>
      {{^Sound (Mandarin)}}{{tts zh_CN speed=0.9:Simplified}}{{/Sound (Mandarin)}}{{Sound (Mandarin)}}
    </div>
  </div>

  <hr class="prettify-divider prettify-divider--answer" id="answer" />
    
  <div class="prettify-field prettify-field--back">
    <div class="hanzi"><span lang="zh-CN">{{Color Hanzi}}</span><span lang="zh-HK"> | {{Color Traditional}}</span></div>

    <span lang="zh-CN">
      {{#Also Written}}<div class="also">{{Also Written}}</div>{{/Also Written}}
      {{#Classifier}}<div class="classifier">{{Classifier}}</div>{{/Classifier}}
      {{#Examples}}<div class="example">{{Examples}}</div>{{/Examples}}
    </span>
    <div class=comment><a href="https://www.mdbg.net/chinese/dictionary?page=worddict&wdrst=0&wdqb={{Simplified}}">MDBG</a></div>
  </div>
</div>

<script>
  // Split hierarchical tags
  var tagsContainerEl = document.querySelectorAll('.prettify-tags > *')
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
    tagsContainerEl = document.querySelector('.prettify-tags')
    var tags = tagsContainerEl.innerHTML.split(' ').filter(Boolean)
    var html = ''
    tags.forEach((tag) => {
      var childTag = tag.split('::').filter(Boolean)
      html +=
        "<span class='prettify-tag'>" +
        childTag[childTag.length - 1] +
        '</span>'
    })
    tagsContainerEl.innerHTML = html
  }
</script>
```

# Card 2 
## Front Hanzi + Pinyin
```html
<div class="prettify-flashcard">
  <div class="prettify-field prettify-field--front">
    {{#Tags}}<div class="prettify-tags">{{Tags}}</div>{{/Tags}}
    
    <div class="hanzi"><span lang="zh-CN">{{Color Hanzi}}</span><span lang="zh-HK"> | {{Color Traditional}}</span></div>
    
    <div class="pinyin">{{Pinyin}}<br>
      {{^Sound (Mandarin)}}{{tts zh_CN speed=0.9:Simplified}}{{/Sound (Mandarin)}}{{Sound (Mandarin)}}
    </div>
  </div>
</div>
<script>
  // Split hierarchical tags
  var tagsContainerEl = document.querySelectorAll('.prettify-tags > *')
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
    tagsContainerEl = document.querySelector('.prettify-tags')
    var tags = tagsContainerEl.innerHTML.split(' ').filter(Boolean)
    var html = ''
    tags.forEach((tag) => {
      var childTag = tag.split('::').filter(Boolean)
      html +=
        "<span class='prettify-tag'>" +
        childTag[childTag.length - 1] +
        '</span>'
    })
    tagsContainerEl.innerHTML = html
  }
</script>
```

## Back English, Alternates, Classifer, Examples
```html
<div class="prettify-flashcard">
  <div class="prettify-field prettify-field--front">
    {{#Tags}}<div class="prettify-tags">{{Tags}}</div>{{/Tags}}
    <div class="hanzi"><span lang="zh-CN">{{Color Hanzi}}</span><span lang="zh-HK"> | {{Color Traditional}}</span></div>
    
    <div class="pinyin">{{Pinyin}} <br>
      {{^Sound (Mandarin)}}{{tts zh_CN speed=0.9:Simplified}}{{/Sound (Mandarin)}}{{Sound (Mandarin)}}
    </div>
  </div>
  <hr class="prettify-divider prettify-divider--answer" id="answer" />
    
  <div class="prettify-field prettify-field--back">
    <div class="english">{{English}}</div>
    <span lang="zh-CN">
      {{#Also Written}}<div class="also">{{Also Written}}</div>{{/Also Written}}
      {{#Classifier}}<div class="classifier">{{Classifier}}</div>{{/Classifier}}
      {{#Examples}}<div class="example">{{Examples}}</div>{{/Examples}}
    </span>
    <div class=comment><a href="https://www.mdbg.net/chinese/dictionary?page=worddict&wdrst=0&wdqb={{Simplified}}">MDBG</a></div>
  </div>
</div>

<script>
  // Split hierarchical tags
  var tagsContainerEl = document.querySelectorAll('.prettify-tags > *')
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
    tagsContainerEl = document.querySelector('.prettify-tags')
    var tags = tagsContainerEl.innerHTML.split(' ').filter(Boolean)
    var html = ''
    tags.forEach((tag) => {
      var childTag = tag.split('::').filter(Boolean)
      html +=
        "<span class='prettify-tag'>" +
        childTag[childTag.length - 1] +
        '</span>'
    })
    tagsContainerEl.innerHTML = html
  }
</script>
```

# Card 3
## Front Hanzi 
```html
<div class="prettify-flashcard">
  <div class="prettify-field prettify-field--front">
    {{#Tags}}<div class="prettify-tags">{{Tags}}</div>{{/Tags}}
    
    <div class="hanzi"><span lang="zh-CN">{{Color Hanzi}}</span><span lang="zh-HK"> | {{Color Traditional}}</span></div>
    
    <div class="pinyin">
      {{^Sound (Mandarin)}}{{tts zh_CN speed=0.9:Simplified}}{{/Sound (Mandarin)}}{{Sound (Mandarin)}}
    </div>
  </div>
</div>

<script>
  // Split hierarchical tags
  var tagsContainerEl = document.querySelectorAll('.prettify-tags > *')
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
    tagsContainerEl = document.querySelector('.prettify-tags')
    var tags = tagsContainerEl.innerHTML.split(' ').filter(Boolean)
    var html = ''
    tags.forEach((tag) => {
      var childTag = tag.split('::').filter(Boolean)
      html +=
        "<span class='prettify-tag'>" +
        childTag[childTag.length - 1] +
        '</span>'
    })
    tagsContainerEl.innerHTML = html
  }
</script>
```

## Back Pinyin, Engish, Alternates, Classifer, Examples
```html
<div class="prettify-flashcard">
  <div class="prettify-field prettify-field--front">
    {{#Tags}}<div class="prettify-tags">{{Tags}}</div>{{/Tags}}
    <div class="hanzi"><span lang="zh-CN">{{Simplified}}</span><span lang="zh-HK"> | {{Traditional}}</span></div>
    
      {{^Sound (Mandarin)}}{{tts zh_CN speed=0.9:Simplified}}{{/Sound (Mandarin)}}{{Sound (Mandarin)}}
  </div>
  <hr class="prettify-divider prettify-divider--answer" id="answer" />
    
  <div class="prettify-field prettify-field--back">
    <div class="english">{{English}}</div>
    <div class="pinyin">{{Pinyin}}</div>

    <span lang="zh-CN">
      {{#Also Written}}<div class="also">{{Also Written}}</div>{{/Also Written}}
      {{#Classifier}}<div class="classifier">{{Classifier}}</div>{{/Classifier}}
      {{#Examples}}<div class="example">{{Examples}}</div>{{/Examples}}
    </span>
    <div class=comment><a href="https://www.mdbg.net/chinese/dictionary?page=worddict&wdrst=0&wdqb={{Simplified}}">MDBG</a></div>
  </div>
</div>

<script>
  // Split hierarchical tags
  var tagsContainerEl = document.querySelectorAll('.prettify-tags > *')
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
    tagsContainerEl = document.querySelector('.prettify-tags')
    var tags = tagsContainerEl.innerHTML.split(' ').filter(Boolean)
    var html = ''
    tags.forEach((tag) => {
      var childTag = tag.split('::').filter(Boolean)
      html +=
        "<span class='prettify-tag'>" +
        childTag[childTag.length - 1] +
        '</span>'
    })
    tagsContainerEl.innerHTML = html
  }
</script>
```

# Card Styling
## Flexoki
[Flexoki Theme css](flexoki-theme.css)
```css
:root { /* Flexoki Day */
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
.nightMode {/* Flexoki Night */
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
Card Styling is based off of a modified [Prettify Minimal Theme](minimal.css) or click [here](https://github.com/pranavdeshai/anki-prettify/tree/9d1a9cad9c047e3be4f804fc1958c93b132977ae/themes/minimal) for the original code.

View:
 - [Core Card css](core-card.css)
 - [Flexoki Theme css](flexoki-theme.css)
 - [Chinese Vocab Card](Chinese-Vocab.css)

```css
@import url("flexoki-theme.css"); /* Import Flexoki Colours */
@import url("core-card.css"); /*Import font sizing* and families */
@import url("Chinese-Vocab.css"); /*Import font sizing* and families */

.card {
  cursor: default;
  padding: 0.5em 0;
	background-color: #F2F0E5;
	color: var(--tx);
  font-family: var(--font-sans-serif);
	
}
.card.nightMode {background-color: var(--bg-2);}

html:not(.mobile) .card {padding: 0.5em;}
.card::-webkit-scrollbar {display: none;}
/* -------------------------------------------------- FLASHCARD */
.prettify-flashcard {
  background-color: var(--bg);
  border-radius: 8px;
  border: 1px solid var(--ui);
  box-shadow: var(--ui) 0px 7px 14px 0px,
    var(--ui) 0px 3px 6px 0px;
  color: var(--tx);
  font-family: var(--font-sans-serif);
  font-size: var(--fs-md);
  line-height: 1.5;
  margin: 0 auto;
  max-width: 40em;
  text-align: center;
  word-wrap: break-word;
}
.prettify-flashcard ::selection {background-color: var(--ui-2);}

/* -------------------------------------------------- FIELDS */
.prettify-field {margin: 2rem;}
.mobile .prettify-field {margin: 1rem;}
.prettify-field--front{font-size: var(--fs-md);}
.prettify-field--back {margin-top:0;}

/* -------------------------------------------------- TAGS */
.prettify-tags {
  margin: 0 0 2rem 0;
  display: flex;
  flex-flow: row-wrap;
	flex-direction: row-reverse;
  font-size: var(--fs-sm);
}
.mobile .prettify-tags {margin: 1em;}

.prettify-tag {
  all: initial;
  background-color: var(--bg-2);
  border-radius: 0.2em;
  color: var(--tx-2);
  display: inline;
  font-size: var(--fs-sm);
  font-family: var(--font-sans-serif);
  margin: 0 0.5em 0.5em 0;
  padding: 0.25em;
  word-break: break-word;
}

/* -------------------------------------------------- DIVIDER */
.prettify-divider {
  background-color: transparent;
  border: none;
  border-bottom: 1px dashed var(--ui-3);
  margin: 1em;
  padding: 0;
}
.prettify-divider--answer {margin: 0 0 1em;}
```