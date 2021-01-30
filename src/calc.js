const readlineSync = require('readline-sync');
// Wait for user's response.
// eslint-disable-next-line consistent-return
function calcGame(userName) {
  const numRandom1 = Math.floor(Math.random() * 11);
  const numRandom2 = Math.floor(Math.random() * 11);

  const operations = ['+', '-', 'x', '/'];

  const randomKey = operations[Math.floor(Math.random() * operations.length)];

  // eslint-disable-next-line import/no-mutable-exports
  let trueResult;
  // eslint-disable-next-line default-case
  switch (randomKey) {
    case '+':
      trueResult = numRandom1 + numRandom2;
      break;
    case '-':
      trueResult = numRandom1 - numRandom2;
      break;
    case 'x':
      trueResult = numRandom1 * numRandom2;
      break;
    case '/':
      trueResult = numRandom1 / numRandom2;
      break;
  }
  console.log('What is the result of the expression?');
  const result = readlineSync.question(`Question: ${numRandom1} ${randomKey} ${numRandom2} `, {
    trueValue: [trueResult],
  });
  console.log(`You answer ${result}`);
  if (result === true) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${result}' is wrong answer ;-(. Correct answer was '${trueResult}'. Let's try again, ${userName}`);
}
module.exports = calcGame;
