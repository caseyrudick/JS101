
function calculateFinalScore(player, score) {
  let finalScore = calculateScore(player, score);
  player === 'Player' ? hand = score.PlayerCards : hand = score.ComputerCards
  let royals = ['King', 'Queen', 'Jack', 'Ace']
  let royalRegex = new RegExp(royals.join('|'))
  let aceRegex = new RegExp('Ace', 'i')
  for (card in hand) {
    if (royalRegex.test(hand[card])) {
      finalScore += 10
    }
  }
  for (card in hand) {
    if (finalScore > 21) {
      if (aceRegex.test(hand[card])) {
        finalScore -= 10
      }
    }
  } 
  return finalScore
  }

  function calculateScore(player, score) {
    let royals = ['King', ]
    if (player === 'Player') {
      let vals = Object.values(score.PlayerCards)
      result = [].concat(...vals).filter(num => {
        return Number.isInteger(num)
      }).map(num => {
          return (num > 10) ? 11 : num
        }).reduce((sum, idx) => {return sum + idx},0)
    } else {
      let vals = Object.values(score.ComputerCards)
      result = [].concat(...vals).filter(num => {
        return Number.isInteger(num)
      }).map(num => {
          return num > 11 ? 11 : num
        }).reduce((sum, idx) => {return sum + idx},0)
    }
    return result
  }


// function joinOr(player,score) {
//   let royals = ['King', 'Queen', 'Jack', 'Ace']
//   let royalRegex = new RegExp(royals.join('|'))
//   listOfCards = []
//   if (player = 'Player') {
//     for (cards in score['PlayerCards']) {
//       let card = score['PlayerCards'][cards]
//       if (royalRegex.test[card]) {
//         listOfCards.push(card)
//       } else {
//         listOfCards.push(card.join(' of '))
//       }
//     }
//     return listOfCards
//   }

  function joinOr(player,score) {
    let royals = ['King', 'Queen', 'Jack', 'Ace']
    let royalRegex = new RegExp(royals.join('|'))
    listOfCards = []
    player === 'Player' ? 
      deck = score.PlayerCards :
      deck = score.ComputerCards
    for (cards in deck) {
      let card = deck[cards]
      if (royalRegex.test[card]) {
        listOfCards.push(card)
      } else {
        listOfCards.push(card.join(' of '))
      }
    }
    let lastIndex = listOfCards.length - 1
    let firstPart = listOfCards.slice(0,lastIndex);
    return firstPart.join(', ').concat(`, and ${listOfCards[lastIndex]}.`);
  }
  // let cardsJoinedByOf = score[player].map(element =>{
  //   if (royalRegex.test(element)) {
  //     return element
  //   } else {
  //     return element.join(' of ')
  //   }
  // })
  // let lastIndex = cardsJoinedByOf.length - 1
  // let firstPart = cardsJoinedByOf.slice(0,lastIndex);
  // //console.log(lastIndexReversed)
  // return firstPart.join(', ').concat(`, and ${cardsJoinedByOf[lastIndex]}.`);


let score = {Player: 0, Computer: 0, PlayerCards: [[10, 'Hearts'],[1, 'yellow'],
['King of Clubs'],[10, 'Spades'],['Queen of Clubs']]}


console.log(joinOr('Player', score))