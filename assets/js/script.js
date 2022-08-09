var questions = document.querySelector("#questions");
var timerElement = document.querySelector(".timer");
var startButton = document.querySelector(".start-button");
var answersDiv = document.querySelector("#answers");
var qContainer = document.querySelector(".questionContainer");
var welcome = document.querySelector("#welcome");
var endText = document.querySelector("#endText");
var quesText = document.querySelector("#questionText");
var index = 0;
var score;
var timer;
var timerCount;
var chosenQuestion = [];

var questions = [
  { text: "What defines the initial, basic structure of a webpage?", answers: [{ name: "CSS", value: false }, { name: "Javascript", value: false }, { name: "HTML", value: true }, { name: "C++", value: false }] },
  { text: "What does DOM stand for?", answers: [{ name: "Document Object Model", value: true }, { name: "Data Orientation Manager", value: false }, { name: "Danger Overload Method", value: false }, { name: "Dub On Butt", value: false }] },
  { text: "What defines the initial, basic structure of a webpage?", answers: [{ name: "CSS", value: false }, { name: "Javascript", value: false }, { name: "HTML", value: true }, { name: "C++", value: false }] },
  { text: "What does DOM stand for?", answers: [{ name: "Document Object Model", value: true }, { name: "Data Orientation Manager", value: false }, { name: "Danger Overload Method", value: false }, { name: "Dub On Butt", value: false }] },
  { text: "What defines the initial, basic structure of a webpage?", answers: [{ name: "CSS", value: false }, { name: "Javascript", value: false }, { name: "HTML", value: true }, { name: "C++", value: false }] },
  { text: "What does DOM stand for?", answers: [{ name: "Document Object Model", value: true }, { name: "Data Orientation Manager", value: false }, { name: "Danger Overload Method", value: false }, { name: "Dub On Butt", value: false }] },
  { text: "What defines the initial, basic structure of a webpage?", answers: [{ name: "CSS", value: false }, { name: "Javascript", value: false }, { name: "HTML", value: true }, { name: "C++", value: false }] },
  { text: "What does DOM stand for?", answers: [{ name: "Document Object Model", value: true }, { name: "Data Orientation Manager", value: false }, { name: "Danger Overload Method", value: false }, { name: "Dub On Butt", value: false }] },
  { text: "What defines the initial, basic structure of a webpage?", answers: [{ name: "CSS", value: false }, { name: "Javascript", value: false }, { name: "HTML", value: true }, { name: "C++", value: false }] },
  { text: "What does DOM stand for?", answers: [{ name: "Document Object Model", value: true }, { name: "Data Orientation Manager", value: false }, { name: "Danger Overload Method", value: false }, { name: "Dub On Butt", value: false }] },
]

function startGame() {
  timerCount = 60;
  qContainer.classList.remove("hide");
  welcome.classList.add("hide");
  startButton.classList.add("hide");
  startTimer()
  renderQuestions()
}

function loseGame() {
  wordBlank.textContent = "Game over!";
  loseCounter++
  startButton.disabled = false;
  setLosses()
}

function startTimer() {
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount <= 0) {
      endGame()
    }
  }, 1000);
}
var index = 0

function renderQuestions() {
  document.getElementById("questions").innerHTML = questions[index].text;
  answersDiv.innerHTML = '';
  questions[index].answers.forEach(answer => {
    var button = document.createElement("button")
    button.setAttribute("data-value", answer.value)
    button.textContent = answer.name
    answersDiv.appendChild(button)
    button.onclick = function (event) {
      var guess = event.target.dataset.value
      console.log(guess);
      if (guess === "true") {
        console.log("correct");
      } else {
        console.log("Incorrect");
        timerCount -= 5
      }
      index++
      if (questions.length > index) {
        renderQuestions()
      } else {
        endGame()
      }
    }
  });
}

function endGame() {
  clearInterval(timer);
  qContainer.classList.add("hide");
  endText.classList.remove("hide");
  // display form

  // submit form event click, grab score and user input, save to storage
  // send to high score page
  // grab localstorage
  // play again button
}

startButton.addEventListener("click", startGame);
