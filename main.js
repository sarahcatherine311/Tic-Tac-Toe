// Query Selectors
var box1 = document.querySelector('#box1');
var box2 = document.querySelector('#box2');
var box3 = document.querySelector('#box3');
var box4 = document.querySelector('#box4');
var box5 = document.querySelector('#box5');
var box6 = document.querySelector('#box6');
var box7 = document.querySelector('#box7');
var box8 = document.querySelector('#box8');
var box9 = document.querySelector('#box9');
var playerTurn = document.querySelector('#midSectionTitle');
var grid = document.querySelector('#ticTacToeGrid');
var player1Wins = document.querySelector('#player1Wins');
var player2Wins = document.querySelector('#player2Wins');

// Event Listeners
box1.addEventListener('click', insertToken);
box2.addEventListener('click', insertToken);
box3.addEventListener('click', insertToken);
box4.addEventListener('click', insertToken);
box5.addEventListener('click', insertToken);
box6.addEventListener('click', insertToken);
box7.addEventListener('click', insertToken);
box8.addEventListener('click', insertToken);
box9.addEventListener('click', insertToken);

// Global Variables
var game = new Game();
var boxes = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

// Event Handlers
function insertToken(event) {
  if (game.turn === '🌈' && !event.target.innerText) {
    event.target.innerText = '🌈';
    game.changePlayerTurn('🤠');
    game.pushPlayerChoice('🌈');
    playerTurn.innerText = `It's ${game.turn}'s turn!`
  } else if (!event.target.innerText){
    event.target.innerText = '🤠';
    game.changePlayerTurn('🌈');
    game.pushPlayerChoice('🤠');
    playerTurn.innerText = `It's ${game.turn}'s turn!`
  }
  game.showResult();
}

function showPlayer1Won() {
  playerTurn.innerText = '🌈 wins!';
  player1Wins.innerText = `${game.player1.wins} wins`;
}

function showPlayer2Won() {
  playerTurn.innerText = '🤠 wins!';
  player2Wins.innerText = `${game.player2.wins} wins`;
}

function showDraw() {
  playerTurn.innerText = "It's a draw!";
}