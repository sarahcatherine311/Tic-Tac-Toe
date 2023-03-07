class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.wins = 0;
    this.choices = [];
  }

  increaseWins() {
    this.wins++
  }
}