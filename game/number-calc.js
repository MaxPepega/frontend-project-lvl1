import readLineSync from 'readline-sync';
import { askName, getRandomInt, getRandomSymbol } from '../src/index.js';

console.log('Welcome to the Brain Games!');
const name = askName();
const numberCalculated = () => {
  console.log('What is the result of the expression?');
  const round = 3;
  for (let i = 1; i <= round; i += 1) {
    const randomSymb = getRandomSymbol();
    const number1 = getRandomInt(1, 100);
    const number2 = getRandomInt(1, 100);
    const Question = `${number1} ${randomSymb} ${number2}`;
    console.log(`Question: ${Question}`);
    const answer = readLineSync.question('Your answer: ');
    let trueAnsw = 0;
    if (randomSymb === '-') {
      trueAnsw = `${number1 - number2}`;
    }
    if (randomSymb === '+') {
      trueAnsw = `${number1 + number2}`;
    }
    if (randomSymb === '*') {
      trueAnsw = `${number1 * number2}`;
    }
    if (trueAnsw === answer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${trueAnsw}`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default numberCalculated;
