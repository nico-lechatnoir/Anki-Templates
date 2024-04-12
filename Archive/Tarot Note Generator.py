import os
# Minor 
SUITS = ["Wands", "Cups", "Swords", "Pentacles"]
NUMBERS = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Page", "Knight", "Queen", "King"]
# Major
MAJOR = {
    0 : "The Fool", 
    1 : "The Magician",
    2 : "The High Priestess",
    3 : "The Empress",
    4 : "The Emperor",
    5 : "The Hierophant",
    6 : "The Lovers",
    7 : "The Chariot",
    8 : "Strength",
    9 : "The Hermit",
    10 : "The Wheel of Fortune",
    11 : "Justice",
    12 : "The Hanged Man",
    13 : "Death",
    14 : "Temperance",
    15 : "The Devil",
    16 : "The Tower",
    17 : "The Star",
    18 : "The Moon",
    19 : "The Sun",
    20 : "Judgment",
    21 : "The World",
}

MINOR = [['Ace of Wands', 'Two of Wands', 'Three of Wands', 'Four of Wands', 'Five of Wands', 'Six of Wands', 'Seven of Wands', 'Eight of Wands', 'Nine of Wands', 'Ten of Wands', 'Page of Wands', 'Knight of Wands', 'Queen of Wands', 'King of Wands'], ['Ace of Cups', 'Two of Cups', 'Three of Cups', 'Four of Cups', 'Five of Cups', 'Six of Cups', 'Seven of Cups', 'Eight of Cups', 'Nine of Cups', 'Ten of Cups', 'Page of Cups', 'Knight of Cups', 'Queen of Cups', 'King of Cups'], ['Ace of Swords', 'Two of Swords', 'Three of Swords', 'Four of Swords', 'Five of Swords', 'Six of Swords', 'Seven of Swords', 'Eight of Swords', 'Nine of Swords', 'Ten of Swords', 'Page of Swords', 'Knight of Swords', 'Queen of Swords', 'King of Swords'], ['Ace of Pentacles', 'Two of Pentacles', 'Three of Pentacles', 'Four of Pentacles', 'Five of Pentacles', 'Six of Pentacles', 'Seven of Pentacles', 'Eight of Pentacles', 'Nine of Pentacles', 'Ten of Pentacles', 'Page of Pentacles', 'Knight of Pentacles', 'Queen of Pentacles', 'King of Pentacles']]

MAJORCARD = """---
created:
modified:
cssclasses: tarot-cards
title: {card}
aliases:
Arcana: Major
Tarot-Order: {ord}
Image:
tags: tarot/MajorArcana
---

# {card}
## Description
## Upright
## Reversed

# My Notes
## My Pulls

```dataview
LIST "Pull Type: " + pull-type
FROM #TarotPull and [[{card}]]
SORT file.ctime
```
"""

MINORCARD = """---
created:
modified:
cssclasses: tarot-cards
title: {card}
aliases:
Arcana: Minor
Suit: {suit}
Tarot-Order: {ord}
Image:
tags: tarot/MinorArcana/{suit}
---

# {cardname}
## Description
## Upright
## Reversed

# My Notes
## My Pulls

```dataview
LIST "Pull Type: " + pull-type
FROM #TarotPull and [[{cardname}]]
SORT file.ctime
```
"""

def create_list():
    for s in SUITS:
        suit_list = []
        for n in NUMBERS:
            #card = n + "of" + s
            suit_list.append(n +" of " + s)
        MINOR.append(suit_list)
    print(MINOR)

path = r'/Users/xiutimmins/Documents/Obsidian/Personal/Tarot'
def create_major_card():
    for i in range(len(MAJOR)):
        f_name = MAJOR.get(i) + ".md"
        with open(os.path.join(path, f_name), 'w') as fp:
            fp.write(MAJORCARD.format(card = MAJOR.get(i), ord = MAJOR.get("num", i)))
    return "Minor Cards Created"

def create_minor_card():
    for s in range(len(SUITS)):
        num = 1
        for n in range(len(NUMBERS)):
            f_name = MINOR[s][n] + ".md"
            with open(os.path.join(path, f_name), 'w') as fp:
                fp.write(MINORCARD.format(suit = SUITS[s], cardname = MINOR[s][n], ord = num))
                num += 1
    return "Major Cards Created"

create_major_card()
create_minor_card()