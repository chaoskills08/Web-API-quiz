// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

// Landing page
  // Start button
  // Description of app: welcome to quiz, this is how it works
  // Event listener on start button to begin, listening for clicks
  // When start is clicked, landing page disappears, first question appears  and time appears, begins counting down
  // Need timer that counts down
// Set of questions - array of objects
  // ? What do questions need to include?
  // Question text - string
  // Set of answers - array of strings
  // Check if answer is correct - give string or index of correct answer 
  // ! Check if user is correct - does NOT need to be with other question info
// Need way to display question text, answers, and answers need to be clickable
// When answer is clicked
  // Conpares answer chosen to correct answer (if trues)
  // Displays feedback based on correct or incorrect
  // If answer is incorrect, subtract time from clock
  // Regardless of incorrect or correct, move on to next question, UNLESS user is on final question.
// If user is on last question, once an answer is selected, they are presented with a form to enter their initials 
  //Initials and remaining time is saved to local storage as score
// Game ense when all questions are answered OR timer reaches 0 -- is there a case where timer might go lower than 0?

var questions = {
  { 
    number: "question1",
    question: "What defines the initial, basic structure of a webpage?",
    choices: ["CSS", "JavaScript", "HTML", "C++"],
    answer: "HTML",
  },
  {
    number: "question2",
    question: "What does DOM stand for?",
    choices: ["Document Object Model", "Data Orientation Manager", "Danger Overload Method", "Dune Overthrown by Muad'Dib"],
    answer: "Document Object Model",
  },
  {
    number: "question3",
    question: "What is a variable number within a JavaScript object called?",
    choices: ["Function", "Key", "Method", "Limiter"],
    answer: "Key",
  },
  {
    number: "question4",
    question: "What does most of the styling on a webpage?",
    choices: ["HTML", "jQuery", "JavaScript", "CSS"],
    answer: "CSS",
  },
  {
    number: "question5",
    question: "What is a JavaScript method?",
    choices: ["A style of coding", "An approach to acting", "A function within an object", "A discrete bit of code that performs an action"],
    answer: "A function within an object",
  },
  {
    number: "question6",
    question: "What does it mean to 'call' a function?",
    choices: ["Use the word 'function'", "Define the action the function will take", "Give the function a number as part of its definition", "Activate the function by naming it outside of its definition"],
    answer: "Activate the function by naming it outside of its definition",
  },
  {
    number: "question7",
    question: "Which of the following all use curly brackets {} in JavaScript?",
    choices: ["Variables, arrays, functions", "If/else statements, variables, objects", "Arrays, if/else statements, objects", "Functions, objects, if/else statements"],
    answer: "Functions, objects, if/else statements",
  },
  {
    number: "question8",
    question: "Which of the following uses square brackets [] in JavaScript?",
    choices: ["Objects", "Arrays", "Functions", "Variables"],
    answer: "Arrays",
  },
  {
    number: "question9",
    question: "What is a 'child element'?",
    choices: ["An element that throws an error", "An element contained directly inside of its parent, with no other containing elements in between", "An element with the capacity to learn", "An element that breaks the code"],
    answer: "An element contained directly inside of its parent, with no other containing elements in between",
  },
  {
    number: "question10",
    question: "Which of the following are all examples of HTML tags?",
    choices: ["<p>, <div>, <main>, <header>", "<h1>, <ul>, <contain>, <hero>", "<img>, <start>, <switch>, <table>", "<engage>, <make-it-so>, <override>, <captain>"],
    answer: "<p>, <div>, <main>, <header>",
  }
}