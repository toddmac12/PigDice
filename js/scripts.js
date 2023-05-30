// Function to get a random number between 1 and 6
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

// Function to switch the active player
function switchPlayer() {
  activePlayer = activePlayer === 0 ? 1 : 0;
  document.getElementById('player-0-panel').classList.toggle('active');
  document.getElementById('player-1-panel').classList.toggle('active');
}

// Function to update the round score and check if the current player wins
function updateRoundScore() {
  if (dice !== 1) {
    roundScore += dice;
    document.getElementById('current-' + activePlayer).textContent = roundScore;
  } else {
    roundScore = 0;
    document.getElementById('current-' + activePlayer).textContent = roundScore;
    switchPlayer();
  }
}

// Function to hold the current player's score
function hold() {
  scores[activePlayer] += roundScore;
  document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
  if (scores[activePlayer] >= 100) {
    document.getElementById('name-' + activePlayer).textContent = 'Winner!';
    document.getElementById('player-' + activePlayer + '-panel').classList.add('winner');
    document.getElementById('player-' + activePlayer + '-panel').classList.remove('active');
    document.getElementById('btn-roll').disabled = true;
    document.getElementById('btn-hold').disabled = true;
  } else {
    switchPlayer();
  }
  roundScore = 0;
  document.getElementById('current-' + activePlayer).textContent = roundScore;
}

// Function to initialize the game
function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.getElementById('player-0-panel').classList.remove('winner');
  document.getElementById('player-1-panel').classList.remove('winner');
  document.getElementById('player-0-panel').classList.remove('active');
  document.getElementById('player-1-panel').classList.remove('active');
  document.getElementById('player-0-panel').classList.add('active');
  document.getElementById('btn-roll').disabled = false;
  document.getElementById('btn-hold').disabled = false;
}

// Event listener for the roll button
document.getElementById('btn-roll').addEventListener('click', function() {
  dice = rollDice();
  var diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'block';
  diceDOM.src = 'dice-' + dice + '.png';
  updateRoundScore();
});

// Event listener for the hold button
document.getElementById('btn-hold').addEventListener('click', hold);

// Event listener for the new game button
document.getElementById('btn-new').addEventListener('click', init);

// Initialize the game
init();
