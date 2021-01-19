// eslint-disable-next-line no-use-before-define
const readlineSync = require('readline-sync');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const randoNumbers = (min, max) => {
  const randomNumbers = [];
  for (; randomNumbers.length < 5;) {
    const value = Math.floor(Math.random() * (max - min) + +min);
    if (!randomNumbers.includes(value))
    {randomNumbers.push(value);}
  }
  return randomNumbers;
};

const numbers = randoNumbers(1, 100);

const trueAnswer = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const falseAnswer = (num) => {
  if (num % 2 !== 0) {
    return 'yes';
  }
  return 'no';
};

// eslint-disable-next-line no-restricted-syntax
for (const number of numbers) {
  const numberIsEven = readlineSync.question(`Question ${number} `, {
    trueValue: [trueAnswer(number)],
    falseValue: [falseAnswer(number)],
  });
  if (numberIsEven === true) {
    console.log('Correct!');
  } else {
    console.log(`${falseAnswer(number)} is wrong answer ;(. Correct answer was ${trueAnswer(number)}`);
    process.exit();
  }
};

// const numberIsEven1 = readlineSync.question('Question 15 ', {
//   trueValue: ['no'],
//   falseValue: ['yes']
// });
// if (numberIsEven1 === true) {
//   console.log('Correct!');
// } else if (numberIsEven1 === false) {
//   console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.
//   Let's try again, ${userName}!`);
//   process.exit();
// }

// const numberIsEven2 = readlineSync.question('Question 6 ', {
//   trueValue: ['yes'],
//   falseValue: ['no']
// });
// if (numberIsEven2 === true) {
//   console.log('Correct!');
// } else if (numberIsEven2 === false) {
//   console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.
//   Let's try again, ${userName}!`);
//   process.exit();
// }

// const numberIsEven3 = readlineSync.question('Question 7 ', {
//   trueValue: ['no'],
//   falseValue: ['yes']
// });
// if (numberIsEven3 === true) {
//   console.log('Correct!');
// } else if (numberIsEven3 === false) {
//   console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.
//   Let's try again, ${userName}!`);
//   process.exit();
// }
console.log(`Congratulations, ${userName}!`);
