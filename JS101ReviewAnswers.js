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
let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};
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
//#3
// For each of these collection objects, demonstrate how you would access the letter g.

// let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
// console.log(arr1[2][1][3])

// let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];
// let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];
// let g = Object.values(arr2[1])[0][0]
// console.log(g)

// let arr3 = [['abc'], ['def'], { third: ['ghi'] }];
// let newarr = Object.values(arr3[2])[0][0].split('')[0]
// console.log(newarr)

// let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };
// let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };
// console.log(Object.values(obj1)[1][1])

// let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }}


//#4 How would you order the following array of objects based on the year
// of publication of each book, from earliest to latest

