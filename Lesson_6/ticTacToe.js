const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const RLSYNC = require('readline-sync');
const TOTAL_GAMES = 5;
const WINNING_COMBOS = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7]             // diagonals
];
function prompt(msg) {
  console.log(`${msg}`);
}

function displayBoard(board, score) {
  console.log();
  console.log('');
  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}. Game Score is ${score.Player}:${score.Computer}`)
  console.log('     |     |     ');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}   `);
  console.log('     |     |     ');
  console.log('-----+-----+-----');
  console.log('     |     |     ');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}   `);
  console.log('     |     |     ');
  console.log('-----+-----+-----');
  console.log('     |     |     ');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}   `);
  console.log('     |     |     ');
}

function initializeBoard() {
  let board = {};
  for (let square = 1; square < 10; square++) {
    board[String(square)] = INITIAL_MARKER;
  }
  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(square => board[square] === INITIAL_MARKER);
}

function joinOr(board) {
  let lastIndex = emptySquares(board).length - 1;
  let firstPart = emptySquares(board).slice(0,lastIndex);
  return firstPart.join(', ').concat(`, and ${emptySquares(board)[lastIndex]}`);
}

function playerChoosesSquare(board, score) {
  let playerSquare;
  while (true) {
    prompt(`Pick a square: ${joinOr(board)}`);
    playerSquare = RLSYNC.question();
    if (!emptySquares(board).includes(playerSquare)) {
      prompt('Invalid Selection');
    }
    if (playerSquare === 'score'.toLowerCase()) {
      console.log(`Player: ${score.Player} Computer: ${score.Computer}`);
    }
    if (emptySquares(board).includes(playerSquare)) break;
  }
  board[String(playerSquare)] = HUMAN_MARKER;
  score.Player_Moves += 1;
  console.log(`Numbers of moves: ${score.Player_Moves}`);
}

function findAtRiskSquare(line, board, marker) {
  let marksInLine = line.map(square => board[square]);
  if (marksInLine.filter(val => val === marker).length === 2) {
    let unusedSquare = line.find(square => board[square] === INITIAL_MARKER);
    if (unusedSquare !== undefined) {
      return unusedSquare;
    }
  }
  return null;
}

function computerChoosesSquare(board) {
  let square;
  for (let index = 0; index < WINNING_COMBOS.length; index++) {
    let line = WINNING_COMBOS[index];
    square = findAtRiskSquare(line, board, HUMAN_MARKER);
    if (square) break;
  }
  if (!square) {
    for (let index = 0; index < WINNING_COMBOS.length; index++) {
      let line = WINNING_COMBOS[index];
      square = findAtRiskSquare(line, board, COMPUTER_MARKER);
      if (square) break;
    }
  }
  if (!square) {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIndex];
  }
  board[square] = COMPUTER_MARKER;
}

function detectWinner(board) {
  for (let line = 0; line < WINNING_COMBOS.length; line++) {
    let [sq1, sq2, sq3] = WINNING_COMBOS[line];
    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }
  return null;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function keepScore(board, score) {
  if (someoneWon(board)) {
    score[detectWinner(board)] += 1;
    score.Games_Played += 1;
  }
  if (boardFull(board)) {
    score.Games_Played += 1;
  }
  console.log(`Player: ${score.Player} Computer: ${score.Computer}`);
  return score;
}

function intiateScore() {
  return {Player: 0, Computer: 0, Games_Played: 0, Player_Moves: 0};
}

function maxGamesReached(score) {
  return score.Games_Played === TOTAL_GAMES;
}
let score = intiateScore();
while (true) {
  let board = initializeBoard();
  while (true) {
    displayBoard(board, score);
    playerChoosesSquare(board, score);
    if (someoneWon(board) || boardFull(board)) break;
    computerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;
  }
  displayBoard(board, score);
  keepScore(board, score);

  if (someoneWon(board, score)) {
    prompt(`${detectWinner(board)} won!`);
  } else {
    prompt(`It's a tie!`);
  }

  if (maxGamesReached(score)) {
    if (score.Player > score.Computer) {
      console.log('Player won the match!');
    } else if (score.Player < score.Computer) {
      console.log('Computer won the match!');
    } else {
      console.log(`It's a draw!`);
    }
    score.Player_Moves = 0;
  }

  prompt("Do you want to play again?");
  let answer = RLSYNC.question();
  if (answer !== 'y') break;
}
score = intiateScore();
prompt(`Thanks for playing TicTacToe!`);