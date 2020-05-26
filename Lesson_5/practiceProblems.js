//#1 How would you order the following in descending order

// let arr = ['10', '11', '9', '7', '8'];
// // arr.map(element => {
// //   Number(element)
// // }).sort((a,b) {
// //   return b-a
// // })
// // console.log(arr)

// newarr = arr.map(element => Number(element)).sort((a,b) => {
//   return b - a
// });
// console.log(newarr)

//#2 How would you order the following array of objects based on the year
// of publication of each book, from earliest to latest

// let books = [
//   { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
//   { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
//   { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
//   { title: 'Ulysses', author: 'James Joyce', published: '1922' },
//   { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
// ];

//iterate through array, element['published]
// books.sort((book1, book2) => {
//   let bookA = book1['published']
//   let bookB = book2['published']
//   return bookA - bookB
// })
// console.log(books)

// books.sort((a,b) => {
//   return Number(a.published) - Number(b.published);
// })
// console.log(books)

//#3
// For each of these collection objects, demonstrate how you would access the letter g.

// let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
// let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
// console.log(arr1[2][1][3])
// let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];

// let arr3 = [['abc'], ['def'], { third: ['ghi'] }];

// let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };

// let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }}
let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];


// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
// let obj1 = {}
// flintstones.forEach((element, index) => {
//   obj1[element] = index
// })
// console.log(obj1)

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

// let sumOfAges = Object.values(ages).reduce((sum,element) => {return sum += element},0)
// console.log(sumOfAges)
// // let ageSum = age.reduce((sum, element) => {return sum += element},0)
// // console.log(ageSum)
// let mini = Object.values(ages).reduce((minimum, element) => {
//   if(element<minimum) {
//     minimum = element
//   } return minimum 
// }, Object.values(ages)[0])
// console.log(mini)
// //or
//console.log(Math.min(...Object.values(ages)))
///uses the ...spread operator to convert the array to a list of arguments

let statement = "The Flintstones Rock";
//{ T: 1, h: 1, e: 2, F: 1, l: 1, ... }
//first create an array of each character
//iterate through array and check if it existed
//use ternary Obj[element] = count = Object[element] ? count +=1 : count = 1

newarray = statement.split('').filter(char => char !== ' ')
newObj = {}
newarray.forEach(element => {
  return newObj[element] ? newObj[element] += 1: newObj[element] = 1 
});

console.log(newObj)