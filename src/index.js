import readLineSync from 'readline-sync';

const gamesEngine = (rule, getGameResult) => {
  console.log('Welcome to the Brain Games!');
  const name = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  const round = 3;
  console.log(`${rule}`);

  for (let i = 1; i <= round; i += 1) {
    const { question, correctAnswer } = getGameResult();
    console.log(`Question: ${question}`);
    const answer = readLineSync.question('Your answer: ');

    if (answer !== correctAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};
export default gamesEngine;
