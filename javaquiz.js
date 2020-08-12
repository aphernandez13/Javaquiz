var startGameBtn = document.querySelector("#start-game");
var startPrompt = document.querySelector("#start-prompt");
var questionPrompt = document.querySelector("#question-prompt");
var questionText = document.querySelector("#question-text");
var questionOptions = document.querySelector("#question-options");
var timerContainer = document.querySelector(".timer-container");
var timeSpan = document.querySelector("#time");
var questionIndex = 0;
var time = 120;
var timer;
var questions = [
  {
    text: "What is the name of the planet in the Empire Strikes Back where the Rebel Alliance has its base?",
    options: ["Jakku", "Mustafar", "Tatooine", "Hoth"],
    answer: "Ron Weasly",
  },
  {
    text: "What color was Qui-Gon Jinn's lightsaber?",
    options: ["Blue", "Green", "Red", "Purple"],
    answer: "Green",
  },
  {
    text: "What day of the Year is known by fans as Star Wars Day?",
    options: ["March 14", "July 4", "May 4", "February 14"],
    answer: "May 4",
  },
  {
    text:
      "What s the name of the bounty hunter who captured Han Solo in The Empire Strikes Back?",
    options: ["Mandalorian", "Jar Jar Fett", "Boba Fett", "Jango Fett"],
    answer: "Boba Fett",
  },
  {
    text: "Jar Jar Binks belongs to what species?",
    options: ["Zabraks", "Gungans", "Jawas", "Ewoks"],
    answer: "Gungans",
  },
];
function startTimer() {
  timerContainer.style.display = "block";
  timeSpan.textContent = time;
  timer = setInterval(function () {
    time--;
    timeSpan.textContent = time;
    if (time === 0) {
      endGame();
    }
  }, 1000);
}
function endGame() {
  alert("Game over!!");
  clearInterval(timer);
}
startGameBtn.addEventListener("click", function (e) {
  startPrompt.style.display = "none";
  questionPrompt.style.display = "block";
  startTimer();
  renderQuestion();
});
function renderQuestion() {
  var question = questions[questionIndex];
  questionText.textContent = question.text;
  questionOptions.innerHTML = "";
  for (var i = 0; i < question.options.length; i++) {
    var btn = document.createElement("button");
    btn.setAttribute("class", "btn btn-info question-option");
    btn.setAttribute("value", question.options[i]);
    btn.textContent = question.options[i];
    questionOptions.append(btn);
  }
}
document.body.addEventListener("click", function (e) {
  if (!e.target.matches(".question-option")) return;
  var value = e.target.value;
  if (questions[questionIndex].answer === value) {
    console.log("Correct!");
  } else {
    console.log("Ooops! You were wrong.");
    time -= 10;
    timeSpan.textContent = time;
  }
  questionIndex++;
  if (questionIndex === questions.length) {
    endGame();
  } else {
    renderQuestion();
  }
});
