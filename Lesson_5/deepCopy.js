let arr = [{ b: 'foo' }, ['bar']];
let serializedArr = JSON.stringify(arr)
let deepCopiedArr = JSON.parse(serializedArr)
deepCopiedArr[1].push('element')
console.log(deepCopiedArr)
console.log(arr)

