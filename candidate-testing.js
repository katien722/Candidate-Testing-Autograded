const input = require('readline-sync');


// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";




// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";




//if (correctAnswers[i] === candidateAnswers[i])

//TODO: Variables for Part 2
let questions = ["Who was the first American woman in space? ", "True or False: 5 kilometers === 5000 meters? ", "(5+3/2*10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45, what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = ["", "", "", "", ""];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("What is your name? ");
  console.log("Hello, " + candidateName + ".");

}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  //candidateAnswer = input.question("Who was the first American woman in space? ");

  for (let i = 0; i < questions.length; i++) {
    candidateAnswers[i] = input.question(`${(i + 1)}) ` + questions[i]);
console.log(`Your Answer: ${candidateAnswers[i]}\nCorrect Answer: ${correctAnswers[i]}`);
  }
}
  function gradeQuiz(candidateAnswers) {

      for (let i = 0; i < questions.length; i++) {
      
        console.log(`Your Answer: ${candidateAnswers[i]}\nCorrect Answer: ${correctAnswers[i]}`);
  }
// for (let i = 0; i === candidateAnswer[i]; i++);
  // console.log(`Your Answer: ${candidateAnswers[i]}\nCorrect Answer: ${correctAnswers[i]}`); 



// function gradeQuiz(candidateAnswers) {

// for (let i = 0; i < questions.length; i++) {

//   console.log(`Your Answer: ${candidateAnswers[i]}\nCorrect Answer: ${correctAnswers[i]}`);


// TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

// I need to add an if/else statement here. If user answer ===Sally Ride, then give "correct" ansewr. IF nElse, try again
//use template literal --to display candidate answer as it corresponds to correct answer. need new conditional for part 3 bust not here

let grade;  //TODO 3.2 use this variable to calculate the candidates score.


return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //

  askQuestion();

  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};