
function calculateScore(player, score) {
  let cards = ''
  player === 'Player' ? cards = score.PlayerCards: 
    cards = score.ComputerCards

  let vals = Object.values(cards)
  result = [].concat(...vals).filter(num => {
    return Number.isInteger(num)
  }).map(num => {
      return num > 10 ? 10 : num
    }).reduce((sum, idx) => {return sum + idx},0)
  console.log(result)
  }



score = {
  PlayerCards: [], 
  PlayerScore:0, 
  ComputerCards: [], 
  ComputerScore: 0, 
  Deck: []
}
score.PlayerCards = [
  [ 'Clubs', 6 ], 
  [ 'Clubs', 12 ],
  [ 'Diamonds', 11 ]
]

calculateScore('Player', score)