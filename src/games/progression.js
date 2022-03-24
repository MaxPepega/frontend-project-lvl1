import readLineSync from 'readline-sync';
import {
  getRandomInt, askName, arrayConstruct, correctAnsw, Congratulations, unCorrectAnsw, amountRound,
} from '../index.js';

export function brainProgression() {
  askName();
  const round = amountRound();
  for (let i = 1; i <= round; i += 1) {
    const seriasNum = arrayConstruct();
    const trueSerias = seriasNum.slice();
    const rndNum = getRandomInt(1, 5);
    seriasNum[rndNum] = '..';
    console.log(`Question: ${seriasNum.join(' ')}`);
    seriasNum[rndNum] = Number(readLineSync.question('Your answer: '));
    if (seriasNum[rndNum] === trueSerias[rndNum]) {
      correctAnsw();
    } else {
      unCorrectAnsw(seriasNum[rndNum], trueSerias[rndNum]);
      return;
    }
  }
  Congratulations();
}
export default brainProgression;
