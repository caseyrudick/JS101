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
  card = generateRandomCard(score)
  if (inspectAceValue(player = 'Player',score, card)) {
    score['PlayerCards'].push(['Ace',1])
  } else {
    score['PlayerCards'].push(card[0])
  }
  console.log(score.PlayerCards)
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
  return result
  }

function inspectAceValue(player, score, card) {
  return ((calculateScore(player,score) > 10) && 
    card === 14)
}

function displayPlayerScores(score) {
  score.PlayerScore = calculateScore('Player', score)
  prompt(`You have: ${score.PlayerScore}.`)
  return score
}
function displayComputerScores(score) {
  score.ComputerScore = calculateScore('Computer', score)
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
}

function hitOrStayHandler() {
  while (true) {
    prompt ('=>Please enter either "h" or "s": ')
    answer = RLSYNC.question()
    if (['h','s'].includes(answer.toLowerCase())) break;
  }
  return answer
}

function playerHitOrStay(score) {
  while (true) {
    prompt(`=>Do you want to hit or stay?`)
    let answer = RLSYNC.question() 
    // if (answer = 'score') {
    //   console.log(score)
    // }
    if (!['score','h','s'].includes(answer.toLowerCase())) {
      answer = hitOrStayHandler()
    }
    else if (answer === 'h') {
      dealPlayerCards(score)
      displayPlayerScores(score)
      if (bust('Player', score)) {
        console.log('You lose!')
        break;
      }
    } else {
    prompt('=>You chose to stay')
    displayPlayerScores(score) 
    break;
    }
  }
}



let score = initiateScore()
score.Deck = initiateCards()
dealFirstRound(score)
displayPlayerScores(score)
displayComputerScores(score)
while (true) {
  playerHitOrStay(score)
  computerHitOrStay(score)
  prompt('Do you want to play again?')
  let answer = RLSYNC.question()
  if (answer === 'score') {
    console.log(score)
  }
  if (answer.toLowerCase() !== 'y') break;
  score = initiateScore()
  score.Deck = initiateCards()
  dealFirstRound(score)
  displayPlayerScores(score)


  if (calculateScore('Player', score) > 21) {
    console.log('GAME OVER');
    break;
  } 

}




