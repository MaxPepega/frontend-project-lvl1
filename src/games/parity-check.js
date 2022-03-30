import { getRandomInt, gamesEngine } from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const even = (number) => number % 2 === 0;

function value() {
  const number = getRandomInt(1, 100);
  const question = String(number);
  const correctAnswer = even(number) ? 'yes' : 'no';
  return { question, correctAnswer };
}

export default () => gamesEngine(rules, value);
