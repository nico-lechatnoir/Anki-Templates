---
date-modified: 2024-04-12T13:25:00
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
      {{^Sound (Mandarin)}}{{tts zh_CN speed=0.9:Simplified}}{{/Sound (Mandarin)}}
      {{#Sound (Mandarin)}}{{Sound (Mandarin)}}{{/Sound (Mandarin)}}
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
      {{^Sound (Mandarin)}}{{tts zh_CN speed=0.9:Simplified}}{{/Sound (Mandarin)}}
      {{#Sound (Mandarin)}}{{Sound (Mandarin)}}{{/Sound (Mandarin)}}
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
    
    <div class="pinyin">{{Pinyin}} <br>
      {{^Sound (Mandarin)}}{{tts zh_CN speed=0.9:Simplified}}{{/Sound (Mandarin)}}
      {{#Sound (Mandarin)}}{{Sound (Mandarin)}}{{/Sound (Mandarin)}}
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
      {{^Sound (Mandarin)}}{{tts zh_CN speed=0.9:Simplified}}{{/Sound (Mandarin)}}
      {{#Sound (Mandarin)}}{{Sound (Mandarin)}}{{/Sound (Mandarin)}}
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
    
    <div class="hanzi"><span lang="zh-CN">{{Simplified}}</span><span lang="zh-HK"> | {{Traditional}}</span></div>
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
  </div>

  <hr class="prettify-divider prettify-divider--answer" id="answer" />
    
  <div class="prettify-field prettify-field--back">
    <div class="english">{{English}}</div>
    <div class="pinyin">{{Pinyin}} <br>
      {{^Sound (Mandarin)}}{{tts zh_CN speed=0.9:Simplified}}{{/Sound (Mandarin)}}
      {{#Sound (Mandarin)}}{{Sound (Mandarin)}}{{/Sound (Mandarin)}}
    </div>

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
## Chinese Vocab
Card Styling is based off of a modified [Prettify Minimal Theme](minimal.css) or click [here](https://github.com/pranavdeshai/anki-prettify/tree/9d1a9cad9c047e3be4f804fc1958c93b132977ae/themes/minimal) for the original code.

View:
 - [Core Card css](core-card.css)
 - [Flexoki Theme css](flexoki-theme.css)
 - [Chinese Vocab Card](Chinese-Vocab.css)

```css
@import url("core-card.css"); /* Import font sizing and stacks */
@import url("flexoki-theme.css"); /* Import Flexoki Colours */
@import url("Chinese-Vocab.css"); /*Import vocab styling */

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
