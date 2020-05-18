// let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
// // console.log(Object.keys(ages).includes('Spot'))
// // ages.hasOwnProperty('Spot')
// additional = { Marilyn: 22, Spot: 237 };
// Object.assign(ages, additional)

// console.log(ages)

// let advice = "Few things in life are as important as house training your pet dinosaur.";
// advice.slice(0,advice.indexOf('house'))

// console.log(advice)

// let numbers = [1, 2, 3, 4, 5];
// let reversed = numbers.slice('').reverse();
// let anotherR = [...numbers].reverse();
// console.log(numbers); // [ 5, 4, 3, 2, 1 ]
// console.log(reversed)
// console.log(anotherR)
// console.log(numbers)

// numbers = [1, 2, 3, 4, 5];
// numbers.sort((num1, num2) => num2 - num1);
// console.log(numbers); // [ 5, 4, 3, 2, 1 ]
// let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

// let number1 = 8;  // false
// let number2 = 95; // true

// console.log(numbers.includes(number1))
// console.log(newfam)

flintstones = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

// fam.reduce((sum, iterator) => 
//   {return sum.concat(iterator)
//   }, [])
//   console.log(fam)
// let newFlintstones = [];
// flintstones.forEach(element => {
//   newFlintstones = newFlintstones.concat(element);
// })
// console.log(newFlintstones)

let newArray = flintstones.reduce((sum, iterator) => 
{return sum.concat(iterator)
}, [])
console.log(newArray)
//console.log(flintstones)

// console.log([].concat(...flintstones))
// console.log(flintstones)


