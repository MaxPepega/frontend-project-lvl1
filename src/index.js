import readLineSync from 'readline-sync';

function getRandomInt(min, max) {
  // eslint-disable-next-line no-param-reassign
  min = Math.ceil(min);
  // eslint-disable-next-line no-param-reassign
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
function amountRound() {
  const gameRound = 3;
  return gameRound;
}
function getRandomSymbol() {
  const symbol = ['+', '-', '*'];
  const rnd = Math.floor(Math.random() * 3);
  return symbol[rnd];
}
const conteinerName = {};
function askName() {
  console.log('Welcome to the Brain Games!');
  const name = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  conteinerName.named = name;
  return name;
}
function correctAnsw() {
  console.log('Correct!');
}
function unCorrectAnsw(yourAnsw, trueAnsw) {
  const myName = conteinerName.named;
  console.log(`"${yourAnsw}" is wrong answer ;(. Correct answer was "${trueAnsw}".`);
  console.log(`Let's try again, ${myName}!`);
}
function Congratulations() {
  console.log(`Congratulations, ${conteinerName.named}!`);
}
function determinantNOD(a, b) {
  let gcd;
  while (a !== b) {
    if (a > b) {
      // eslint-disable-next-line no-param-reassign
      a -= b;
    } else {
      // eslint-disable-next-line no-param-reassign
      b -= a;
    }
  }
  // eslint-disable-next-line prefer-const
  gcd = a;
  return gcd;
}
function arrayConstruct() {
  const Array = [];
  const lengthProgession = getRandomInt(6, 10);
  const firstNumber = getRandomInt(1, 100);
  const stepProgression = getRandomInt(1, 10);
  Array[0] = firstNumber;
  for (let i = 1; i <= lengthProgession; i += 1) {
    Array[i] = Array[i - 1] + stepProgression;
  }
  return Array;
}

export {
  askName, getRandomInt, getRandomSymbol, correctAnsw, unCorrectAnsw, Congratulations,
  determinantNOD, amountRound, arrayConstruct,
};
