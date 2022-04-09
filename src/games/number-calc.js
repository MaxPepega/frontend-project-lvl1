import gamesEngine from '../index.js';
import getRandomInt from '../utils.js';

const rule = 'What is the result of the expression?';

const calc = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`This operator "${operator}" is not supported:(`);
  }
};

const getGameResult = () => {
  const symbols = ['+', '-', '*'];
  const randomize = getRandomInt(0, symbols.length - 1);
  const operator = symbols[randomize];
  const number1 = getRandomInt(1, 100);
  const number2 = getRandomInt(1, 100);
  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = String(calc(number1, number2, operator));
  return { question, correctAnswer };
};

export default () => gamesEngine(rule, getGameResult);
