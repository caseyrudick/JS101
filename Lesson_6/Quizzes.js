// #1
// What are the return values of the following?
// let foo = false; 
// VS
// let foo;
// foo = false 

// return values are different because let statements always return undefined
// but assignment expressions not apart of the let statement always return the new value for the variable

// #2
// What is true about the == operator
// when comparing a number and a string, JS coerces the string to a number
// When comparing a number and a string, JavaScript coerces the string to a number if it's on the left-hand side; it doesn't if it's on the right.
// When comparing a number and a string, JavaScript coerces the string to a number if it's value is numeric (i.e., 1 or 1.0).

// when comparing a number and a string, JS coerces the string to a number


// #3 
// Select the statments about JS's primitive values:
// undefined is a primitive value.
// B
// You can't change a primitive value after creating it.
// C
// Primitive values are mutable.
// D
// NaN is a primitive value.

// undefined is a primitive value.
// You can't change a primitive value after creating it.
// NaN is a primitive value.

// #4 
// Which of the following are built-in JavaScript data types?
// A Undefined
// B Integer
// C Float
// D Null
// E String

// B Undefined
// D Null
// E String
// There are 9 data types: 6x primitives(undefined, Boolean, Number, String, BigInt, Symbol), null, object, function

// #5 
// Will the code below raise an error?
// let numbers = [1, 2, 3];
// numbers[6] = 5;

// no, it will create unset empty values for the indexes leading up to 6 

//#6
// what will the last line return?  
// let numbers = [1, 2, 3];
// numbers[6] = 5;
// numbers[4];

// it will output undefined for the empty slot at index #4

// #7 
// How can you determined whether a given string ends in an exclamation mark?

// strings.match(/\!$/)
// strings.endsWith("!")

// #8 
// Determine whether the following object of people and their age contains an entry for 'Spot':
// let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
// for (name in ages) {
//   if (name === 'Spot') {
//     console.log("Yes")
//   }
// }

// #9 
// using the following string, create a new string that contains all lowercase letters except for the first
// character, which should be capitalized
// let munstersDescription = "the Munsters are CREEPY and Spooky.";

// console.log(strings.split(' ').map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' '))

// #10
// what will the following code output?
// console.log(false == '0');
// console.log(false === '0');

// true, both are falsy values 
// false, not same
// the == operator coerces the values to the same type before comparing them...in this case Boolean

// #11
// Add entries to ages object
// let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
// let additionalAges = { Marilyn: 22, Spot: 237 };

// Object.assign(ages, additionalAges)

// #12
// determine whether Dino appears in the strings below
// let str1 = "Few things in life are as important as house training your pet dinosaur.";
// let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

// console.log(/Dino/g.test(str2))
// console.log(str.includes('Dino'))

// #13
// remove everything from house onwards
// let advice = "Few things in life are as important as house training your pet dinosaur.";

// let indexed = advice.indexOf('house')
// console.log(advice.slice(0,indexed))