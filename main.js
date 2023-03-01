// Query Selectors
var box1 = document.querySelector('#child1');
var box2 = document.querySelector('#child2');
var box3 = document.querySelector('#child3');
var box4 = document.querySelector('#child4');
var box5 = document.querySelector('#child5');
var box6 = document.querySelector('#child6');
var box7 = document.querySelector('#child7');
var box8 = document.querySelector('#child8');
var box9 = document.querySelector('#child9');
var playerTurn = document.querySelector('#midSectionTitle');
var grid = document.querySelector('#ticTacToeGrid') ;

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

// Event Handlers
function insertToken(event) {
  if (playerTurn.innerText === "It's 🌈's turn!" && !event.target.innerText) {
    event.target.innerText = "🌈";
    playerTurn.innerText = "It's 🤠's turn!"
    game.pushPlayerChoice("🌈");
  } else if (!event.target.innerText){
    event.target.innerText = "🤠";
    playerTurn.innerText = "It's 🌈's turn!"
    game.pushPlayerChoice("🤠");
  }
  showResult();
}

function showResult() {
  for (var i = 0; i < game.winConditions.length; i++){
    if (game.winConditions[i].every(wins => game.player1Choices.includes(wins))) {
      console.log(" we have a winner!")
    }
  }
}
