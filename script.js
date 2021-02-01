"use strict";

let checkNumber = document.querySelector("#checkNumber");
let questionMark = document.querySelector("#question");
let btnCheck = document.querySelector("#btn-check");
let guessing = document.querySelector("#guessing");
let score = document.querySelector("#score");
let highScoreId = document.querySelector("#high-score");
let again = document.querySelector("#again");

let randomNumber = Math.floor(Math.random() * 20);
let scoreNumber = 20;
let highScore = 0;

document.addEventListener(
  "DOMContentLoaded",
  function () {
    checkNumber.onchange = check;
  },
  false
);

function check(event) {
  if (event.target.value > 20 || event.target.value < 0) {
    alert("Please pick between 0 and 20");
  }
  if (event.target.value == randomNumber) {
    guessing.textContent = "Correct!";
    questionMark.style.color = "green";
    document.body.style.backgroundColor = "green";
    checkNumber.style.backgroundColor = "green";
    questionMark.textContent = randomNumber;
  }
  if (event.target.value < randomNumber) {
    guessing.textContent = "Too low";
  } else if (event.target.value > randomNumber) {
    guessing.textContent = "Too high";
  }
}

btnCheck.addEventListener("click", function () {
  if (guessing.textContent === "Correct!") {
    score.textContent = "Score : " + scoreNumber;
    highScore = scoreNumber;
    if (scoreNumber > highScore) {
      highScore = scoreNumber;
    }
  } else scoreNumber--;
  score.textContent = "Score : " + scoreNumber;
  highScoreId.textContent = "High Score : " + highScore;
});

again.addEventListener("click", function () {
  randomNumber = Math.floor(Math.random() * 20);
  guessing.textContent = "Start guessing...";
  questionMark.textContent = "?";
  questionMark.style.color = "#222";
  document.body.style.backgroundColor = "#222";
  score.textContent = "Score : " + 20;
  checkNumber.style.backgroundColor = "#222";
});
