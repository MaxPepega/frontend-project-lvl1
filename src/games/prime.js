import readLineSync from 'readline-sync';
import {
  getRandomInt, askName, correctAnsw, Congratulations, unCorrectAnsw, amountRound,
} from '../index.js';

function prime() {
  askName();
  const round = amountRound();
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
    const yourAnsw = readLineSync.question('Your answer: ');
    let trueAnsw = 'no';
    const fakeYes = 'yes';
    if (yourAnsw === 'yes' && flag === true) {
      correctAnsw();
    } else if (yourAnsw === 'no' && flag === false) {
      correctAnsw();
    } else if (yourAnsw === 'yes' && flag === false) {
      unCorrectAnsw(yourAnsw, trueAnsw);
      return;
    } else if (yourAnsw === 'no' && flag === true) {
      trueAnsw = fakeYes;
      unCorrectAnsw(yourAnsw, trueAnsw);
      return;
    }
  }
  Congratulations();
}
export default prime;
