const readlineSync = require('readline-sync');

function progressionGame(userName) {
  const numRandom = Math.floor(Math.random() * 10);

  function makeArray(count, content) {
    const numRandom1 = Math.floor(Math.random() * 5);
    const result = [];
    if (typeof content === 'function') {
      // eslint-disable-next-line no-plusplus
      for (let i = numRandom1; result.length < count; i++) {
        result.push(content(i));
      }
    } else {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < count; i++) {
        result.push(content);
      }
    }
    return result;
  }

  const myArray = makeArray(10, (i) => i * numRandom);

  const randomItem = myArray[Math.floor(Math.random() * myArray.length)];

  const changeItem = myArray.indexOf(randomItem);

  myArray.splice(changeItem, 1, '..');
  const myNewArray = myArray.join(' ');

  const questionResult = readlineSync.question(`Question: ${myNewArray} `, {
    trueValue: [randomItem],
  });
  let result;
  if (questionResult === true) {
    result = randomItem;
    console.log(`Your answer ${result}`);
    console.log('Correct!');
    return true;
  }
  console.log(`'${questionResult}' is wrong answer ;-(. Correct answer was '${randomItem}'. Let's try again, ${userName})`);
  return false;
}
module.exports = progressionGame;
