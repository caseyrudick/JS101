let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];
// we want to sort in ascending order, by summing values of nested [ [ 1, 4, 2 ], [ 3, 6, 4 ], [ 6, 8, 9 ] ]

scores.sort((a,b) => {
  let totalAScore = a.reduce((sum, index) => {return sum += index},0)
  console.log(totalAScore)
  let totalBScore = b.reduce((sum, index) => {return sum += index},0)
  console.log(totalBScore)
  return totalAScore - totalBScore
})
console.log(scores)