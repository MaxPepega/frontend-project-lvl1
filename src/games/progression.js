import { getRandomInt, gamesEngine } from '../index.js';

const rules = 'What number is missing in the progression?';
const lengthProgession = 10;

function arrayConstruct() {
  const Array = [];
  const firstNumber = getRandomInt(1, 100);
  const stepProgression = getRandomInt(1, 10);
  Array[0] = firstNumber;
  for (let i = 1; i <= lengthProgession; i += 1) {
    Array[i] = Array[i - 1] + stepProgression;
  }
  return Array;
}

function value() {
  const progression = arrayConstruct(Array);
  const hidenIndex = getRandomInt(0, lengthProgession - 1);
  const correctAnswer = String(progression[hidenIndex]);
  progression[hidenIndex] = '..';
  const question = progression.join(' ');
  return { question, correctAnswer };
}

export default () => gamesEngine(rules, value);
