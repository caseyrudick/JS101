const RLSYNC = require('readline-sync')

function initiateCards() {
  let deckOfCards = []
  suits = ['Hearts', 'Clubs', 'Spades', 'Diamonds']
  for (card in suits){
    for (idx = 2; idx < 14; idx++) {
      switch (idx) {
        case 10: 
          result = [`Jack of ${suits[card]}`];
          break;
        case 11:
          result = [`Queen of ${suits[card]}`];
          break;
        case 12:
          result = [`King of ${suits[card]}`];
          break;
        case 13:
          result = [`Ace of ${suits[card]}`]
          break;
        default:
          result = [suits[card], idx]
      }
      deckOfCards.push(result)
    } 
  }
  return deckOfCards
}

function initiateScore() {
  return {PlayerCards: [], PlayerScore:0, ComputerCards: [], ComputerScore: 0, Deck: [], GameScore: [0,0]}
}

function prompt(msg) {
  console.log(`${msg}`)
}

function generateRandomCard(score) {
  let randomIndex = Math.floor(Math.random()*score['Deck'].length)
  let drawnCard = score.Deck[randomIndex]
  //console.log(`Drawn Card: ${drawnCard[1]} of ${drawnCard[0]} `)
  updateDeck(score, randomIndex)
  return [drawnCard, score]
}

function updateDeck(score, randomIndex) {
  score.Deck.splice(randomIndex,1)
  return score.Deck.splice(randomIndex,1);
}

function dealPlayerCards(score) {
  if (score['PlayerCards'].length === 0) {
    score['PlayerCards'] = []
  }
  card = generateRandomCard(score)[0]
  let royals = ['King', 'Queen', 'Jack', 'Ace']
  let royalRegex = new RegExp(royals.join('|'))
  if (royalRegex.test(card)) {
    score['PlayerCards'].push(card)[0]
    } else {
      score['PlayerCards'].push([card[1], card[0]])
    }
  // if (inspectAceValue(player = 'Player',score, card)) {
  //   score['PlayerCards'].push([1, card[0][0]])
  // } else {
  //   score['PlayerCards'].push([card[0][1], card[0][0]])
  // }
  //console.log(score.PlayerCards)
  return score
}

function dealComputerCards(score) {
  if (score['ComputerCards'].length === 0){
    score['ComputerCards'] = [];
  } 
  card = generateRandomCard(score)[0]
  let royals = ['King', 'Queen', 'Jack', 'Ace']
  let royalRegex = new RegExp(royals.join('|'))
  if (royalRegex.test(card)) {
    score['ComputerCards'].push(card)
  } else {
    score['ComputerCards'].push([card[1], card[0]])
  }

  // if (inspectAceValue(player = 'Computer', score, card)) {
  //   score['ComputerCards'].push('1')
  // } else {
  //   score['ComputerCards'].push([card[0][1], card[0][0]])
  // }
  return score
}

function dealFirstRound(score) {
  let counter = 0
  while (counter < 2) {
    dealPlayerCards(score)
    dealComputerCards(score);
    counter += 1
  }
  topComputerCard = score['ComputerCards'][1]
  console.log(`\nYour Cards: ${score.PlayerCards.map(element => element.join(' of ')).join(' & ')}`)
  console.log(`Computer's Top Card: ${topComputerCard.join(' of ')}`)
  return score
}

function calculateScoreWithRoyalsAndAces(player, score) {
  let finalScore = calculateScore(player, score);
  player === 'Player' ? hand = score.PlayerCards : hand = score.ComputerCards
  let royals = ['King', 'Queen', 'Jack']
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

function displayComputerScores(score) {
  score.ComputerScore = calculateScoreWithRoyalsAndAces('Computer', score)
  //prompt(`COMPUTER'S SUM: ${score.ComputerScore}`)
  return score
}

function bust(player, score) {
  let val = Number(calculateScoreWithRoyalsAndAces(player, score))
  // let ComputerVal = Number(calculateScores(score.ComputerCards))
  return val > 21;
}

function displayDrawnCardAfterHitting(score) {
  let lastCard = score.PlayerCards.length-1
  playerscore = calculateScoreWithRoyalsAndAces('Player', score)
  prompt(`\n=>DRAWN CARD: ${score.PlayerCards[lastCard].join(' of ')}. Total: ${playerscore}\n`)
}

function playerHitOrStay(score) {
  while (true) {
    prompt(`\n=>Do you want to hit or stay?`)
    let answer = RLSYNC.question() 
    if (!['score','h','s'].includes(answer.toLowerCase())) {
      answer = hitOrStayHandler()
      if (answer === 'h') {
        prompt(`\n=>You chose to hit`)
        dealPlayerCards(score)
        displayDrawnCardAfterHitting(score)
        if (bust('Player', score)) {
          break;
        } 
      } else {
        prompt('\n=>You chose to stay\n')
        break;
      }
    }
    else if (answer === 'h') {
      prompt(`\n=>You chose to hit`)
      dealPlayerCards(score)
      displayDrawnCardAfterHitting(score)
      if (bust('Player', score)) {
        break;
      }

    } else {
    prompt('\n=>You chose to stay\n')
    break;
    }
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

function computerHitOrStay(score) {
  while (calculateScoreWithRoyalsAndAces('Computer',score) < 17) {
    dealComputerCards(score)
    displayComputerScores(score)
  }
}

function determineWinner(score) {
  score.PlayerScore = calculateScoreWithRoyalsAndAces('Player', score);
  score.ComputerScore = calculateScoreWithRoyalsAndAces('Computer', score)
  let playerScore = score.PlayerScore
  let computerScore = score.ComputerScore
  if (bust('Player', score)) {
    score.GameScore[1] += 1
    console.log(`COMPUTER WINS!`)
  }
  else if (bust('Computer', score)) {
    score.GameScore[0] += 1;
    console.log(`YOU WIN!`)
  }
  else if (playerScore > computerScore) {
    score.GameScore[0] += 1;
    console.log(`YOU WIN!`)
  }
  else if (playerScore < computerScore) {
    score.GameScore[1] += 1;
    console.log(`COMPUTER WINS!`)
  }
  else {
    console.log('DRAW!')
  }
}

function displayGameScore(score) {
  prompt(`\n*** Current Game Score *** \n Player: ${score.GameScore[0]} Computer: ${score.GameScore[1]}\n`)
}

function joinOr(player,score) {
  let royals = ['King', 'Queen', 'Jack', 'Ace']
  let royalRegex = new RegExp(royals.join('|'))
  listOfCards = []
  player === 'PlayerCards' ? 
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

function displayHands(score) {
 let playerscore = calculateScoreWithRoyalsAndAces('Player', score)
 let computerscore = calculateScoreWithRoyalsAndAces('Computer', score)
  prompt(`=>YOUR CARDS: ${joinOr('PlayerCards', score)} TOTAlING: ${playerscore}`)
  prompt(`=>COMPUTER CARDS: ${joinOr('ComputerCards', score)} TOTAlING: ${computerscore}`)
  //prompt(`${score.PlayerCards}`)
 // prompt(`Computer Cards: ${score.ComputerCards.map(element => element.reverse().join(' of ')).join(' and ')}`)
}

function playAgainHandler(answer) {
  while (true) {
    if (['y','n'].includes(answer)) break; 
    else {
      prompt("Invalid choice. Please enter 'y' or 'n'")
      answer = RLSYNC.question()
    }
  }
  if (answer === 'y') {
    true
  }
  false 
}

let score = initiateScore()
score.Deck = initiateCards()
console.clear()
console.log(`*** WELCOME TO 21 ***`)
while (true) {
  dealFirstRound(score)
  displayComputerScores(score)
  playerHitOrStay(score)
  if (!bust("Player", score)) {
    computerHitOrStay(score)
  }
  determineWinner(score)
  displayHands(score)
  displayGameScore(score)
  prompt('=>Do you want to play again?')
  let answer = RLSYNC.question()
  if (answer.toLowerCase() === 'n') {
    break;
  } else if (answer.toLowerCase() === 'y') {
    lastGameScore = score.GameScore
    score = initiateScore()
    score.GameScore = lastGameScore
    score.Deck = initiateCards()
    console.clear()
  } else {
    if (playAgainHandler(answer)) {
      console.log(playAgainHandler(answer))
      break;
  } else {
    lastGameScore = score.GameScore
    score = initiateScore()
    score.GameScore = lastGameScore
    score.Deck = initiateCards()
    console.clear()
  }
}

} 
console.log(`\n=>Thanks for Playing! Good Bye!`)




