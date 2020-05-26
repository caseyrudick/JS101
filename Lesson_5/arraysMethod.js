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

let sumOfAges = Object.values(ages).reduce((sum,element) => {return sum += element},0)
console.log(sumOfAges)
// let ageSum = age.reduce((sum, element) => {return sum += element},0)
// console.log(ageSum)
let mini = Object.values(ages).reduce((minimum, element) => {
  if(element<minimum) {
    minimum = element
  } return minimum 
}, Object.values(ages)[0])
console.log(mini)
