const readlineSync = require('readline-sync');

const evenGame = require('./even');
const calcGame = require('./calc');
const gcdGame = require('./gcd');
const progressionGame = require('./progression');
const primeGame = require('./prime');

function runGame(name) {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  let game;
  if (name === 'even') {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    game = evenGame;
  } else if (name === 'calc') {
    console.log('What is the result of the expression?');
    game = calcGame;
  } else if (name === 'gcd') {
    console.log('Find the greatest common divisor of given numbers.');
    game = gcdGame;
  } else if (name === 'progression') {
    console.log('What number is missing in the progression?');
    game = progressionGame;
  } else if (name === 'prime') {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    game = primeGame;
  }

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 3; i++) {
    const result = game(userName);
    if (!result) {
      process.exit();
    }
  }
  console.log(`Congratulations, ${userName}`);
}

module.exports = runGame;
