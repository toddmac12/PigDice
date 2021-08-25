// Business Logic
function Game() {
  this.score = { "player1": 0, "player2": 0 };
  this.turn = true;
  this.activeScore = 0;
  this.initialRoll = true;
  this.activePlayer = "player2";
}

// true turn value = player 2 --------  flase turn value = player 1

Game.prototype.roll = function(){
// let diceValue = 0
let diceValue = Math.floor((Math.random()*6 ) + 1) 
if (diceValue === 1){
  this.activeScore = 0
}
else{
this.activeScore += diceValue
this.winCheck();
}
console.log(diceValue)
console.log(this.activeScore)
};

Game.prototype.changeTurn = function(){
  if (game.turn === true){
    this.turn = false
    this.activePlayer = "player2"
  }
  else{
    this.turn = true
    this.activePlayer = "player1"
  }
  console.log(game.turn)
};

Game.prototype.hold = function(){
if (this.turn === false){
  this.score.player1 += this.activeScore
  this.activeScore = 0
  this.changeTurn();
  console.log(this.activePlayer)
  return this.score.player1
} 
else{
  this.score.player2 += this.activeScore
this.activeScore = 0
this.changeTurn();
console.log(this.activePlayer)
return this.score.player2
}
};

Game.prototype.winCheck = function(){
  if (this.score.player1 + this.activeScore >= 10){
    console.log("player 1 wins")
    return "win"
  }
  else if(this.score.player2 + this.activeScore >=10){
    console.log("player 2 wins")
    return "win"
  }
  else{
    console.log("game continues")
  }
  }



  // game.hold()
  // if (game.winCheck === "win"){
  //   //Show winners div
  //   // populate winners screen with active play's name
  // }
// Game.prototype.hold = function(){
  
// }


// function roll() {
//   let turn;

//   if (game.turn === true) 
// {
//     // Game.actionScore =game.score[turn];
//     {
//       turn = "player2";
//     }
// else {
//       turn = "player1";
//     }

//     if (game.initialRoll==true){
  
//     game.actionScore = game.score[turn]; 
//   }
//   game.actionScore[turn]=score(game.score{turn],game.initialRoll);
// if (game.score[turn] >=100


//   // Game.prototype.Turn = function() {
//   if (game.turn === false) {
//     game.turn = true
//     game.Activeplayer = "player2"
//   }
//   else {
//     game.turn = false;
//     game.activePlayer = "player1"
//   }
// }

  // when a player hits the hold button
// Game.prototype.Score(){
//   this.Turn()
// takes action score and adds it to player score
//switch turns

// Game.prototype.Roll(){
//   game.turn
  // math of determining a roll
  //return value between 1-6










// Game.prototype.turnCounter(function(){
//   i = this.turn
//   this.turn ++
//   if (i % 2 === 0){
//     set to player 2
//   }
//   else{
//     set to player 1
//   }
// })