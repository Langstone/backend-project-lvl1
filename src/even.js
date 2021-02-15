const readlineSync = require('readline-sync');

function evenGame(userName) {
  const numRandom = Math.floor(Math.random() * 11);

  const trueAnswer = (num) => {
    if (num % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };

  const numberIsEven = readlineSync.question(`Question: ${numRandom} `, {
    trueValue: [trueAnswer(numRandom)],
    falseValue: [!trueAnswer(numRandom)],
  });
  if (numberIsEven === true) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${numberIsEven}' is wrong answer ;(. Correct answer was '${trueAnswer(numRandom)}'. Let's try again, ${userName}!`);
  return false;
}

module.exports = evenGame;
