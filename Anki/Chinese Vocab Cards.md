# Card One - English + Pinyin 

## Front
``` html
<div class=tags>{{Tags}}</div>

<div class="english">{{English}}</div>
<div class=pinyin>{{Pinyin}}</div>
```
## Back
```html
{{FrontSide}}

<hr id=answer>

<div><span lang="zh-CN">{{Simplified}}</span>{{#Traditional}}<span lang="zh-HK">| {{Traditional}}</span>{{/Traditional}}</div>
{{#Also Written}}<div class=comment>Also Written:</span><span lang="zh-CN"> {{Also Written}}</span></div>{{/Also Written}}
{{#Classifier}}<div class=comment>Classifier:</span><span lang="zh-CN"> {{Classifier}}</span></div>{{/Classifier}}
{{#Examples}}<div class="example"><span lang="zh-CN">{{Examples}}</span></div>{{/Examples}}

<div class=comment>{{#Sound (Mandarin)}}{{Sound (Mandarin)}} {{/Sound (Mandarin)}}
    <a href="http://www.mdbg.net/chindict/chindict.php?page=worddict&wdrst=0&wdqb={{text:Simplified}}">MDBG</a>
</div>
```

# Card 2 - Char + Pinyin
## Front
```html
<div class=tags>{{Tags}}</div>

<div><span lang="zh-CN">{{Simplified}}</span>{{#Traditional}}<span lang="zh-HK">| {{Traditional}}</span>{{/Traditional}}</div>

<div class="pinyin">{{Pinyin}}</div>
```
## Back
```html
{{FrontSide}}

<hr id=answer>

<div class="english">{{{English}}</div>
{{#Also Written}}<div class=comment>Also Written:</span><span lang="zh-CN"> {{Also Written}}</span></div>{{/Also Written}}
{{#Classifier}}<div class=comment>Classifier:</span><span lang="zh-CN"> {{Classifier}}</span></div>{{/Classifier}}
{{#Examples}}<div class="example"><span lang="zh-CN">{{Examples}}</span></div>{{/Examples}}

<div class=comment>{{#Sound (Mandarin)}}{{Sound (Mandarin)}} {{/Sound (Mandarin)}}
    <a href="http://www.mdbg.net/chindict/chindict.php?page=worddict&wdrst=0&wdqb={{text:Simplified}}">MDBG</a>
</div>
```

# Card 3
## Front - Characters
```html
<div class=tags>{{Tags}}</div>

<div><span lang="zh-CN">{{Simplified}}</span>{{#Traditional}}<span lang="zh-HK">| {{Traditional}}</span>{{/Traditional}}</div>
```
## Back
```html
{{FrontSide}}

<hr id=answer>

<div class="english">{{English}}</div>
<div class=pinyin>{{Pinyin}}</div>

{{#Also Written}}<div class=comment>Also Written:</span><span lang="zh-CN"> {{Also Written}}</span></div>{{/Also Written}}
{{#Classifier}}<div class=comment>Classifier:</span><span lang="zh-CN"> {{Classifier}}</span></div>{{/Classifier}}
{{#Examples}}<div class="example"><span lang="zh-CN">{{Examples}}</span></div>{{/Examples}}

	<!-- {{Sound (Mandarin)}} -->
</span>

<div class=comment>{{#Sound (Mandarin)}}{{Sound (Mandarin)}} {{/Sound (Mandarin)}}
    <a href="http://www.mdbg.net/chindict/chindict.php?page=worddict&wdrst=0&wdqb={{text:Simplified}}">MDBG</a>
</div>
```