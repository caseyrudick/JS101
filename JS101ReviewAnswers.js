// #1 What is the return value of: [1,2,3].filter(num => ‘hi’)
// ANSWER
// //  filter performs selection based on the truthiness of the callback's return value.  In this case, the return value is always 'hi'
// //  which is always truthy  therefore filter will return a new array containing all of the lemetns in the original array

// #2 What is the return value of map in the following code?
// [1, 2, 3].map(num => {
//   num * num;
// });
// ANSWER
// //  returns a new array of [undefined, undefined, undefined]
// //  map considers the return value of the callback function to decide elements in the returned array
// //  each element in the original array is replaced by what the callback returns for that element
// //  no explicit return statement, so return undefined

// #3 What is the return value of map in this case:
// [1, 2, 3].map(num => num * num);
// ANSWER
// //  without braces surrounding the body, map returns the calculated value as the return value

// #4 What is the reutn value of the following statement?
// ['ant', 'bear', 'caterpillar'].pop().length
// ANSWER
// //  8. This is because pop() returns the last element of an array and length is returning the length
// //  of that element

// #5 What is the callback's return value in the following code?
// Also what is the return value of 'every' in this code?
//   [1, 2, 3].every(num => {
//   return num = num * 2;
// });
// ANSWER  
// // Callback returns the value of num*2.  Every returns 'true'

// #6 How does Array.prototype.fill work? Is it destructive? How can we find out?
// let arr = [1, 2, 3, 4, 5]
// arr.fill(1, 1, 5);
// ANSWER
// // fill is destructive.  It takes the first argument and overwrites the array from index 
// // of 2nd argument to 3rd

// #7 What is the return value of map in the following code? Why?
// ['ant', 'bear'].map(elem => {
//   if (elem.length > 3) {
//     return elem;
//   }
// });
// ANSWER
// // a new array [undefined, 'bear']

// #8 Write a program that turns 
// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
// into : { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }
// ANSWER
// // let newobj = {}
// // flintstones.forEach((element,index) => {
// //   return newobj[element] = index
// // })
// // console.log(newobj)

// #9 Add up all of the ages from the Munster family object: 
// let ages = {
//   Herman: 32,
//   Lily: 30,
//   Grandpa: 5843,
//   Eddie: 10,
//   Marilyn: 22,
//   Spot: 237
// };
// ANSWER
// // let total = Object.values(ages).reduce((sum, person) => {
// //   return sum += person
// // },0)
// // console.log(total)

// #10 Pick out the minimum age from our current Munster family object
// ANSWER
// // let mini = Object.values(ages).reduce((min, age) => {
// //   if (age < min) {
// //     min = age
// //   }
// //   return min
// // },Object.values(ages)[0])
// // console.log(mini)
// ANSWER #2 
// let mini = Math.min(...Object.values(ages))

// #11 Create an object that expresses the frequency with which 
// each letter occurs in:
// let statement = "The Flintstones Rock";
// ANSWER
// // let obj1 = {}
// // statement.split('').filter(element => element !== ' ').forEach(element => {
// //   return obj1[element] ? obj1[element] += 1 : obj1[element] = 1
// // })
// // console.log(obj1)

// #12 How would you order the following in descending order
// let arr = ['10', '11', '9', '7', '8'];
// ANSWER
// // arr.sort((a,b) => b - a)

// #13 How would you order the following array of objects based on the year of publication of each 
// book, from earliest to latest?
// let books = [
//   { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
//   { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
//   { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
//   { title: 'Ulysses', author: 'James Joyce', published: '1922' },
//   { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
// ];
// ANSWER
// // books.sort((a,b) => {
// //   bookA = a.published
// //   bookB = b.published
// //   return bookA - bookB
// // })
// // console.log(books)

// #14 Order the following arrays by summing the values of the nested
// let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];
// ANSWER
// // scores.sort((a,b) => {
// //   sumA = a.reduce((sum,element) => {
// //     return sum += element
// //   }, 0)
// //   sumB = b.reduce((sum,element) => {
// //     return sum += element
// //   }, 0)
// //   return sumA - sumB
// // })
// // console.log(scores)

// #15a For each of these collection objects, demonstrate how you would access the letter g.
// let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
// ANSWER
// // console.log(arr1[2][1][3])

// #15b 
// let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];
// ANSWER
// // let g = Object.values(arr2[1])[0][0]

// #15c
// let arr3 = [['abc'], ['def'], { third: ['ghi'] }];
// ANSWER
// // let newarr = Object.values(arr3[2])[0][0].split('')[0]
// // console.log(newarr)

// #15d
// let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };
// ANSWER
// // console.log(Object.values(obj1)[1][1])

// #15e
// let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }}
// ANSWER
// // console.log(`This is g: ${Object.keys(obj2.third)[0]}`)

// #16a for each of these collections, demonstrate how you would change the 
// value from 3 to 4
// let arr1 = [1, [2, 3], 4];
// ANSWER
// // arr1[1][1] = 4

// #16b
// let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
// ANSWER
// // arr2[2] = 4

// #16c
// let obj1 = { first: [1, 2, [3]] };
// ANSWER
// // let val = Object.values(obj1)[0][2][0] = 4
// // console.log(obj1)

// #16d
// let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
// ANSWER
// // obj2.a.a[2] = 4
// // console.log(obj2)

// #17 Consider the following nested object.  Computer and display the total age
// of the male members of the family
// let munsters = {
//   Herman: { age: 32, gender: 'male' },
//   Lily: { age: 30, gender: 'female' },
//   Grandpa: { age: 402, gender: 'male' },
//   Eddie: { age: 10, gender: 'male' },
//   Marilyn: { age: 23, gender: 'female'}
// };
// ANSWER
// // let sum = 0
// // for (const person in munsters) {
// //   if (munsters[person].gender === "male") {
// //     sum += munsters[person].age
// //   }
// // }
// // console.log(sum)

// #18 One of the most frequently used real-world string operations is that of 
// "string substitution" where we take a hard-coded string and modify it with various parameters
// from our program 
// Given the munsters family, print the name, age, and gender of each family member
// Output should look like: (Name) is a (age)-year-old (male or female).
// let munsters = {
//   Herman: { age: 32, gender: 'male' },
//   Lily: { age: 30, gender: 'female' },
//   Grandpa: { age: 402, gender: 'male' },
//   Eddie: { age: 10, gender: 'male' },
//   Marilyn: { age: 23, gender: 'female'}
// };
// ANSWER
// // for (name in munsters) {
// //   console.log(`${name} is a ${munsters[name].age}-year-old ${munsters[name].gender}`)
// // }

// #19 Given the following code, what will be the final values of 'a' and 'b' be? 
// let a = 2;
// let b = [5, 8];
// let arr = [a, b];
// arr[0] += 2;
// arr[1][0] -= a;
// ANSWER
// // a => 2
// // b => [3,8]

// #20 Using the forEach method, write some code to output all vowels from the
// strings in the arrays.  Don't use a for or while loop
// let obj = {
//   first: ['the', 'quick'],
//   second: ['brown', 'fox'],
//   third: ['jumped'],
//   fourth: ['over', 'the', 'lazy', 'dog'],
// };
// ANSWER
// // let val = Object.values(obj)
// // const vos = 'aeiou'.split('')
// // val.forEach(element => {
// //   element.forEach(element => {
// //     element.split('').forEach(letter => {
// //       if (vos.includes(letter)) {
// //         console.log(letter)
// //       }
// //     })
// //   })
// // });

// #21 Given the following data structure, return a new array with the same structure, 
// but with the subarrays ordered -- (alphabetically or numerically) in ascending order
// let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];
// ANSWER
// arr.forEach(subArray => {
//   subArray.sort()
// })
// console.log(arr)

// #22 Perform the same transformation of sorting the subarrays we did in the previous
// exercise with one difference; sort the elements in descending order
// let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];
// ANSWER
// arr.forEach(subArray => {
//   subArray.sort().reverse()
// })
// console.log(arr)

// #23 Given the following data structure, use the map method to return a new arry
// identical in structure to the original but with each the number incremented by 1.  
// do not modify the original data structure
// let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];
// ANSWER
// // newarr = {}
// // arr.map(element => {
// //   for (letter in element) {
// //     newarr[letter] = element[letter] + 1
// //   }
// //   return newarr
// // })
// // console.log(newarr)
// // console.log(arr)

// #24 Given the following data structure, use a combination of methods, 
// including filter, to return a new array identical in structure to the original, but
// only containing the numbers that are multiples of 3
// let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];
// ANSWER
// // ANSWER #1 
// let newarr = []
// // arr.forEach(element => {
// //   newarr.push(element.filter(num => num % 3 === 0))
// // })
// // console.log(newarr)
// // ANSWER #2
// // let newarr = arr.map(element => {
// //   return element.filter(num => num % 3 === 0)
// // })
// // console.log(newarr)

// #25
// Given the following data structure, sort the array so that the sub-arrays are ordered
// based on the sum of the odd numbers they contain
// let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];
// ANSWER
// // let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];
// // arr.sort((a,b) => {
// //   let oddA = a.filter(element => element % 2 !== 0)
// //               .reduce((sum, element) => sum += element)
// //   let oddB = b.filter(element => element % 2 !== 0)
// //               .reduce((sum, element) => sum += element)
// //   return oddA - oddB
// // })
// // console.log(arr)

// #26
// Given the following data structure write some code to return an array containig the colors
// of the fruits and the sizes of the vegetables.  The sizes should be uppercase, and the colors
// should be capitalized
// let obj = {
//   grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
//   carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
//   apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
//   apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
//   marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
// };
// return should look like this: [["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]
// ANSWER
// // let obj = {
// //   grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
// //   carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
// //   apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
// //   apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
// //   marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
// // };
// // produceArray = []
// // for (produceItem in obj) {
// //   if (obj[produceItem].type === 'fruit') {
// //     produceArray.push(obj[produceItem].colors)
// //   }
// //   else {
// //     produceArray.push(obj[produceItem].size.toUpperCase())
// //   }
// // }
// // console.log(produceArray)

// #27
// Given the following data structure, write some code to return an array which contains only the objects
// where all the numbers are even
// let arr = [
//   { a: [1, 2, 3] },
//   { b: [2, 4, 6], c: [3, 6], d: [4] },
//   { e: [8], f: [6, 10] },
// ];
// ANSWER
// // let newArr = arr.filter(obj => {
// //   return Object.values(obj).every(subArray => {
// //     return subArray.every(number => number % 2 === 0)
// //   })
// // })

// #28
// Given the following data structure, write some code that returns an object where the key is the
// first item in each subarray, and the value is the second
// let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];
// expected return value of function call
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }
// ANSWER
// // let newObj = {}
// // arr.forEach(element => {
// //   return newObj[element[0]] = element[1]
// // })
// // console.log(newObj)

// #29
// write a function that creates a UUID
// its a 32 character code (mix of 0-9 & a-f) 5 sections: 8-4-4-4-12
// ANSWER
// function UUID() {
//   valueUUID = "-------- ---- ---- ---- ------------"
//   let alphaNumero = ['a','b','c','d','e','f',0,1,2,3,4,5,6,7,8,9]
//   let newUUID = valueUUID.split('').map(element => element.replace('-', alphaNumero[Math.floor(Math.random()*alphaNumero.length)]))
//   console.log(newUUID.join('').replace(/ /g,'-'))

//   return valueUUID
// }
// UUID()

// #30
// write a function that takes a positive integer as an arugment, and returns that number with its digits reversed
// reverseNumber(12345);    // 54321
// reverseNumber(12213);    // 31221
// reverseNumber(456);      // 654
// reverseNumber(12000);    // 21 -- Note that leading zeros in the result get dropped!
// reverseNumber(1);        // 1
// ANSWER
// // function reverseNumber(number) {
// //   let reversed = number.toString().split('').reverse().join('')
// //   console.log(parseInt(reversed, 10))
// // }
  // while (reversed[0] === '0') {
  //   newr = reversed.shift()
  // }
  // console.log(reversed.join(''))
  // }

// #31
// write a function that takes a string argument, and returns a new string containing the words from the string argument
// in reverse order
// reverseSentence('');                       // ""
// reverseSentence('Hello World');            // "World Hello"
// reverseSentence('Reverse these words');    // "words these Reverse"
// ANSWER
// // function reverseSentence(string) {
// //   console.log(string.split(' ').reverse().join(' '))
// // }

// #32
// write a function that takes one argument, a positive integer, 
// and returns the sum of its digits. Do this using list processing techniques.
// sum(23);           // 5
// sum(496);          // 19
// sum(123456789);    // 45
// ANSWER
// // function sum(number) {
// //   result = String(number).split('').reduce((summation, element) => {
// //     return summation += Number(element)
// //   },0)
// //   console.log(result)
// // }

// #33
// Write a function that takes an array of integers between 0 and 19, 
// and returns an array of those integers sorted based on the English 
// word for each number:
// let NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
//                     'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
//                     'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
// ANSWER
// function alphabeticNumberSort(arr) {
//   arr.sort((num1, num2) => {
//     if (NUMBER_WORDS[num1] > NUMBER_WORDS[num2]) {
//       return 1
//     } else if (NUMBER_WORDS[num2] > NUMBER_WORDS[num1]) {
//       return -1
//     }
//     else {
//       return 0
//     }
//   })
//   console.log(arr)
//   return arr
// }

// let AlphaNumbers = {0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 
//   5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen',
//    16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen'}
// function alphabeticNumberSort(arr) {
//   arr.sort((a, b) => {
//     if(AlphaNumbers[a] > AlphaNumbers[b]) {
//       return 1
//     } else if (AlphaNumbers[a] > AlphaNumbers[b]) {
//       return -1
//     }
//     else {
//       return 0
//     }
//   })
//   return arr
// }


// console.log(alphabeticNumberSort(
//   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));

// let englishNum = [
//   'zero',
//   'one',
//   'two',
//   'three',
//   'four',
//   'five',
//   'six',
//   'seven',
//   'eight',
//   'nine',
//   'ten',
//   'eleven',
//   'twelve',
//   'thirteen',
//   'fourteen',
//   'fifteen',
//   'sixteen',
//   'seventeen',
//   'eighteen',
//   'nineteen'
// ]
// function alphabeticNumberSort(arr) {
//   let sorted = arr.map(element => englishNum[element]).sort().map(element => englishNum.indexOf(element))
//   console.log(sorted)
// }

// #34
// write a function that takes two arguments, each containing a list of numbers, and returns a new array 
// containing the products of all combinations of number pairs that exist between the two arrays.
// The returned array should be sorted in ascending numerical order
// Example:
// multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]
// ANSWER
// // function multiplyAllPairs(arr1, arr2) {
// //   newarr = []
// //   for (let index = 0; index < arr1.length; index++) {
// //     for(let jIndex = 0; jIndex < arr2.length; jIndex++) {
// //       let result = arr1[index]*arr2[jIndex]
// //         newarr.push(result)
// //     };
// //   }
// //   console.log(sortNumeros(newarr))
// // };
// // function sortNumeros(arr) {
// //   arr.sort((a,b) => {
// //     return a - b
// //   })
// //   return arr
// // }
// // sortNumeros([ 8, 6, 2, 4, 16, 12 ])
// // multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]

// #35
// write a function that takes a string argument and returns a list of all substrings 
// that start from the beginning of the string, ordered from shortest to longest
// substringsAtStart('abc');      // ["a", "ab", "abc"]
// substringsAtStart('a');        // ["a"]
// substringsAtStart('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
// ANSWER
// //  function substrings(string) {
// //   let result = string.split('').map((_,idx) => {
// //     return string.slice(0,index +1)
// //   })
// //   console.log(result)
// // }

// #36
// write a function that returns all the possible substrings in a string
// substringer('apple') // => ['ap','app','appl','apple','pp','ppl','pple','pl','ple','le']
// ANSWER
// // function substringsAtStart(string) {
// //   let result = []
// //   let startSubIndex = 0
// //   let endSubIndex = startSubIndex + 2
// //   while (startSubIndex < string.length-1) {
// //     while (endSubIndex <= string.length) {
// //       result.push(string.substring(startSubIndex, endSubIndex))
// //       endSubIndex += 1
// //     }
// //     startSubIndex += 1
// //     endSubIndex = startSubIndex + 2
// //   }
// //   console.log(result)
// // }
// // substringsAtStart('abc');      // ["a", "ab", "abc"]
// // substringsAtStart('a');        // ["a"]
// // substringsAtStart('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

// #37
// write a program that makes a list of lists.  Each subarray is a list of 
// the substrings, starting at += 1 index spot.  
// ex. substringArrays('abcde') => 
// [ 'a', 'ab', 'abc', 'abcd', 'abcde' ]
// [ 'b', 'bc', 'bcd', 'bcde' ]
// [ 'c', 'cd', 'cde' ]
// [ 'd', 'de' ]
// [ 'e' ]
// ANSWER
// // function substringArrays (string) {
// //   let result = []
// //   for (idx = 0; idx < string.length; idx ++) {
// //     result.push(substrings(string.slice(idx)))
// //   }
// // }
// //  function substrings(string) {
// //   let result = string.split('').map((_,idx) => {
// //     return string.slice(0,idx+1)
// //   })
// //   console.log(result)
// //  }
// //  substringArrays('abcde')
// // OR
// // function substringArrays(string) {
// //   let results = [];
// //   for (let idx = 0; idx <= string.length; idx++) {
// //     let longestSubstring = string.substring(idx);
// //     let allSubstrings = substrings(longestSubstring);
// //     results = results.concat(allSubstrings);
// //   }
// //   return results;
// // }

// #38
// Write a function that returns a list of palindromic substrings of a string 
// each substring must consist of a sequence of characters taht reads the same 
// forward and backward
// palindromes('abcd');       // []
// palindromes('madam');      // [ "madam", "ada" ]
// palindromes('hello-madam-did-madam-goodbye');
// ANSWER
// // function substrings(string) {
// //   result = []
// //   for (idx = 0; idx < string.length; idx ++) {
// //     result.push(substringArrays(string.slice(idx)))
// //   }
// //   return result
// // }
// // function substringArrays(string) {
// //   return string.split('').map((_,idx,arr) => {
// //     return arr.slice(0, idx+1).join('')
// //   })
// // }
// // function palindromes(string) {
// //   let subs = substrings(string)
// //  // console.log(subs)
// //  let result = []
// //   subs.forEach(wordArr => {
// //     wordArr.forEach(word => {
// //       let reverse = word.split('').reverse().join('')
// //       if (reverse === word && word.length > 1) {
// //         result.push(word)
// //       }
// //     })
// //   })
// //   console.log(result)
// //   }
// // palindromes('abcd');       // []
// // palindromes('madam');      // [ "madam", "ada" ]
// // palindromes('hello-madam-did-madam-goodbye');

// #39 
// Write a function that takes an array of numbers, and returns the sum of the sums of each
// leading subsequence for that array.  You may assume that the array always contains 
// // at least one number
// sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
// sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
// sumOfSums([4]);              // 4
// sumOfSums([1, 2, 3, 4, 5]);  // 35
// ANSWER
// // function sumOfSums(arr) {
// //   let sumTotal = 0
// //   for (idx = 1; idx < arr.length; idx ++) {
// //     sumTotal += arr.slice(0, idx).reduce((accum, num) => accum + num);
// //   }
// //   return sumTotal
// // }
// // sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
// // sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
// // sumOfSums([4]);              // 4
// // sumOfSums([1, 2, 3, 4, 5]);  // 35

// #40 Grocery List
// Write a function that takes a grocery list (2D array) with each element
// containing a fruit and a quantity, and returns a 1D array of fruits
// in which each fruit appears a number of times equal to its quantity
// buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
// ANSWER

// function buyFruit(fruit2D) {
//   let newarr = []
//   fruit2D.forEach(subFruitList => {
//     [fruit, num] = subFruitList
//     while (num > 0) {
//       newarr.push(fruit)
//       num -= 1
//     }
//   })
//   console.log(newarr)
// }
// buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// // returns ["apple", "apple", "apple", "orange", "banana", "banana"]

// #41 Inventory Item Transactions
// Write a function that takes two arguments, inventoryItem, and transactions, and returns
// an array containing only the transactions for the specified inventoryItem
// let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
//                      { id: 105, movement: 'in',  quantity: 10 },
//                      { id: 102, movement: 'out', quantity: 17 },
//                      { id: 101, movement: 'in',  quantity: 12 },
//                      { id: 103, movement: 'out', quantity: 20 },
//                      { id: 102, movement: 'out', quantity: 15 },
//                      { id: 105, movement: 'in',  quantity: 25 },
//                      { id: 101, movement: 'out', quantity: 18 },
//                      { id: 102, movement: 'in',  quantity: 22 },
//                      { id: 103, movement: 'out', quantity: 15 }, ];
// transactionsFor(101, transactions);
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]
// ANSWER
// // function transactionsFor(inventoryItem, transactions) {
// //   let query = transactions.filter(element => {
// //     return element['id'] === inventoryItem
// //   })
// //   console.log(query)
// // }
// // transactionsFor(101, transactions);

// #42 Inventory Item Availability
// Building on the previous exercise, write a function that return true or false
// // if the item is avaiable
// let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
//                      { id: 105, movement: 'in',  quantity: 10 },
//                      { id: 102, movement: 'out', quantity: 17 },
//                      { id: 101, movement: 'in',  quantity: 12 },
//                      { id: 103, movement: 'out', quantity: 20 },
//                      { id: 102, movement: 'out', quantity: 15 },
//                      { id: 105, movement: 'in',  quantity: 25 },
//                      { id: 101, movement: 'out', quantity: 18 },
//                      { id: 102, movement: 'in',  quantity: 22 },
//                      { id: 103, movement: 'out', quantity: 15 }, ];

// isItemAvailable(101, transactions);     // false
// isItemAvailable(103, transactions);     // false
// isItemAvailable(105, transactions);     // true
// ANSWER
// // function transactionsFor(inventoryItem, transactions) {
// //   let query = transactions.filter(element => {
// //     return element.id === inventoryItem
// //   })
// //   return query
// // }
// // function isItemAvailable(inventoryItem, transactions) {
// //   let query = transactionsFor(inventoryItem, transactions)
// //   console.log(query)
// //   let result = 0
// //   query.forEach(item => {
// //     item.movement === 'in' ? result += item.quantity :
// //       result -= item.quantity
// //   })
// //   if (result > 0) {
// //     console.log(`We have ${result} units of ${inventoryItem}`)
// //   } else {


// //     console.log(`We're out of ${inventoryItem}`)
// //   }
// // }

// #43 Uppercase Check
// Write a function that takes a string argument and returns true if all 
// of the alphabetic characters inside the string are uppercase
// false if otherweise.
// isUppercase('t');               // false
// isUppercase('T');               // true
// isUppercase('Four Score');      // false
// isUppercase('FOUR SCORE');      // true
// isUppercase('4SCORE!');         // true
// isUppercase('');                // true
// ANSWER
// // function isUppercase(word) {
// //   console.log(word.split('').every(char => char === char.toUpperCase())) 
// // }
// // OR
// // function isUppercase(string) {
// //   return !/[a-z]/.test(string);
// // }

// #44 Delete Vowels
// write a function that takes an array of strings and returns an array of the 
// same values with all vvowels removed
// removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
// removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
// removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]
// ANSWER
// // function removeVowels(string) {
// //   return string.map(string => string.replace(/[aeiou]/gi, ""))
// // }
// // OR
// // function removeVowels(stringArray) {
// //   return stringArray.map(string => {
// //     let chars = string.split("");
// //     let removedVowels = deleteVowels(chars);
// //     return removedVowels.join("");
// //   });
// // }
// // function deleteVowels(array) {
// //   const VOWELS = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
// //   return array.map(char => {
// //     if (VOWELS.indexOf(char) >= 0) {
// //       return "";
// //     } else {
// //       return char;
// //     }
// //   });
// // }

// #45 Lettercase Counter
// write a function that takes a string and returns an object containing 3 properties:
// one representing the number of characters in the string that are lowercase
// one rep the number of uppercase
// one that rep characters that are neither
// letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
// letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
// letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
// letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }
// ANSWER
// // function letterCaseCount(string) {
// //   let result = {lowercase: 0, uppercase: 0, neither: 0}
// //   let lowercaseChars = string.match(/[a-z]/g) || [];
// //   let uppercaseChars = string.match(/[A-Z]/g) || [];
// //   let neitherChars = string.match(/[^a-z]/gi) || []
// //   result = { lowercase: lowercaseChars.length,
// //   uppercase: uppercaseChars.length,
// //   neither: neitherChars.length
// // }
// // console.log(result)
// // }

// #46 Capitalize Words
// Write a function that takes a string as an argument, and returns 
// that string with the first character of every word capitalized and 
// all subsequent characters in lowercase.
// wordCap('four score and seven');       // "Four Score And Seven"
// wordCap('the javaScript language');    // "The Javascript Language"
// wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'
// ANSWER
// // function wordCap(string) {
// //   newword = string.split(' ').map(char => char[0].toUpperCase() + char.slice(1).toLowerCase()).join(' ')
// //   console.log(newword)
// // }

// #47 Swap Case
// Write a function that takes a string as an argument, and returns that string with every lowercase 
// letter changed to uppercase and every uppercase letter changed to lowercase. Leave all other characters unchanged.
// swapCase('CamelCase');              // "cAMELcASE"
// swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"
// ANSWER
// // function swapCase(string) {
// //   let news = string.split('').map(char => {
// //     return char.toUpperCase() === char ? char.toLowerCase() : char.toUpperCase()  
// //   }).join('');
// //   console.log(news)
// // }
// // OR
// // function swapCase(string) {
// //   let news = string.split('').map(char => {
// //     if(/[a-z]/.test(char)) {
// //       return char.toUpperCase
// //     } else if (/[A-Z]/.test(char)) {
// //       return char.toLowerCase()
// //     } else {
// //       return char
// //     }
// //   })
// //   .join("")
// //   }

// #48 Staggered Caps
// Write a function that takes a string as an argument, and returns that string with a staggered capitalization scheme. 
// Every other character, starting from the first, should be capitalized and should be followed by a lowercase or non-alphabetic 
// character. Non-alphabetic characters should not be changed, but should be counted as 
// characters for determining when to switch between upper and lower case.
// staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
// staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
// staggeredCase('ignore 77 the 444 numbers');    // "IgNoRe 77 ThE 444 NuMbErS"
// ANSWER
// // function staggeredCase(string) {
// //   let result = string.split('').map((char, idx) => {
// //     return idx % 2 === 0 ? char.toUpperCase() : 
// //     char.toLowerCase()
// //   }).join('')
// //   console.log(result)
// // }

// #49 Staggered Caps Part 2
// Modify the function from the previous exercise so it ignores non-alphabetic 
// characters when determining whether it should uppercase or lowercase each letter. 
// The non-alphabetic characters should still be included in the return value; they just don't count when toggling the desired case.
// // function staggeredCase(string) {
// //   let needUpper = true;
// //   return string
// //     .split("")
// //     .map(function(char) {
// //       if (char.match(/[a-z]/i)) {
// //         let newChar;
// //         if (needUpper) {
// //           newChar = char.toUpperCase();
// //         } else {
// //           newChar = char.toLowerCase();
// //         }

// //         needUpper = !needUpper;
// //         return newChar;
// //       } else {
// //         return char;
// //       }
// //     })
// //     .join("");
// // }
// // OR
// // function staggeredCase(string) {
// //   let needsUpperCase = true;
// //   let result = '';
// //   for (let chr of string) {
// //     if (/[a-z]/i.test(chr)) {
// //       chr = needsUpperCase ? chr.toUpperCase() : chr.toLowerCase();
// //       needsUpperCase = !needsUpperCase;
// //     }
// //     result += chr;
// //   }
// //   return result;
// // }
// #50 How long are you
// write a function that takes a string and returns an array with "word + word.length"
// wordLengths('cow sheep chicken');
// // ["cow 3", "sheep 5", "chicken 7"]
// wordLengths('baseball hot dogs and apple pie');
// // ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]
// wordLengths("It ain't easy, is it?");
// // ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]
// wordLengths('Supercalifragilisticexpialidocious');
// // ["Supercalifragilisticexpialidocious 34"]
// wordLengths('');      // []
// wordLengths();        // []
// ANSWER

//split string, return newArray, forEach word, push word + space + word length
// // function wordLengths(string) {
// //   let result = []
// //   if (arguments.length === 0 || string.length === 0) {
// //     return result = []
// //   }
// //   string.split(' ').forEach(char => {
// //     let wordlength = " " + char.length
// //     result.push(char.concat(wordlength))
// //   })
// //   console.log(result)
// // }
// // OR
// // if (!string) return []

// #51 Search Word (Part 1)
// Write a function that takes a word and a string of text as arguments, 
// and returns an integer representing the number of times the word appears in the text.
// const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';
// searchWord('sed', text);      // 3
// ANSWER
// // function searchWord(word, text) {
// //   let regex = new RegExp(word, 'gi') 
// //   let matches = text.match(regex)
// //   console.log(matches.length)
// // }

// #51a Can you refactor it so it'll only match whole words?
// const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';
// searchWord('sed', text);      // 3
// ANSWER
// function searchWord(word, text) {
//   let regex = new RegExp(`\\b${word}\\b`,'gi')
//   let matches = text.match(regex)
//   console.log(matches.length)
// }

// #52 Search Word (Part 2)
// Write a function that highlights a keyword with ('**') on each side and change each letter of 
// the word to uppercase
// const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';
// searchWord('sed', text);
// ANSWER
// // function searchWord(word, text) {
// //   let regex = new RegExp(word, 'gi')
// //   let newText = text.replace(regex, "**SED**" )
// //   console.log(newText)
// // }

// returns
// "**SED** ut perspiciatis unde omnis iste natus error sit 

// #53 Rotation
// Write a function that rotates an array by moving the first element to the end 
// of the array.  Don't modify the original.
// If the input is not an array, return undefined
// If input is an empty array, return an empty array
// rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
// rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
// rotateArray(['a']);                    // ["a"]
// rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
// rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
// rotateArray([]);                       // []
// return `undefined` if the argument is not an array
// rotateArray();                         // undefined
// rotateArray(1);                        // undefined
// the input array is not mutated
// let array = [1, 2, 3, 4];
// rotateArray(array);                    // [2, 3, 4, 1]
// array;                                 // [1, 2, 3, 4]
// ANSWER
// // function rotateArray(array){
// //   let copiedArray = []
// //   if (!Array.isArray(array)) {
// //     return undefined
// //   } else if (array.length === 0) {
// //     return []
// //   } else {
// //     copiedArray = array.slice()
// //     let endNum = copiedArray.shift()
// //     copiedArray.push(endNum)
// //     console.log(copiedArray)
// //   }
// //   console.log(array)
// // }
// //   ``

// #54 Rotation (Part 2)
// Write a function that rotates the right-most digits of a number specified by an argument
// rotateRightmostDigits(735291, 1);      // 735291
// rotateRightmostDigits(735291, 2);      // 735219
// rotateRightmostDigits(735291, 3);      // 735912
// rotateRightmostDigits(735291, 4);      // 732915
// rotateRightmostDigits(735291, 5);      // 752913
// rotateRightmostDigits(735291, 6);      // 352917
// ANSWER
// // function rotateRightmostDigits(num, count) {
// //   if (count === 1){
// //     console.log(num)
// //     return num
// //   }
// //   let numArry = String(num).split('')
// //   let numArrayCopied = numArry.slice('')
// //   numIndex = numArry.length - count
// //   let val = numArry.splice(numIndex, 1)
// //   numArry.push(val[0])
// //   console.log(numArry.join(''))
// // }
// // OR
// // function rotateRightmostDigits(num, count) {
// //   let number = String(num)
// //   let firstPart = number.slice(0,number.length - count)
// //   let secondPart = number.slice(number.length - count)
// //   let result = firstPart + rotateString(secondPart)

// //   return Number(result)
// // }

// // function rotateString(string) {
// //   return string.slice(1) + slice[0]
// // }
// #55 Rotation (Part 3)
// Find the maximum rotation for numbers
// rotate the 1st num to the right, then the 2nd, etc
// use the previous function
// // function rotateRightmostDigits(num, count) {
// //     let number = String(num)
// //     let firstPart = number.slice(0,number.length - count)
// //     let secondPart = number.slice(number.length - count)
// //     let result = firstPart + rotateString(secondPart)
  
// //     return Number(result)
// //   }
// // function rotateString(string) {
// //   return string.slice(1) + string[0]
// // }
  
// // function maxRotation(number) {
// //   let maxRotation = String(number).length
// //   while (maxRotation > 0) {
// //     number = (rotateRightmostDigits(number, maxRotation))
// //     maxRotation -= 1
// //   }
// //   console.log(number)
// // }
// // OR
// // function maxRotation (num) {
// //   let arr = String(num).split('');
// //   arr.forEach((_,idx) => arr.push(arr.splice(idx,1)))
// //   return arr.join('')
// // }

// #56 Stack Machine Interpretation
// a stack is a list of values that grows and shrinks dynamically.  It maybe implemented as
// an Array that uses two array methods: Array.prototype.push and Array.prototype.pop.
//minilang('PRINT');
// // 0
//minilang('5 PUSH 3 MULT PRINT');
// // 15
//minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// // 5
// // 3
// // 8
// minilang('5 PUSH POP PRINT');
// // 5
// minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// // 5
// // 10
// // 4
// // 7
// minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// // 6
// minilang('4 PUSH PUSH 7 MOD MULT PRINT');
// // 12
// minilang('-3 PUSH 5 SUB PRINT');
// // 8
// minilang('6 PUSH');
// ANSWER
// // function minilang(command) {
// //   let stack = []
// //   let register = 0
// //   let store = 0
// //   command.split(' ').forEach(element => {
// //     // if (Number.isInteger(Number(element))){
// //     //   register = Number(element)
// //     // };
// //     switch (element) {
// //       case 'PRINT':
// //         console.log(register);
// //         break;
// //       case 'PUSH':
// //         stack.push(register);
// //         break;
// //       case 'MULT':
// //         register = stack.pop() * register;
// //         break;
// //       case 'MOD':
// //         register = Math.floor(register % stack.pop());
// //         break;
// //       case 'ADD':
// //         register = stack.pop() + register;
// //         break;
// //       case 'SUB':
// //         register = register - stack.pop();
// //         break;
// //       case 'DIV':
// //         register = Math.floor(register/stack.pop());
// //       case 'POP':
// //         register = stack.pop()
// //       default:
// //         register = Number(element)
// //     }
// //   });
// //   //console.log(register)
// // }

// #57 Word to Digit
// Write a function that takes a sentence as an argument,
// and returns that string with every occurrence of a "number word" -
// 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' 
// and converts to corresponding digit
// wordToDigit('Please call me at five five five one two three four. Thanks.');
// // "Please call me at 5 5 5 1 2 3 4. Thanks."
// ANSWER
// // const WORDS = ['zero','one', 'two', 'three','four','five','six','seven','eight','nine']
// // function wordToDigit(string) {
// //   let arr = []
// //   string.split(' ').forEach(element => {
// //     let regex = new RegExp('\\b' + element + '\\b', 'g')
// //     if (WORDS.includes(regex)) {
// //       arr.push(WORDS.indexOf(regex))
// //     } else {
// //       arr.push(element)
// //     }
// //     newstring = arr.join(' ')
// //   })
// //   console.log(newstring)
// // }
// // wordToDigit('Please call me at five five five one two three four. Thanks.');
// // // "Please call me at 5 5 5 1 2 3 4. Thanks."

// #58 Fibonnaci Numbers (Recursion)
// The Fibonacci series is a sequence of numbers in which 
// each number is the sum of the previous two numbers. The first two Fibonacci numbers are 
// 1 and 1. The third number is 1 + 1 = 2, the fourth is 1 + 2 = 3, the fifth is 2 + 3 = 5, and so 
// on. In mathematical terms, this can be represented as:
// ANSWER
// // function fibonacci(num) {
// //   if (num <= 2){
// //     return 1;
// //   }
// //   let one = 1 
// //   let two = 1 
// //   let idx = 3
// //   let fib = 2
// //   while (idx <= num) {
// //     fib = one + two
// //     one = two
// //     two = fib
// //     idx += 1
// //   }
// //   console.log(fib)
// // }
// // fibonacci(20);       // 6765
// // fibonacci(50);       // 12586269025
// // fibonacci(75);       // 2111485077978050

// #59 Lettercase Percentage Ratio
// Write a function that takes a string, and returns an object containing the following three properties:
// the percentage of characters in the string that are lowercase letters
// the percentage of characters that are uppercase letters
// the percentage of characters that are neither
// letterPercentages('abCdef 123');
// // { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }
// letterPercentages('AbCd +Ef');
// // { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }
// letterPercentages('123');
// ANSWER
// // function letterPercentages(string) {
// //   let obj1 = {lowercase: 0, uppercase: 0, neither: 0}
// //   let regex = RegExp(/[a-z]/g)
// //   let regex1 = RegExp(/[A-Z]/g)
// //   let regex3 = RegExp(/[^a-z]/gi)
// //   if (string.length === string.match(regex3).length) {
// //     obj1.uppercase = "0.0"
// //     obj1.lowercase = "0.0"
// //     obj1.neither = "100.0"
// //   } else {
// //     obj1.uppercase = ((string.match(regex).length / string.length) * 100).toFixed(2)
// //     obj1.lowercase = ((string.match(regex1).length / string.length) * 100).toFixed(2)
// //     obj1.neither = ((string.match(regex3).length / string.length) * 100).toFixed(2)
// //   }
// // console.log(obj1)
// // }

// #60
// Write a function that takes the lengths of the three sides of a 
// triangle as arguments, and returns one of the following four strings 
// representing the triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.
// triangle(3, 3, 3);        // "equilateral"
// triangle(3, 3, 1.5);      // "isosceles"
// triangle(3, 4, 5);        // "scalene"
// triangle(0, 3, 3);        // "invalid"
// triangle(3, 1, 1);        // "invalid"
// ANSWER
// // function triangle(v1, v2, v3) {
// //   let result = ''
// //   let triangleArray = determineSide(v1,v2,v3)
// //   let [smallestSide, largestSide, otherSide] = triangleArray
// //   //console.log(smallestSide, largestSide, otherSide[0])
// //   if ((smallestSide + otherSide < largestSide) || (triangleArray.includes(0))) {
// //     result = "invalid"
// //   } else if (v1 === v2 && v1 ===v3) {
// //     result = "Equilateral"
// //   } else if (v1 === v2 || v1 === v3 || v2 === v3) {
// //     result = "Isosceles"
// //   } else {
// //     result = 'Scalene'
// //   }
// //   // if (v1 === 0 || v2 === 0 || v3 ===0) {
// //   //   result = 'invalid'
// //   // } else if {

// //   // }
// //   console.log(result)
// // }
// // function determineSide(v1,v2,v3) {
// //   let triangleArray = [v1, v2, v3];
// //   let smallestSide = Math.min(...triangleArray);
// //   triangleArray.splice(triangleArray.indexOf(smallestSide), 1)
// //   let largestSide = Math.max(...triangleArray);
// //   triangleArray.splice(triangleArray.indexOf(largestSide), 1)
// //   let otherSide = triangleArray[0]
// //   return [smallestSide, largestSide, otherSide]
// // }

// #61 Tri-Angles
// Right: One angle is a right angle (exactly 90 degrees).
// Acute: All three angles are less than 90 degrees.
// Obtuse: One angle is greater than 90 degrees.
// sum of angles must be 180 & every angle must be greater than 0
// return whether the function is right, acute, obtuse or invalid
// triangle(60, 70, 50);       // "acute"
// triangle(30, 90, 60);       // "right"
// triangle(120, 50, 10);      // "obtuse"
// triangle(0, 90, 90);        // "invalid"
// triangle(50, 50, 50);       // "invalid"
// ANSWER
// // function triangle (v1, v2, v3) {
// //   let result = ''
// //   if (!isValid(v1, v2, v3)) {
// //     result = 'invalid'
// //   } else if ([v1,v2,v3].includes(90)) {
// //     result = 'right'
// //   } else if (v1 < 90 && v2 < 90 && v3 < 90) {
// //     result = 'acute'
// //   } else {
// //     result = 'obtuse'
// //   }
// //   console.log(result)
// // }
// // function isValid(v1, v2, v3){
// //   if(v1 + v2 + v3 !== 180) {
// //     return false
// //   } else if ([v1,v2,v3].includes(0)) {
// //     return false
// //   }
// //   return true
// // }

// #62 Unlucky Days
// Write a function that determines the number of Friday the 13th's for that year
// ANSWER
// function fridayThe13ths(year) {
//   let thirteenths = [];

//   for (let month = 0; month < 12; month += 1) {
//     thirteenths.push(new Date(year, month, 13));
//   }

//   return thirteenths.reduce((count, day) => {
//     return day.getDay() === 5 ? (count + 1) : count;
//   }, 0);
// }

// #64 Sum Squared
// Write a function that computes the difference between 
// the square of the sum of the first count positive integers
// sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
// sumSquareDifference(10);     // 2640
// sumSquareDifference(1);      // 0
// sumSquareDifference(100);    // 25164150
// ANSWER
// // function sumSquareDifference(num) {
// //   let sum = []
// //   let square = []
// //   for (i = 1; i <= num; i ++) {
// //     sum.push(i)
// //     square.push(i**2)
// //   }
// //   let first = sum.reduce((accum, idx) => accum + idx)
// //   let seco = square.reduce((accum, idx) => accum + idx)
// //   console.log((first**2) - seco)
// // }

// #65 Longest Sentence
// write a program that prints the longest sentence
function longestSentence(longText) {
  let regex = new RegExp(/[!.?]/,'g')
  let arr = longText.split(regex)
  let longest = arr.reduce((sum, element) => {
    if (element.length > sum) {
      sum = element
    } return sum 
  },arr[0])
  console.log(longest)
  console.log(`The longest sentence has ${longest.split(" ").length}`)

}
longestSentence("Where do you think you're going? What's up, Doc?");
// Where do you think you're going?
//
// The longest sentence has 6 words.
