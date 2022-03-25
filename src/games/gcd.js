import readLineSync from 'readline-sync';
import {
  getRandomInt, askName, correctAnsw, Congratulations, determinantNOD, unCorrectAnsw, amountRound
} from '../index.js';

export function gcd() {
  askName();
  const round = amountRound();
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 1; i <= round; i += 1) {
    const number1 = getRandomInt(1, 100);
    const number2 = getRandomInt(1, 100);
    console.log(`Question: ${number1} ${number2}`);
    let trueAnsw = 0;
    // eslint-disable-next-line no-use-before-define
    trueAnsw = determinantNOD(number1, number2);
    const yourAnsw = readLineSync.question('Your anwer: ');
    // eslint-disable-next-line eqeqeq
    if (yourAnsw == trueAnsw) {
      correctAnsw();
    } else {
      unCorrectAnsw(yourAnsw, trueAnsw);
      return;
    }
  }
  Congratulations();
}

export default gcd;
