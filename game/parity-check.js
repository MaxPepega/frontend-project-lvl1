import readLineSync from 'readline-sync';
import { getRandomInt, askName } from '../src/index.js';

const parityCheck = () => {
  console.log('Welcome to the Brain Games!');
  const userName = askName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const round = 3;
  for (let i = 1; i <= round; i += 1) {
    const number = getRandomInt(1, 100);
    console.log(`Question: ${number}`);
    const Answer = readLineSync.question('Your answer: ');
    if (number % 2 === 0) {
      if (Answer === 'yes') {
        console.log('Correct!');
      } else {
        console.log('"yes" is wrong answer ;(. Correct answer was "no".');
        console.log(`Let's try again, ${userName}`);
        return;
      }
    }
    if (number % 2 !== 0) {
      if (Answer === 'no') {
        console.log('Correct!');
      } else {
        console.log('"yes" is wrong answer ;(. Correct answer was "no".');
        console.log(`Let's try again, ${userName}`);
        return;
      }
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default parityCheck;
