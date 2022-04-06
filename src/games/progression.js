import gamesEngine from '../index.js';
import getRandomInt from '../utils.js';

const rule = 'What number is missing in the progression?';
const lengthProgession = 10;

const arrayConstruct = (stepProgression, firstNumber) => {
  const generatedSetNumber = [];
  generatedSetNumber[0] = firstNumber;
  for (let i = 1; i <= lengthProgession; i += 1) {
    generatedSetNumber[i] = generatedSetNumber[i - 1] + stepProgression;
  }
  return generatedSetNumber;
};

const getGameResult = () => {
  const firstNumber = getRandomInt(1, 100);
  const stepProgression = getRandomInt(1, 10);
  const progression = arrayConstruct(stepProgression, firstNumber);
  const hidenIndex = getRandomInt(0, lengthProgession - 1);
  const correctAnswer = String(progression[hidenIndex]);
  progression[hidenIndex] = '..';
  const question = progression.join(' ');
  return { question, correctAnswer };
};

export default () => gamesEngine(rule, getGameResult);
