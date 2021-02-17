import { question } from 'readline-sync';

function gcdGame(userName) {
  const numbers = [5, 10, 15, 25, 50, 100];
  const number1 = numbers[Math.floor(Math.random() * numbers.length)];
  const number2 = numbers[Math.floor(Math.random() * numbers.length)];

  function NOD(x, y) {
    if (y > x) return NOD(y, x);
    if (!y) return x;
    return NOD(y, x % y);
  }
  const questionResult = question(`Question: ${number1} ${number2} `, {
    trueValue: [NOD(number1, number2)],
  });
  let result;
  if (questionResult === true) {
    result = NOD(number1, number2);
    console.log(`Your answer: ${result}`);
    console.log('Correct!');
    return true;
  }
  console.log(`'${questionResult}' is wrong answer ;(. Correct answer was '${NOD(number1, number2)}'. Let's try again, ${userName}!)`);
  return false;
}
export default gcdGame;
