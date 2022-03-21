import readLineSync from 'readline-sync';
import { getRandomInt, askName } from '../src/index.js';

function prime() {
  console.log('Welcome to the Brain Games!');
  const name = askName();
  const round = 3;
  console.log('Answer "yes" if given number is prime. Otherwise answer "no"');
  for (let i = 1; i <= round; i += 1) {
    const randomNumber = getRandomInt(1, 100);
    let flag = true;
    for (let j = 2; j <= randomNumber / 2; j += 1) {
      if (randomNumber % j === 0) {
        flag = false;
        break;
      }
    }
    console.log(`Question: ${randomNumber}`);
    const answ = readLineSync.question('Your answer: ');
    if (answ === 'yes' && flag === true) {
      console.log('Correct!');
    } else if (answ === 'no' && flag === false) {
      console.log('Correct!');
    } else if (answ === 'yes' && flag === false) {
      console.log('"yes" is wrong answer ;(. Correct answer was "no"');
      console.log(`Let's try again, ${name}!`);
      return;
    } else if (answ === 'no' && flag === true) {
      console.log('"no" is wrong answer ;(. Correct answer was "yes"');
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}
export default prime;
