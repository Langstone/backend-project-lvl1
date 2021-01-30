const readlineSync = require('readline-sync');

const evenGame = require('./even');
const calcGame = require('./calc');

function runGame(name) {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);

  let game;
  if (name === 'even') {
    game = evenGame;
  } else if (name === 'calc') {
    game = calcGame;
  }

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 3; i++) {
    const result = game(userName);
    if (!result) {
      process.exit();
    }
  }
  console.log(`Congratulations ${userName}`);
}

module.exports = runGame;
