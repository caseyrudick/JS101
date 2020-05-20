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