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
  let randomIndex = Math.floor(Math.random()*51)
  let drawnCard = score.Deck[randomIndex]
  console.log(`drawnCard: ${score.Deck[randomIndex]}`)
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
  console.log(score)
  return score
}

function dealPlayerCards(score) {
  if (score['PlayerCards'].length === 0) {
    score['PlayerCards'] = []
  }
  card = generateRandomCard(score)
  score['PlayerCards'].push(card[0])
  return score
}

function dealComputerCards(score) {
  if (score['ComputerCards'].length === 0){
    score['ComputerCards'] = [];
  }
  card = generateRandomCard(score)
  score['ComputerCards'].push(card[0])
  return score
}


function calculateScores(cards) {
  let vals = Object.values(cards)
  result = [].concat(...vals).filter(num => {
    return Number.isInteger(num)
 }).reduce((sum, idx) => {return sum + idx},0)
  return result
}

function displayScores(score) {
  score.PlayerScore = calculateScores(score.PlayerCards);
  score.ComputerScore = calculateScores(score.ComputerCards)
  prompt(`You have: ${score.PlayerScore}.  Computer has ${score.ComputerScore}`)
  return score
}


// function hitOrStayHandler(answer) {
//   prompt('Please enter either "y", "yes", "hit", or "h" ')
//   answer = RLSYNC.question() 
//   if (['y','yes', 'h','hit'].includes(answer.toLowerCase())) {
//     return false;
//   }
// }

// function hitOrStay(deckOfCards, playerCardsObject) {
//   prompt(`Do you want to hit or stay?`)
//   counter = 3
//   let answer = RLSYNC.question() 
//   while (true) {
//     if (!hitOrStayHandler(answer)) break;
//   }
//   while (true) {
//     newCard = generateRandomCard(deckOfCards)
//     playerCardsObject[counter] = newCard[0]
//     displayScores('Player', deckOfCards, playerCardsObject)
//     if (getIndividualScore(playerCardsObject)[0] > 21) break;
//   }
// }

let score = initiateScore()
score.Deck = initiateCards()
dealFirstRound(score)
displayScores(score)
// hitOrStay(deckOfCards, cardsObject);

//console.log(generateRandomCard(deckOfCards))

