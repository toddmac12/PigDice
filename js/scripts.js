// Business Logic
function Game() {
  this.score = { "player1": 0, "player2": 0 };
  this.turn = true;
  this.activeScore = 0;
  this.initialRoll = true;
  this.activePlayer = "player2";
  this.dice = "Roll the dice!";
}

// true turn value = player 2 --------  flase turn value = player 1

Game.prototype.roll = function () {
  let diceValue = Math.floor((Math.random() * 6) + 1)
  if (diceValue === 1) {
    this.activeScore = 0
    this.dice = diceValue
  }
  else {
    this.activeScore += diceValue
    this.dice = diceValue
  }
};

Game.prototype.changeTurn = function () {
  if (game.turn) {
    this.turn = false
    this.activePlayer = "player1"
  }
  else {
    this.turn = true
    this.activePlayer = "player2"
  }
};

Game.prototype.hold = function () {
  if (this.turn === false) {
    this.score.player1 += this.activeScore
    this.activeScore = 0
    this.changeTurn();
  }
  else {
    this.score.player2 += this.activeScore
    this.activeScore = 0
    this.changeTurn();
  }

};

Game.prototype.winCheck = function () {
  if (this.score[this.activePlayer] + this.activeScore >= 50) {
    console.log(this.activePlayer + "wins")
    return "win"
  }
  else {
    console.log("game continues")
    return "continue"
  }
}

// USER INTERFACE LOGIC
let game = new Game

$(document).ready(function () {
  $("span#dice-value").text(game.dice)
  $("span#active-score").text(game.activeScore)
  $("span#active-player").text(game.activePlayer)

  $("button#roll").click(function () {
    game.roll()
    let dice = game.dice
    let winCondition = game.winCheck();
    $("span#dice-value").text(game.dice);
    $("span#active-score").text(game.activeScore);
    $("span#" + game.activePlayer + "-held-score").text(game.score[game.activePlayer] + game.activeScore);
    if (winCondition === "win") {
      $("div#win-screen").show();
      $("div#game-board").hide();
      $("div#buttons").hide();
      $("span#winnerName").text(game.activePlayer);
    }
    else if (dice === 1){
      game.changeTurn();
      $("span#active-player").text(game.activePlayer)
    }
    else {
      if (game.turn === true) {
        $("player2div").show();
        $("player1div").hide();
      }
      else {
        $("player2div").hide();
        $("player1div").show();
      }
    }
  })

  $("button#hold").click(function () {
    game.hold();
    $("span#dice-value").text(0);
    $("span#active-score").text(game.activeScore);
    console.log(game.turn)
    if (game.turn === true) {
      $("span#player2-held-score").text(0);
      $("span#player1-held-score").text(0);
      $("span#player1-total-score").text(game.score.player1);
      $("span#player2-total-score").text(game.score.player2);
      $("player2div").show();
      $("player1div").hide();
    }
    else {
      $("span#player2-held-score").text(0);
      $("span#player1-held-score").text(0);
      $("span#player1-total-score").text(game.score.player1);
      $("span#player2-total-score").text(game.score.player2);
      $("player2div").hide();
      $("player1div").show();
    }
    $("span#active-player").text(game.activePlayer)
  })
})
