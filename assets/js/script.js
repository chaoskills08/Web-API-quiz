var questions = document.querySelector("#questions");
var timerElement = document.querySelector(".timer");
var startButton = document.querySelector(".start-button");
var answersDiv = document.querySelector("#answers");
var qContainer = document.querySelector(".questionContainer");
var welcome = document.querySelector("#welcome");
var endText = document.querySelector("#endText");
var quesText = document.querySelector("#questionText");
var saveButton = document.querySelector("#save-button");
var scoreBlock = document.querySelector("#scoreBlock");
var techExp = document.querySelector("#techExp");
var index = 0;
var score;
var timer;
var timerCount;
var chosenQuestion = [];

var questions = [
  { text: "What is the brain of a computer?", answers: [{ name: "RAM", value: false }, { name: "Liquid cooler", value: false }, { name: "CPU", value: true }, { name: "GPU", value: false }] },
  { text: "What actuates the key press on a mechanical keyboard?", answers: [{ name: "Switch", value: true }, { name: "Keycap", value: false }, { name: "Case", value: false }, { name: "RGB", value: false }] },
  { text: "Which component does the video processing in a computer?", answers: [{ name: "CPU", value: false }, { name: "Video card", value: true }, { name: "Power button", value: false }, { name: "Power supply", value: false }] },
  { text: "Which of these USB types is reversible?", answers: [{ name: "Type-C", value: true }, { name: "Mini-B", value: false }, { name: "Type A", value: false }, { name: "Micro-B", value: false }] },
]
function startGame() {
  timerCount = 60;
  qContainer.classList.remove("hide");
  welcome.classList.add("hide");
  startButton.classList.add("hide");
  scoreBlock.classList.remove("hide");
  techExp.classList.add("hide");
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

saveButton.addEventListener("click", function (event) {
  event.preventDefault();

  var userInfo = document.querySelector("#player").value;
  var score = document.querySelector("#timeScore").innerHTML;
  localStorage.setItem("initials", userInfo);
  localStorage.setItem("score", score);
});

startButton.addEventListener("click", startGame);