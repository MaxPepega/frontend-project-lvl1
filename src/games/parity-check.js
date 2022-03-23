import readLineSync from 'readline-sync';
import {
  getRandomInt, askName, correctAnsw, unCorrectAnsw, Congratulations,
} from '../index.js';

const parityCheck = () => {
  askName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const round = 3;
  for (let i = 1; i <= round; i += 1) {
    const number = getRandomInt(1, 100);
    console.log(`Question: ${number}`);
    const Answer = readLineSync.question('Your answer: ');
    if (number % 2 === 0) {
      if (Answer === 'yes') {
        correctAnsw();
      } else {
        unCorrectAnsw();
        return;
      }
    }
    if (number % 2 !== 0) {
      if (Answer === 'no') {
        correctAnsw();
      } else {
        unCorrectAnsw();
        return;
      }
    }
  }
  Congratulations();
};
export default parityCheck;
