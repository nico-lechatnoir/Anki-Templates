# This is to create level tags for Anki Talk to Me in Korean deck

root_str = "KOREAN::TTMIK:Level_"
Les_str = "::Lesson"

level = range(3,11)

Lesson = range(3,6)

for i in range(3,11):
    i = str(i)
    tags = []
    for a in range(1,31):
        a = str(a)
        a = a.rjust(3, "0")
        tags.append(root_str+i+Les_str+a)
    print(tags)
