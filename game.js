class Game {
  constructor() {
    this.player1 = new Player(1, "🌈");
    this.player2 = new Player(2, "🤠");
    this.turn = "🌈";
    this.winConditions = [
      ['child1', 'child2', 'child3'],
      ['child4', 'child5', 'child6'],
      ['child7', 'child8', 'child9'],
      ['child1', 'child4', 'child7'],
      ['child2', 'child5', 'child8'],
      ['child3', 'child6', 'child9r'],
      ['child1', 'child5', 'child9'],
      ['child3', 'child5', 'child7'],
    ];
    this.player1Choices = [];
    this.player2Choices = [];
    this.draw = false;
  }

  pushPlayerChoice(token) {
    if (token === this.player1.token) {
      this.player1Choices.push(event.target.id);
    } else {
      this.player2Choices.push(event.target.id);
    }
  }

  resetGameBoard() {
    //timeout/pause for a few seconds then game board resets
  }
}