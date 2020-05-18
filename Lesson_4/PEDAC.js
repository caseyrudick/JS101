function getSubStrings(string) {
  result = []
  let startSubString = 0
  let endSubString = 2
  while (startSubString < string.length -1) {
    while(endSubString <= string.length) {
      result.push(string.slice(startSubString, endSubString))
      endSubString += 1
    }
    startSubString += 1
    endSubString = startSubString + 2
  }
  return result
}

function isPalidrome(str) {
  return str === str.split('').reverse().join('')
}

function returnPalidromes(str) {
  let subStringsArr = getSubStrings(str)
  let result = []
  subStringsArr.forEach(element => {
    if (isPalidrome(element)) {
      result.push(element)
    }
  });
  return result
}


console.log(returnPalidromes('appleandbananasandcasey'))