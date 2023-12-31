'use strict';

let audio = new Audio("./tunes/dice.mp3");
let audioClap = new Audio("./tunes/claps.mp3");
let audioHold = new Audio("./tunes/hold.mp3");
let audioNewGame = new Audio("./tunes/newGame.mp3");

const playSound = (key) => {
  audio.play()
};

const playHold = (key) => {
  audioHold.play()
};

const playClap = (key) => {
  audioClap.play()
};

const playNewGame = (key) => {
  audioNewGame.play()
};
// Selecting elements
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');

const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');

const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// Starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  playNewGame();
  
  score0Element.textContent = 0;
  score1Element.textContent = 0;
  current0Element.textContent = 0;
  current1Element.textContent = 0;

   diceElement.classList.add('hidden');
   player0Element.classList.remove('player--winner');
   player1Element.classList.remove('player--winner');
   player0Element.classList.add('player--active');
   player1Element.classList.remove('player--active');
}

init();

const switchPlayer = function () {
   // Switch to next player
   document.getElementById(`current--${activePlayer}`)
           .textContent = 0; // activePlayer = 0
   activePlayer = activePlayer === 0 ? 1 : 0;
   currentScore = 0;
   // Will add the class 'player--active' class if it's not there
   // If it's there it will remove the 'player--active'class
   player0Element.classList.toggle('player--active');
   player1Element.classList.toggle('player--active');
}

// Rolling Dice Functionality
btnRoll.addEventListener('click', function () {
  playSound();
  if (playing) {
    
    // Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
  
    // Display Dice
    diceElement.classList.remove('hidden');
    diceElement.src = `./assets/dice-${dice}.png`;
  
    // Check for rolled 1
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`)
              .textContent = currentScore;
      // current0Element.textContent = currentScore; // Changes Later
    } else {
      switchPlayer();
    }  
  }
});

btnHold.addEventListener('click', function () {
  playNewGame();
  if (playing) {
    // Add current score to active player score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`)
            .textContent = scores[activePlayer];
  
    // Check if the player score is >= 100
    if(scores[activePlayer] >= 10) {
      
      // Finish the game
      playing = false;
      diceElement.classList.add('hidden');
  
      document.querySelector(`.player--${activePlayer}`)
              .classList.add('player--winner');
      
      document.querySelector(`.player--${activePlayer}`)
              .classList.remove('player--active');
    } else {
      // Switch to the next player
      switchPlayer();
    } 
  }
});

btnNew.addEventListener('click', init);



//////////////////////////////////////////sounds


