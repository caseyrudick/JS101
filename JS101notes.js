//Freezing Objects
let obj = Object.freeze({ a: 'foo'})
let arr = Object.freeze(['a','b','c'])

obj['b'] = 'bar'
console.log(obj)

//nested objects can still be mutated

let arr1 = Object.freeze([[1], [2], [3]]);
arr1[1].push('apple')
console.log(arr1)


// Higher Order Functions
[[1, 2], [3, 4]].forEach(arr => console.log(arr[0]));
// 1
// 3
// => undefined

//Accessing Keys and Values
Let capitals = {uk: 'London', france: 'Paris', germany: 'Berlin' };
Object.keys(obj1)[1] //=> 'france'
Object.values(obj1)[0] //=> 'London'

// Sorting
// it is destructive
// below is for ascending order. Ascending if a > b return 1
// descending if a > b return -1
[2,3,5,1,6,34].sort((a,b) => {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1
  } else {
    return 0
  }
})
// the sort function itierates over our array and supplies our callback function with 
// two elements each time.  It arranges the relative position of the two elements
// using the following rules:
// 1) If the callback returns a number less than 0, place a before b
// 2) If the callback returns a number greater than 0, place b before a
// 3) If the callback returns 0, leave the relative positions of a and b unchanged

// OR 
[2,3,5,1,6,34].sort((a,b) => a - b)