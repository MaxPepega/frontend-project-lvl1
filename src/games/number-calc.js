import { getRandomInt, gamesEngine } from '../index.js';

const rules = 'What is the result of the expression?';

function calc(number1, number2, operator) {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error('Operator not supported');
  }
}
function getRandomSymbol() {
  const symbol = ['+', '-', '*'];
  const rnd = Math.floor(Math.random() * 3);
  return symbol[rnd];
}

function value() {
  const operator = getRandomSymbol();
  console.log(operator);
  const number1 = getRandomInt(1, 100);
  const number2 = getRandomInt(1, 100);
  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = String(calc(number1, number2, operator));
  return { question, correctAnswer };
}

export default () => gamesEngine(rules, value);
