const readlineSync = require('readline-sync');

function primeGame(userName) {
  const numRandom = Math.floor(Math.random() * 10);
  const trueAnswer = (num) => {
    if (num === 0 || num === 1) {
      return 'no';
    } if (num <= 3) {
      return 'yes';
    } if (num % 2 === 0 || num % 3 === 0) {
      return 'no';
    }
    return 'yes';
  };

  const questionResult = readlineSync.question(`Question: ${numRandom} `, {
    trueValue: [trueAnswer(numRandom)],
  });
  if (questionResult === true) {
    console.log(`Your answer ${trueAnswer(numRandom)}`);
    console.log('Correct!');
    return true;
  }
  console.log(`Let's try again, ${userName})!`);
  return false;
}

module.exports = primeGame;
