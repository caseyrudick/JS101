const RLSYNC = require('readline-sync')

function initiateCards() {
  let deckOfCards = []
  suits = ['Hearts', 'Clubs', 'Spades', 'Diamonds']
  for (card in suits){
    for (idx = 2; idx < 14; idx++) {
      deckOfCards.push([suits[card], idx])
    }
  }
  return deckOfCards
}

function initiateScore() {
  return {PlayerCards: [], PlayerScore:0, ComputerCards: [], ComputerScore: 0, Deck: []}
}

function prompt(msg) {
  console.log(`${msg}`)
}

function generateRandomCard(score) {
  let randomIndex = Math.floor(Math.random()*score['Deck'].length)
  let drawnCard = score.Deck[randomIndex]
  console.log(`Drawn Card: ${drawnCard[1]} of ${drawnCard[0]} `)
  updateDeck(score, randomIndex)
  return [drawnCard, score]
}

function updateDeck(score, randomIndex) {
  score.Deck.splice(randomIndex,1)
  return score.Deck.splice(randomIndex,1);
}

function dealFirstRound(score) {
  let counter = 0
  while (counter < 2) {
    dealPlayerCards(score)
    dealComputerCards(score);
    counter += 1
  }
  topComputerCard = score['ComputerCards'][1]
  console.log(score.PlayerCards)
  console.log(topComputerCard)
  return score
}

function dealPlayerCards(score) {
  if (score['PlayerCards'].length === 0) {
    score['PlayerCards'] = []
  }

  if (inspectAceValue(player = 'Player',score)) {
    score['PlayerCards'].push('1')
  } else {
    card = generateRandomCard(score)
    score['PlayerCards'].push(card[0])
  }
  return score
}

function dealComputerCards(score) {
  if (score['ComputerCards'].length === 0){
    score['ComputerCards'] = [];
  }
  if (inspectAceValue(player = 'Computer', score)) {
    score['ComputerCards'].push('1')
  } else {
    card = generateRandomCard(score)
    score['ComputerCards'].push(card[0])
  }
  return score
}

// function calculateScores(cards) {
//   let vals = Object.values(cards)
//   result = [].concat(...vals).filter(num => {
//     return Number.isInteger(num)
//  }).reduce((sum, idx) => {return sum + idx},0)
//   return result
// }
// function displayScores(score) {
//   score.PlayerScore = calculateScores(score.PlayerCards);
//   score.ComputerScore = calculateScores(score.ComputerCards)
//   topComputerCard = score['ComputerCards'][1]
//   prompt(`You have: ${score.PlayerScore}.  Computer has ${topComputerCard[1]} of ${topComputerCard[0]}`)
//   return score
// }



function calculateScore(player, score) {
  let cards = ''
  player === 'Player' ? cards = score.PlayerCards: 
    cards = score.ComputerCards

  let vals = Object.values(cards)
  result = [].concat(...vals).filter(num => {
    return Number.isInteger(num)
  }).reduce((sum, idx) => {return sum + idx},0)
  return result
}

function inspectAceValue(player, score) {
  return ((calculateScore(player,score) > 10) && 
    generateRandomCard(score)[0] === 14)
}

function displayPlayerScores(score) {
  score.PlayerScore = calculateScore('Player', score)
  prompt(`You have: ${score.PlayerScore}.`)
  return score
}
function displayComputerScores(score) {
  score.PlayerScore = calculateScore('Computer', score)
  prompt(`Computer has: ${score.ComputerScore}.`)
  return score
}

function bust(player, score) {
  let val = Number(calculateScore(player, score))
  // let ComputerVal = Number(calculateScores(score.ComputerCards))
  return val> 21;
}

function computerHitOrStay(score) {
  while (calculateScore('Computer',score) < 17) {
    dealComputerCards(score)
    displayComputerScores(score)
  }
  if 
}

// function hitOrStayHandler(answer) {
//   while (true) {
//     prompt ('=>Please enter either "h" or "s": ')
//     answer = RLSYNC.question()
//     if (['h','s'].includes(answer.toLowerCase())) break;
//   }bra
//   return answer
// }

function playerHitOrStay(score) {
  prompt(`=>Do you want to hit or stay?`)
  let answer = RLSYNC.question() 
  if (answer === 'h') {
      dealPlayerCards(score)
      displayPlayerScores(score)
    } else {
    prompt('=>You chose to stay')
    displayPlayerScores(score)
    return false
  }
}

let score = initiateScore()
score.Deck = initiateCards()
dealFirstRound(score)
displayPlayerScores(score)
while (true) {
  while (true) {
    playerHitOrStay(score)
    if (bust('Player', score)) {
      console.log('you lose!')
      break;
    }
  prompt('Do you want to play again?')
  let answer = RLSYNC.question()
  if (answer.toLowerCase() !== 'y') break;
}

  // if (calculateScore('Player', score) > 21) {
  //   console.log('GAME OVER');
  //   break;
  // } 
}




