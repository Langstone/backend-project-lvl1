import { question } from 'readline-sync';

import evenGame from './even.js';
import calcGame from './calc.js';
import gcdGame from './gcd.js';
import progressionGame from './progression.js';
import primeGame from './prime.js';

// eslint-disable-next-line import/prefer-default-export
export function runGame(name) {
  console.log('Welcome to the Brain Games!');
  const userName = question('May I have your name? ');
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
  } else if (name === 'brain') {
    process.exit();
  }

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 3; i++) {
    const result = game(userName);
    if (!result) {
      process.exit();
    }
  }
  console.log(`Congratulations, ${userName}!`);
}
