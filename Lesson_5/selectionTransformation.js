// let produce = {
//   apple: 'Fruit',
//   carrot: 'Vegetable',
//   pear: 'Fruit',
//   broccoli: 'Vegetable'
// };
// let newObj = {}
// for (const fruits in produce) {
//   if (produce[fruits] === 'Fruit') {
//     newObj[fruits] = produce[fruits]
//   }
// }
// console.log(newObj)
// let myNumbers = [1, 4, 3, 7, 2, 6];
// function doubleNumber(nums) {
//   nums.forEach(element => {
//     return element = element * 2
//   });
//   // for (i=0; i< nums.length; i++) {
//   //   nums[i] = nums[i] *2
//   // }
//   return nums
// }

// console.log(doubleNumber(myNumbers))
// console.log(myNumbers)

function myNumbers(arr, num) {
  let i =0
  while(i<arr.length){
    arr[i] = arr[i]*num
    i++
  }
  return arr
}
arry = [2,3,4,5,6]
console.log(myNumbers(arry,3))
console.log(arry)

function produceFinder(fruitSelection, desiredType) {
  selectedProduce = {}
  for(fruits in fruitSelection) {
    if (fruitSelection[fruits] === desiredType) {
      selectedProduce[fruits] = fruitSelection[fruits]
    }
  }
  return selectedProduce
}
let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};
console.log(produceFinder(produce, 'Fruit'))
console.log(produceFinder(produce, 'Vegetable'))