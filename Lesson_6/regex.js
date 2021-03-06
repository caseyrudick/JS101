
// #25
// using regex, determine if 'o' is in the string bobcat
// using regex, produce an array of all the occurences of 'b','c','t' in bobcat
// /o/.test('bobcat')
// 'bobcat'.match(/[bct]/g)

// #26 
// create an array of all the matching instances of 'dog, cat, and rabbit in the following string 
// via regex
// The lazy cat.
// The dog barks.
// Down the rabbit hole.
// The lazy cat, chased by the barking dog,
// dives down the rabbit hole.
// catalog
// The Yellow Dog
// My bearded dragon's name is Darwin
// let regen = new RegExp(/(cat|dog|rabbit)/gi)
// let matchings = str.match(regen)
// console.log(matchings)

// #27 
// find all instances of (cat|dog) in the following strings via regex
// (cat|dog)
// bird(cat|dog)zebra
// cat
// dog

// #28 
// write a regex that matches any of the following fruits:
// newstring = "banana orange pineapples strawberry raspberry grappler"

// let nRegex = new RegExp(/(banana|apple|orange|strawberry)/g)
// console.log(newstring.match(nRegex))

// #29 
// write a regex that matches a comma or space
// str1 = 'This line has spaces'
// str2 = 'This,line,has,commas,'
// str3 = 'No-spaces-or-commas'

// let nnewwrege = new RegExp(/( |,)/g)

// #30 
// Write a regex that matches blueberry or blackberry, but write berry precisely once.
// strings =  "blueberry blackberry black berry strawberry"

// newRegex = new RegExp(/(blue|black)berry/)
// console.log(strings.match(newRegex))

// #30
// write a regex that matches any two characters where the first character is an a,b, or c 
// and the second is a 1 or 2

// let neRegex = new RegExp(/[abc][12]/g)
// strings = "a2, Model 640c1, a1 a2 a3 b1 b2 b3 c1 c2 c3 d1 d2 d3"
// console.log(strings.match(neRegex))

// #31
// write a regex that finds the occurrences of cat, cot, cut, bat, bot, or but
// strings = 'My cats, Butterscotch and Pudding, like to sleep on my cot with me, but they cut my sleep My cats, Butterscotch and Pudding, like to sleep on my cot with me, but they cut my sleep around. I need a robotic cat feeder.'

// console.log(strings.match(/[bc][aou]t/g))

// #32
// write regex that fids base 20 digits which are upper&lower case a-j & 0-9
// strings = "0xDEADBEEF 1234.5678 Jamaica plow ahead"

// console.log(strings.match(/[0-9A-J]/gi))

// #33
// write a regex that finds any letter except x or X
// strings = "0x1234 Too many XXXXXXXXXXxxxxxxXXXXXXXXXXXX to count. The quick brown fox jumps over the lazy dog THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG"

// console.log(strings.match(/[A-WYZ]/gi).length)

// #34
// are /(ABC|abc)/ and /[Aa][Bb][Cc]/ equivalent? If not how do they differ?

// No they are not equivalent.  Former matches ABC or abc whereas the latter matches any strings consisting of abc regardless of case

// #35
// are /abc/i & /[Aa][Bb][Cc]/ equivalent?  

// yes they are equivalent 

// #36
// write a regex that matches a string that looks like a negative character class range.  e.g. [^a-z]
// strings = "The regex /[^a-z]/i matches any character that is not a letter. Similarly, /[^0-9]/ matches any non-digit while /[^A-Z]/ matches any character that is not an uppercase letter. Beware: /[^+-<]/ is at best obscure, and may even be wrong."

// console.log(strings.match(/\[\^[0-9A-Za-z]-[0-9A-Za-z]/gi).length)

// #37 
// write a regex that matches any sequence of 3 characters delimited by whitespace characters
// strings = "reds and blues the lazy cat sleeps"

// console.log(strings.match(/\s...\s/))

// #38 
// write a regex that matches any four digit hexadecimal number that is both preceded
// and followed by whitespace
// strings = "Hello 4567 bye CDEF - cdef 0x1234 0x5678 0xABCD 1F8A done"

// console.log(strings.match(/\s[\da-f][\da-f][\da-f]/gi))

// #39
// write a regex that matches any sequence of 3 letters
// strings = "Hello 4567 bye CDEF - cdef 0x1234 0x5678 0xABCD 1F8A done"

// console.log(/strings.match(/[a-z][a-z][a-z]/gi))

// #40 
// write a regex that matches the word The when it occurs at the beginning of a line 
// strings = "The lazy cat sleeps."
// strings2 = "The number 623 is not a word." 
// strings3 = "Then, we went to the movies."
// strings4 = "Ah. The bus has arrived."

//console.log(strings.match(/^The\b/))

// #41
// regex that matches the word cat when it occurs at the end of a line
// strings = [["The lazy cat sleeps."], ["The number 623 is not a cat" ], ["The Alaskan drives a snowcat"], ["Ah. The bus has arrived."]]

// strings.forEach(sentence => {
//   console.log(sentence[0].match(/\bcat$/g))
// })

// #42 
// regex that matches any 3 letter words
// strings = [["reds and blues"], ["The lazy cat sleeps."], ["The number 623 is not a word. Or is it?"]]

// strings.forEach(sentence => {
//   console.log(sentence[0].match(/\b[a-z][a-z][a-z]\b/gi))
// })

// #43
// regex for entire line of text: 1st word is "A" or "The".  single space between first and second words.  Second word is any 4 letter word.  
// single space between 3 & 4th.  3rd word is ther dog or cat
// strings = [["A grey cat"], ["The lazy dog"], ["The white cat"], ["A loud dog"], ["Go away dog"], ["The ugly rat"], ["The lazy, loud dog"]]

// strings.forEach(sentence => {
//   console.log(sentence[0].match(/(^A\b|^The\b)\s[a-zA-Z][a-zA-Z][a-zA-Z][a-zA-Z]\s(dog|cat)$/g))
// })

// #44 
// match numbers that are 3 or more digits in length uses ranges
// strings = [["Four and 20 black birds"], ["365 days in a year, 100 years in a century."], ["My phone number is 222-555-1212."], ["My serial number is 345678912."]]

// strings.forEach(sentence => {
//   console.log(sentence[0].match(/\b\d{3,}\b/g))
// })

// #45
// write a regex that matches any word that begins with b and ends with an e, and has any number of 
// letters in-between
// strings = [["To be or not to be"], ["Be a busy bee"], ["I brake for animals."]]
// strings.forEach(sentence => {
//   console.log(sentence[0].match(/\bb[a-z]*e\b/gi))
// })

// #46
// write a regex that matches strings with a "?" at the end
// strings = [["What's up, doc?"], ["Say what? No way."], ["?"],["Who? What? Where? When? How?"]]
// strings.forEach(sentence => {
//   console.log(sentence[0].match(/\?$/gi))
// })

// #47 
// write a regex that matches strings with a "?" at the end, but have more than just ?
// strings = [["What's up, doc?"], ["Say what? No way."], ["?"],["Who? What? Where? When? How?"]]

// strings.forEach(sentence => {
//   console.log(sentence[0].match(/^.+\?$/gi))
// })

// #48
// write a regex that matches any line of text that contains nothing but a URL
// and has no white spaces.  Match must return entire line
// strings = [["http://launchschool.com/"], ["https://mail.google.com/mail/u/0/#inbox"], ["htpps://example.com"],["Go to http://launchschool.com/"],['https://user.example.com/test.cgi?a=p&c=0&t=0&g=0 hello'],['    http://launchschool.com/']]

// strings.forEach(sentence => {
//   console.log(sentence[0].match(/^https?\:\/\/\S*$/gi))
// })

// #49
// rewrite above so it can have leading or trailing whitespaces
// strings = [["http://launchschool.com/"], ["https://mail.google.com/mail/u/0/#inbox"], ["htpps://example.com"],["Go to http://launchschool.com/"],['https://user.example.com/test.cgi?a=p&c=0&t=0&g=0 hello'],['    http://launchschool.com/']]

// strings.forEach(sentence => {
//   console.log(sentence[0].match(/^\s*https?\:\/\/\S*\s*$/gi))
// })

// #50
// regex that matches any word that  contains at least 3 instances of i
// strings = [["Mississippi"], ["ziti 0minimize7"], ["inviting illegal iridium"]]

// strings.forEach(sentence => {
//   console.log(sentence[0].match(/\b([a-z]*i){3}[a-z]*\b/gi))
// })

// #51 
// regex that matches the last word in each line of text
// strings = [["What's up, doc?"], ["Thufferin' thuccotath!"], ["Camptown ladies sing this song, doo dah."]]

// strings.forEach(sentence => {
//   console.log(sentence[0].match(/\S+$/gi))
// })

// #52
// write a regex that matches the lines of text that contain at least 3, 
// but no more than 6, consecutive commas separated by nums
// strings = [[",123,456,789,123,345,"], [",123,456,,789,123,"], [",23,56,7,"],[",13,45,78,23,45,34,"],[",13,45,78,23,45,34,56,"]]

// strings.forEach(sentence => {
//   console.log(sentence[0].match(/^,(\d+\,){3,6}$/g))
// })


// #53
// write a regex that matches lines of text that contain either 3 
// comma separated numbers or 6 or more comma separated numbers
// strings = [["123,456,789,123,345"], ["123,456,,789,123"], ["23,56,7"],["13,45,78,23,45,34"],["13,45,78,23,45,34,56"]]

// strings.forEach(sentence => {
//   console.log(sentence[0].match(/(^(\d+,){2}\d+$|^(\d+,){5,}\d+$)/))
// })

// #54
// write a regex that matches HTML h1 header tags.  And the content between opening and closing tabs
{/* <h1>Main Heading</h1>
<h1>Another Main Heading</h1>

/<h1>.*?<\/h1>/</h1> */}



