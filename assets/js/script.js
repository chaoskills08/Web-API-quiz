var questions = document.querySelector("#questions");
var timerElement = document.querySelector(".timer");
var startButton = document.querySelector(".start-button");
var answersDiv = document.querySelector("#answers");
var qContainer = document.querySelector(".questionContainer");
var welcome = document.querySelector("#welcome");
var endText = document.querySelector("#endText");
var quesText = document.querySelector("#questionText");
var saveButton = document.querySelector("#save-button");
var index = 0;
var score;
var timer;
var timerCount;
var chosenQuestion = [];

var questions = [
  { text: "What defines the initial, basic structure of a webpage?", answers: [{ name: "CSS", value: false }, { name: "Javascript", value: false }, { name: "HTML", value: true }, { name: "C++", value: false }] },
  { text: "What does DOM stand for?", answers: [{ name: "Document Object Model", value: true }, { name: "Data Orientation Manager", value: false }, { name: "Danger Overload Method", value: false }, { name: "Dub On Butt", value: false }] },
  { text: "Question 3", answers: [{ name: "CSS", value: false }, { name: "Javascript", value: false }, { name: "HTML", value: true }, { name: "C++", value: false }] },
  { text: "Question 4", answers: [{ name: "Document Object Model", value: true }, { name: "Data Orientation Manager", value: false }, { name: "Danger Overload Method", value: false }, { name: "Dub On Butt", value: false }] },
  { text: "Question 5", answers: [{ name: "CSS", value: false }, { name: "Javascript", value: false }, { name: "HTML", value: true }, { name: "C++", value: false }] },
  { text: "Question 6", answers: [{ name: "Document Object Model", value: true }, { name: "Data Orientation Manager", value: false }, { name: "Danger Overload Method", value: false }, { name: "Dub On Butt", value: false }] },
  { text: "Question 7", answers: [{ name: "CSS", value: false }, { name: "Javascript", value: false }, { name: "HTML", value: true }, { name: "C++", value: false }] },
  { text: "Question 8", answers: [{ name: "Document Object Model", value: true }, { name: "Data Orientation Manager", value: false }, { name: "Danger Overload Method", value: false }, { name: "Dub On Butt", value: false }] },
  { text: "Question 9", answers: [{ name: "CSS", value: false }, { name: "Javascript", value: false }, { name: "HTML", value: true }, { name: "C++", value: false }] },
  { text: "Question 10", answers: [{ name: "Document Object Model", value: true }, { name: "Data Orientation Manager", value: false }, { name: "Danger Overload Method", value: false }, { name: "Dub On Butt", value: false }] },
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
}
// send to high score page
function renderLastRegistered() {
  // const uName = localStorage.getItem("fname");
  // const timeScore = localStorage.getItem("timeScore");
}

saveButton.addEventListener("click", function (event) {
  event.preventDefault();

  var userInfo = document.querySelector("#player").value;
  var score = document.querySelector("#timeScore").innerHTML;
  localStorage.setItem("initials", userInfo);
  localStorage.setItem("score", score);
  renderLastRegistered()
});


startButton.addEventListener("click", startGame);
