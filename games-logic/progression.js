import readLineSync from 'readline-sync';
import { getRandomInt, askName } from '../src/index.js';

function arrayConstruct() {
  const Array = [];
  const lengthProgession = getRandomInt(5, 10);
  const firstNumber = getRandomInt(1, 100);
  const stepProgression = getRandomInt(1, 10);
  Array[0] = firstNumber;
  for (let i = 1; i <= lengthProgession; i += 1) {
    Array[i] = Array[i - 1] + stepProgression;
  }
  return Array;
}
const round = 3;
export function brainProgression() {
  console.log('Welcome to the Brain Games!');
  const name = askName();
  for (let i = 1; i <= round; i += 1) {
    const seriasNum = arrayConstruct();
    const trueSerias = seriasNum.slice();
    const rndNum = getRandomInt(1, 5);
    seriasNum[rndNum] = '..';
    console.log(`Question: ${seriasNum}`);
    seriasNum[rndNum] = Number(readLineSync.question('Your answer: '));
    if (seriasNum[rndNum] === trueSerias[rndNum]) {
      console.log('Correct!');
    } else {
      console.log(`${seriasNum[rndNum]} is wrong answer ;(. Correct answer was ${trueSerias[rndNum]}`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}
export default brainProgression;
