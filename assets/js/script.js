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