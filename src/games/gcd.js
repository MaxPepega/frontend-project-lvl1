import { gamesEngine, getRandomInt } from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getGCD = (operand1, operand2) => (
  (operand1 % operand2) ? getGCD(operand2, operand1 % operand2) : Math.abs(operand2)
);

function value() {
  const number1 = getRandomInt(1, 100);
  const number2 = getRandomInt(1, 100);
  const question = (`${number1} ${number2}`);
  const correctAnswer = String(getGCD(number1, number2));
  return { question, correctAnswer };
}
export default () => gamesEngine(rules, value);
