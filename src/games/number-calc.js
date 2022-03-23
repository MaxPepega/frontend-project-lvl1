import readLineSync from 'readline-sync';
import {
  askName, getRandomInt, getRandomSymbol, correctAnsw, Congratulations, unCorrectAnsw, amountRound,
} from '../index.js';

const numberCalculated = () => {
  askName();
  console.log('What is the result of the expression?');
  const round = amountRound();
  for (let i = 1; i <= round; i += 1) {
    const randomSymb = getRandomSymbol();
    const number1 = getRandomInt(1, 100);
    const number2 = getRandomInt(1, 100);
    const Question = `${number1} ${randomSymb} ${number2}`;
    console.log(`Question: ${Question}`);
    const yourAnsw = readLineSync.question('Your answer: ');
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
    if (trueAnsw === yourAnsw) {
      correctAnsw();
    } else {
      unCorrectAnsw(yourAnsw, trueAnsw);
      return;
    }
  }
  Congratulations();
};

export default numberCalculated;
