import { getRandomInt, gamesEngine } from '../index.js';

const rules = 'Answer "yes" if the number is prime, otherwise answer "no".';

function prime(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function value() {
  const number = getRandomInt(1, 100);
  const question = String(number);
  const correctAnswer = prime(number) ? 'yes' : 'no';
  return { question, correctAnswer };
}

export default () => gamesEngine(rules, value);
