import readLineSync from 'readline-sync';

const askName = () => {
  const name = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};
export default askName;
