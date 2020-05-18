///////Practice Problems Easy 2/////////

// #1
// given a string, return a new string that replaces every occurrence of the word "important"
// with urgent
// let advice = "Few things in life are as important as house training your pet dinosaur.";

// #2
// the Array.prototype.reverse method reverses the order of elements in an array, and Array.prototype.sort
// can rearrange the elements in a variety of ways, including descending
// both of these methods mutate the original array as shown below
// write two distinct ways of reversing the array without mutating the original array.  Use reverse for the first
// solution and sort for the second

// let numbers = [1, 2, 3, 4, 5];
// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers)

// #4
// starting with the string:
// let famousWords = "seven years ago...";
// console.log(two)
// show two different ways to put the expected "Four score and " in front of it


// #5
// given an array of numbers [1, 2, 3, 4, 5], mutate the array by removing the number at index 2, so
// it becomes [1,2,4,5]
// let arr = [1, 2, 3, 4, 5]

// #6
// suppose we build an array like this:
// let flintstones = ["Fred", "Wilma"];
// flintstones.push(["Barney", "Betty"]);
// flintstones.push(["Bambam", "Pebbles"]);
// Create a new array that contains all of the above values, but in an un-nested format:
// [ 'Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles' ]

// #7
// let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
// create an array from this object that contains only two elements: Barney's name and Barney's
// number
// let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

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
// let num = title.length
// console.log(num)
// let start = Math.floor(40-25/2)
// console.log(' '.repeat(start).concat(title))

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

