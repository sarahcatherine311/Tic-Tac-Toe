class Game {
  constructor() {
    this.player1 = new Player(1, '🌈');
    this.player2 = new Player(2, '🤠');
    this.turn = '🌈';
    this.winConditions = [
      ['box1', 'box2', 'box3'],
      ['box4', 'box5', 'box6'],
      ['box7', 'box8', 'box9'],
      ['box1', 'box4', 'box7'],
      ['box2', 'box5', 'box8'],
      ['box3', 'box6', 'box9'],
      ['box1', 'box5', 'box9'],
      ['box3', 'box5', 'box7'],
    ];
  }

  pushPlayerChoice(token) {
    if (token === this.player1.token) {
      this.player1.choices.push(event.target.id);
    } else {
      this.player2.choices.push(event.target.id);
    }
  }

  changePlayerTurn (token) {
    game.turn = token;
  }

  resetGameBoard() {
    for (var i = 0; i < boxes.length; i++) {
      boxes[i].innerText = "";
    }
    
    if (this.turn === '🌈') {
      this.turn = '🤠';
    } else {
      this.turn = '🌈';
    }

    playerTurn.innerText = `It's ${game.turn}'s turn!`;
    game.player1.choices = [];
    game.player2.choices = [];
  }

  determineInnerText(box) {
    return box.innerText !== "";
  }

  showResult() {
    for (var i = 0; i < this.winConditions.length; i++){
      if (this.winConditions[i].every(wins => this.player1.choices.includes(wins))) {
        game.player1.increaseWins();
        showPlayer1Won();
        setTimeout(this.resetGameBoard, 2.5 * 1000);
      } else if (this.winConditions[i].every(wins => this.player2.choices.includes(wins))){
        game.player2.increaseWins();
        showPlayer2Won();
        setTimeout(this.resetGameBoard, 2.5 * 1000);
      } else if (boxes.every(this.determineInnerText)) {
        playerTurn.innerText = "It's a draw!";
        setTimeout(this.resetGameBoard, 2.5 * 1000);
      }
    }
  }
}