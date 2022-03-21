import readLineSync from 'readline-sync';
import { getRandomInt, askName } from '../src/index.js';

export function gcd() {
  console.log('Welcome to the Brain Games!');
  const name = askName();
  const round = 3;
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 1; i <= round; i += 1) {
    const number1 = getRandomInt(1, 10);
    const number2 = getRandomInt(1, 10);
    console.log(`Question: ${number1} ${number2}`);
    let trueAnsw = 0;
    // eslint-disable-next-line no-use-before-define
    trueAnsw = determinantNOD(number1, number2);
    const yourAnsw = readLineSync.question('Your anwer: ');
    // eslint-disable-next-line eqeqeq
    if (yourAnsw == trueAnsw) {
      console.log('Correct!');
    } else {
      console.log(` ${yourAnsw} is wrong answer ;(. Correct answer was ${trueAnsw}`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulation, ${name}!`);
}
function determinantNOD() {
  // eslint-disable-next-line no-var
  var x = arguments[0];
  let i;
  for (i = 1; i < arguments.length; i += 1) {
    // eslint-disable-next-line prefer-rest-params
    let y = arguments[i];
    while (x && y) {
      // eslint-disable-next-line no-unused-expressions
      x > y ? x %= y : y %= x;
    }
    x += y;
  }
  return x;
}

export default gcd;
