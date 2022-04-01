import gamesEngine from '../index.js';
import getRandomInt from '../utils.js';

const rule = 'Find the greatest common divisor of given numbers.';

const getGCD = (operand1, operand2) => (
  (operand1 % operand2) ? getGCD(operand2, operand1 % operand2) : Math.abs(operand2)
);

const getGameResult = () => {
  const number1 = getRandomInt(1, 100);
  const number2 = getRandomInt(1, 100);
  const question = (`${number1} ${number2}`);
  const correctAnswer = String(getGCD(number1, number2));
  return { question, correctAnswer };
};
export default () => gamesEngine(rule, getGameResult);
