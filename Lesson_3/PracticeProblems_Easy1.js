// let numbers = [1,2,3]
// numbers[6] = 5
// //console.log(numbers[4])
// // let numbers = [1,2,3];
// // numbers[6] = 5
// // numbers[4]
// let string = 'Come over here!'
// string.endsWith('!')
// //console.log(string[string.length-1])
// //determine whether the following object of people and their age contains an entry for "Spot":
// let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10, Spot: 20};
// let names = Object.keys(ages)
// names.forEach(name => {
//   if(name === "Spot") {
//     console.log("Spot's here")
//   }
// })
// console.log("End of search")
//console.log(ages.hasOwnProperty("Spot"))
// using the following string, create a new string that contains all lowercase letters 
// except for the first character, which should be capitalized
// let munstersDescription = "the Munsters are CREEPY and Spooky.";
// console.log(munstersDescription[0].toUpperCase() + munstersDescription.substring(1).toLowerCase())
// console.log(false === '0')
// let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
// let additionalAges = { Marilyn: 22, Spot: 237 };
// Object.assign(ages, additionalAges)
// console.log(ages)
// determine if the name "Dino" appears in the strings below
// let str1 = "Few things in life are as important as house training your pet dinosaur.";
// let str2 = "Fred and Wilma have a pet dinosaur named Dino.";
// console.log(str1.match(/dino/g))
// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

// let advice = "Few things in life are as important as house training your pet dinosaur.";
// // let array = advice.split(' ')
// // let arr = array.indexOf('house')
// // array = array.slice(0,arr).join(' ')

// // array = advice.slice(0, 20)
// console.log(advice.indexOf('house'))

///////Practice Problems Easy 2/////////

// #1
// given a string, return a new string that replaces every occurrence of the word "important"
// with urgent
// let advice = "Few things in life are as important as house training your pet dinosaur.";
// let newstring = advice.replace('house', 'urgent')
// console.log(newstring)

// #2
// the Array.prototype.reverse method reverses the order of elements in an array, and Array.prototype.sort
// can rearrange the elements in a variety of ways, including descending
// both of these methods mutate the original array as shown below
// write two distinct ways of reversing the array without mutating the original array.  Use reverse for the first
// solution and sort for the second

// let numbers = [1, 2, 3, 4, 5];
// let numbersReversed = []
// for(i = numbers.length; i > 0; i--) {
//   numbersReversed.push(i)
// }
// console.log(numbersReversed)
// let arrayarray = numbers.slice().reverse()
// console.log(arrayarray)
// newArry = [...numbers].reverse()
// console.log(newArry)

// #4
// starting with the string:
// let famousWords = "seven years ago...";
// show two different ways to put the expected "Four score and " in front of it
// let first = "Four score and "
// // let two = first.concat(famousWords)
// // console.log(two)
// let two = first + famousWords
// console.log(two)

// #5
// given an array of numbers [1, 2, 3, 4, 5], mutate the array by removing the number at index 2, so
// it becomes [1,2,4,5]
// let arr = [1, 2, 3, 4, 5]
// arr.splice(2,1)
// console.log(arr)

// #6
// suppose we build an array like this:
// let flintstones = ["Fred", "Wilma"];
// flintstones.push(["Barney", "Betty"]);
// flintstones.push(["Bambam", "Pebbles"]);

// let final = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
// let newOne = []
// adjustFlin = []
// final.forEach(flin => {
//   adjustFlin = adjustFlin.concat(flin)
// })
// // console.log(final.flat())

// console.log(adjustFlin)

// #7
// let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
// create an array from this object that contains only two elements: Barney's name and Barney's
// number

// let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

// let array1 = []
// let arr1 = Object.entries(flintstones)
// arr1 = arr1.filter(element =>element[0] === "Barney")
// console.log(arr1.flat())

// #8
// how would you check whether the objects assigned to variables numbers and table 
// below are arrays?
// let numbers = [1, 2, 3, 4]; // true
// let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false
// let numbers = [1, 2, 3, 4]; // true
// let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false
// console.log(Array.isArray(numbers))
// console.log(Array.isArray(table))

// #9
// write a one-line expression to count the number of lower-case t characters in each of the 
// // following strings
// let statement1 = "The Flintstones Rock!";
// let statement2 = "Easy come, easy go.";
// count = (statement1.match(/t/g)).length
// console.log(count)

// #10 
// how do we center the following string on a 40-character wide table
// let title = "Flintstone Family Members";
// let title = "Flintstone Family Members";
// let num = title.split().length
// console.log(num)


////////////////////////////////// PRACTICE PROBLEMS: EASY 3////////////////////////////////////

// #1
// write 4 different ways to remove all the elements from the following array
// let numbers = [1,2,3,4];
// numbers = []
// console.log(numbers)
// numbers.splice(0,numbers.length)
// while(numbers.length) {
//   numbers.pop()
// }

// #5
// refactor the following to remove the unnecessary true or false
// function isColorValid(color) {
//   if(color === "blue" || color === "green") {
//     return true
//   } else {
//     return false
//   }
// }
// function isColorValid(color) {
//   return (color === "blue" || color === "green")
// }
// const isColorValid = color => color === "blue" || color === "green"
// const isColorValid = color => ["blue", "green"].includes(color)

////////////////////////////////// PRACTICE PROBLEMS: MEDIUM #1////////////////////////////////////
// #1
// write a program that writes the following output 10x
// let str = "The Flintstones Rock!"
// // The Flintstones Rock!
// //  The Flintstones Rock!
// for (let index = 0; index < 10; index++) {
//   space = " "
//   spacer = space.repeat(index)
//   console.log(spacer.concat(str))
// }

// #2 
// swap the case of each letter in the following string:
// let munstersDescription = "The Munsters are creepy and spooky.";
// let munstersDescription = "The Munsters are creepy and spooky.";
// let newStr = ''
// munstersDescription.split('').forEach(element => {
//   if (element == element.toUpperCase()) {
//     newStr += element.toLowerCase()
//   }
//   else{
//     newStr += element.toUpperCase()
//   }
// })
// console.log(newStr)


////////////////////////////////// PRACTICE PROBLEMS: HARD #1////////////////////////////////////
// #1
// will these two functions return the same thing?

// function first() {
//   return {
//     prop1: "hi there"
//   };
// }

// function second() {
//   return
//   {
//     prop1: "hi there"
//   };
// }
// console.log(first());
// console.log(second());
// no because JS inserted a semicolon after the return statement in the second function so the rest was never reached

// #2
// What does the last line in the following code output?
// what if we wanted to modify numArray instead of mutating the original?
// let object = { first: [1] };
// let numArray = object["first"].concat(2);


// console.log(numArray); //  => "[1, 2]"
// console.log(object); 


// function messWithVars(one, two, three) {
//   one = two;
//   two = three;
//   three = one;
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`);
// console.log(`two is: ${two}`);
// console.log(`three is: ${three}`);

function messWithVars(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);