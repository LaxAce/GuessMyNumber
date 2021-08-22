'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 45;

console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

// Writting functions to refactor my code
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const backgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};
const scoreBoard = function (score) {
  document.querySelector('.score').textContent = score;
};

// Actions for clicking on Again button
document.querySelector('.again').addEventListener('click', function () {
  backgroundColor('#222');
  document.querySelector('.number').textContent = '?';
  scoreBoard(20);
  score = 20;
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.number').style.width = '15rem';
});

// Actions for clicking on Check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  //   When there is no input
  if (!guess) {
    displayMessage('⛔ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    backgroundColor('#60b347');
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      scoreBoard(score);
    } else {
      displayMessage('👅 You lost the game!');
      scoreBoard(0);
      backgroundColor('red');
    }
  }
});
// When the guess is higher
// else if (guess > secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = '📈 Too high!';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = '👅 You lost the game!';
//     document.querySelector('.score').textContent = score = 0;
//     document.querySelector('body').style.backgroundColor = 'red';
//   }

// When the guess is lower
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📉 Too low!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '👅 You lost the game!';
//       document.querySelector('.score').textContent = score = 0;
//       document.querySelector('body').style.backgroundColor = 'red';
//     }
//   }
// });
