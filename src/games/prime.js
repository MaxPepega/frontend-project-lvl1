import gamesEngine from '../index.js';
import getRandomInt from '../utils.js';

const rule = 'Answer "yes" if the number is prime, otherwise answer "no".';

const prime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const getGameResult = () => {
  const number = getRandomInt(1, 100);
  const question = String(number);
  const correctAnswer = prime(number) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => gamesEngine(rule, getGameResult);
