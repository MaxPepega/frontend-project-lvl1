import gamesEngine from '../index.js';
import getRandomInt from '../utils.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const getEvenNumber = (number) => number % 2 === 0;

const getGameResult = () => {
  const number = getRandomInt(1, 100);
  const question = String(number);
  const correctAnswer = getEvenNumber(number) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => gamesEngine(rule, getGameResult);
