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
  //console.log(`Drawn Card: ${drawnCard[1]} of ${drawnCard[0]} `)
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
  topComputerCard = score['ComputerCards'][1]
  prompt(`You have: ${score.PlayerScore}.  Computer has ${topComputerCard[1]} of ${topComputerCard[0]}`)
  return score
}

function bust(score) {
  let val = calculateScores(score.PlayerScore)
  if (val > 21) {
    return true
  }
}

function hitOrStayHandler(answer) {
  while (true) {
    prompt ('=>Please enter either "h" or "s": ')
    answer = RLSYNC.question()
    if (['h','s'].includes(answer.toLowerCase())) break;
  }
  return answer
}

function hitOrStay(score) {
  prompt(`=>Do you want to hit or stay?`)
  let answer = RLSYNC.question() 
  if (!['h','s'].includes(answer.toLowerCase())) {
    answer = hitOrStayHandler()
    if (answer === 'h') {
      dealPlayerCards(score)
    } else {
    prompt('=>You chose to stay')
    }
  }
  else if (answer === 'h') {
    dealPlayerCards(score)
    displayScores(score)
  } else {
    prompt('=>You chose to stay')
    displayScores(score)
    return false
  }
}


let score = initiateScore()
score.Deck = initiateCards()
dealFirstRound(score)
displayScores(score)
while (true) {
  hitOrStay(score)
  if (!hitOrStay(score) || (bust(score))) break;
}

if (bust(score)) {
  prompt ('You lose!')
}
