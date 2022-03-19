import readLineSync from 'readline-sync';

function getRandomInt(min, max) {
  // eslint-disable-next-line no-param-reassign
  min = Math.ceil(min);
  // eslint-disable-next-line no-param-reassign
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
function getRandomSymbol() {
  const symbol = ['+', '-', '*'];
  const rnd = Math.floor(Math.random() * 3);
  return symbol[rnd];
}

function askName() {
  const name = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}
export { askName, getRandomInt, getRandomSymbol };
