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
    this.player1Choices = [];
    this.player2Choices = [];
  }

  pushPlayerChoice(token) {
    if (token === this.player1.token) {
      this.player1Choices.push(event.target.id);
    } else {
      this.player2Choices.push(event.target.id);
    }
  }

  resetGameBoard() {
    for (var i = 0; i < boxes.length; i++) {
      boxes[i].innerText = "";
    }
    
    if (this.turn === '🌈') {
      this.turn = '🤠'
    } else {
      this.turn = '🌈'
    }

    playerTurn.innerText = `It's ${game.turn}'s turn!`;
    game.player1Choices = [];
    game.player2Choices = [];
  }

  determineInnerText(box) {
    return box.innerText !== ""
  }

  showResult() {
    for (var i = 0; i < this.winConditions.length; i++){
      if (this.winConditions[i].every(wins => this.player1Choices.includes(wins))) {
        showPlayer1Won();
        setTimeout(this.resetGameBoard, 2.5 * 1000);
      } else if (this.winConditions[i].every(wins => this.player2Choices.includes(wins))){
        showPlayer2Won();
        setTimeout(this.resetGameBoard, 2.5 * 1000);
      } else if (boxes.every(this.determineInnerText)) {
        playerTurn.innerText = "It's a draw!";
        setTimeout(this.resetGameBoard, 2.5 * 1000);
      }
    }
  }
}