// write a function that takes a string, doubles every consonant character in the string and returns the result as a new string.  The
// function should not double vowels, digits, punctuation, or whitespace
// ANSWER

// function doubleConsonants(string) {
//   let vowels = ['a','e','i','o','u', ' ', '!','-', '1','2','3','4','5','6','7','8','9']
//   let arr = string.split('')
//   let newarr = arr.map((element) => {
//     return !vowels.includes(element) ? (element + element) : element 
//   })
//   console.log(newarr.join(''))
// }

// doubleConsonants('String');          // "SSttrrinngg"
// doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
// doubleConsonants('July 4th');        // "JJullyy 4tthh"
// doubleConsonants('');                // ""

// write a function that takes a positive integer as an arugment, and returns that number with its digits reversed
// function reverseNumber(number) {
//   let reversed = number.toString().split('').reverse().join('')
//   console.log(parseInt(reversed, 10))
// }
//   // while (reversed[0] === '0') {
//   //   newr = reversed.shift()
//   // }
//   // console.log(reversed.join(''))
//   // }

// reverseNumber(12345);    // 54321
// reverseNumber(12213);    // 31221
// reverseNumber(456);      // 654
// reverseNumber(12000);    // 21 -- Note that leading zeros in the result get dropped!
// reverseNumber(1);        // 1


// Write a function that takes a non-empty string argument, and returns the middle character(s) of the string.
// If the string has an odd length, you should return exactly one character 
// function centerOf(string) {
//   let middleIndex = Math.floor(string.length / 2)
//   if (string.length % 2 === 0) {
//     console.log(string.slice(middleIndex-1, middleIndex+1))
//   }
//   else {
//     console.log(string[middleIndex])
//   }
// }
// centerOf('I Love JavaScript'); // "a"
// centerOf('Launch School');     // " "
// centerOf('Launch');            // "un"
// centerOf('Launchschool');      // "hs"
// centerOf('x');                 // "x"

// Write a function that takes a number as an argument.  If the argument is a positive number, return the negative of
// that number.  If the argument is a negative number, return it as-is

// function negative(number) {
//   // let result = ''
//   // let num = String(number)
//   // if (num[0] !== '-') {
//   //   result = '-'.concat(num)
//   // } else {
//   //   result = num
//   // }
//   // console.log(result)
//   console.log(Math.abs(number) * -1)
// }

// negative(5);     // -5
// negative(-3);    // -3
// negative(0);     // -0

// Write a function that takes an integer argument, and returns an array containing all 
// integers between 1 & the argument (inclusive) in ascending order

// function sequence(number) {
//   let count = number
//   newArr = []
//   while (count > 0) {
//     newArr.push(count)
//     count -= 1
//   }
//   console.log(newArr.reverse())
// }

// sequence(5);    // [1, 2, 3, 4, 5]
// sequence(3);    // [1, 2, 3]
// sequence(1);    // [1]

// write a function that takes a string argument consisting ofa first name, and a last name, 
// // and returns a new string consisting of the last name, a comma, a space, and the first name
// function swapName(string) {
//   firstName = string.split(' ')[0]
//   lastName = string.split(' ')[1]
//   console.log(lastName.concat(', ',firstName))
// }
// swapName('Joe Roberts');    // "Roberts, Joe"

// write a function that takes two integers as arguments.  First is a count, second is starting number of a 
// sequence that your function will create.  The function should return an array containing the same number 
// of elements as the count argument

// function sequence(count, multplier) {
//   let counter = 1
//   let arr = []
//   while (counter <= count) {
//     arr.push(counter * multplier)
//     counter += 1
//   }
//   console.log(arr)
// }
// sequence(5, 1);          // [1, 2, 3, 4, 5]
// sequence(4, -7);         // [-7, -14, -21, -28]
// sequence(3, 0);          // [0, 0, 0]
// sequence(0, 1000000);    // []

// write a function that takes a string argument containing one or more words, and returns a new string containing 
// the words from the string argument.  All five-or-more words should ahve their letters in reverse order.  
// The string argument will consist of only letters andspaces.  

// function reverseWords(string) {
//   let newarr = []
//   string.split(' ').forEach(element => {
//     if (element.length > 4) {
//       newarr.push(element.split('').reverse().join(''))
//     } 
//     else {
//       newarr.push(element)
//     }
//   });
//   console.log(newarr.join(' '))
// }
// reverseWords('Professional');             // "lanoisseforP"
// reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
// reverseWords('Launch School');            // "hcnuaL loohcS"

// write a function that takes an Array as an argument, and reverses its elements in place; that is,
// mutate the array passed into this method.  The return value should be the same Array object

// You may not use Array.prototype.reverse()

// function reverse(arr) {
//   let result = []
//   for (i = arr.length-1; i >= 0; i--) {
//     result.push(arr[i])
//   }
//   console.log(result)
// }

// reverse([1, 2, 3, 4])
// reverse(["a", "b", "c", "d", "e"])
// reverse(["abc"])
// reverse([])

// let list1 = ["a", "b", "c", "d", "e"];
// let result1 = reverse(list1);
// console.log(result1); // logs  ["e", "d", "c", "b", "a"]
// console.log(list1 === result1); // logs true

// Write a function that takes a string as argument, and returns true if all parentheses 
// in the string are properly balanced, false otherwise. To be properly balanced, 
// parentheses must occur in matching '(' and ')' pairs.
// function isBalanced(string) {
//   openP = 0
//   closeP = 0
//   for (i = 0; i < string.length; i++) {
//     if (string[i] === '(') {
//       openP += 1
//     }
//     else if (string[i] ===')') {
//       closeP += 1
//     }
//   }
//   return openP === closeP
// }

// console.log(isBalanced("What (is) this?")) //=== true);
// console.log(isBalanced("What is) this?"))// === false);
// console.log(isBalanced("What (is this?"))// === false);
// console.log(isBalanced("((What) (is this))?"))// === true);
// console.log(isBalanced("((What)) (is this))?"))// === false);
// console.log(isBalanced("Hey!"))// === true);
// console.log(isBalanced(")Hey!("))// === false);
// console.log(isBalanced("What ((is))) up("))// === false);

////////////////////////////////////////////////////////////////////////LIST PROCESSING////////////////////////////////////////////////////////////////////////

// Write a function that takes an array of integers between 0 and 19, 
// and returns an array of those integers sorted based on the English 
// word for each number:
let NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
                    'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
                    'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
//ANSWER
function alphabeticNumberSort(arr) {
  arr.sort((a, b) => {
    let alpha = NUMBER_WORDS[a]
    let beta =  NUMBER_WORDS[b]
    return alpha - beta
  })
  return arr
}


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
// alphabeticNumberSort([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19])
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

// alphabeticNumberSort([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19])

