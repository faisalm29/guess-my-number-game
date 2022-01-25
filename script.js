"use strict";
const checkBtn = document.querySelector(".check");
const play = document.querySelector(".play");
const mysteryNumber = document.querySelector(".number");
const body = document.querySelector("body");
const highscore = document.querySelector(".highscore");
const currentScore = document.querySelector(".current-score");

let randomNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let currentHighScore = 0;

function displayMessage(message) {
  document.querySelector(".guess").textContent = message;
}

checkBtn.addEventListener("click", function () {
  let answer = Number(document.querySelector("#answer").value);
  console.log(answer);

  if (score > 1) {
    if (!answer) {
      displayMessage("⛔ No Number!");
    } else if (answer === randomNumber) {
      displayMessage("🎉 Correct Number!");
      body.style.backgroundColor = "#60b347";
      mysteryNumber.textContent = answer;
      checkBtn.disabled = true;
      checkBtn.style.cursor = "not-allowed";
      if (score > currentHighScore) {
        currentHighScore = score;
        highscore.textContent = currentHighScore;
      }
    } else if (
      answer !== randomNumber &&
      answer > randomNumber &&
      answer <= 20
    ) {
      displayMessage("📈 Too High!");
      score--;
      document.querySelector(".current-score").textContent = score;
    } else if (
      answer !== randomNumber &&
      answer < randomNumber &&
      answer >= 1
    ) {
      displayMessage("📉 Too Low!");
      score--;
      document.querySelector(".current-score").textContent = score;
    } else {
      displayMessage("⚠ Choose between 1 and 20");
    }
  } else {
    displayMessage("💥 You lost the game!");
    currentScore.textContent = 0;
  }
});

play.addEventListener("click", function () {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20 + 1);
  displayMessage("Start guessing...");
  currentScore.textContent = score;
  mysteryNumber.textContent = "?";
  document.querySelector("#answer").value = "";
  checkBtn.disabled = false;
  checkBtn.style.cursor = "pointer";
  body.style.backgroundColor = "#222";
});
