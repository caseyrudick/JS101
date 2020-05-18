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