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

//sorting