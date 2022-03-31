"use strict";

// Selectiing Element
const checkBtn = document.querySelector(".btn-check");
const restartBtn = document.querySelector(".btn-restart");
const difficultyBtns = document.querySelectorAll(".btn-difficulty");
const settingBtn = document.querySelector(".btn-setting");
const closeSettingBtn = document.querySelector(".btn-close-setting");
const settingModal = document.querySelector(".modal-setting");
const mysteryNumber = document.querySelector(".mystery-number");
const highScoreText = document.querySelector(".highscore");
const currentScoreText = document.querySelector(".current-score");
const clueText = document.querySelector(".clue");
const messageText = document.querySelector(".message");
const body = document.querySelector("body");

console.log(difficultyBtns);

class GuessMyNumberGame {
  #mysteryNumber;
  #score;
  #currentHighScore;
  #decreaseScoreBy;
  #mysteryNumberRange;
  constructor() {
    this.#mysteryNumberRange = 0;
    this.#mysteryNumber = 0;
    this.#decreaseScoreBy = 0;
    this.#score = 0;
    this.#currentHighScore = 0;
  }

  set setMysteryNumber(value) {
    this.#mysteryNumber = value;
  }

  set setScore(value) {
    this.#score = value;
  }

  set setCurrentHighScore(value) {
    this.#currentHighScore = value;
  }

  set setDecreaseScoreBy(value) {
    this.#decreaseScoreBy = value;
  }

  set setMysteryNumberRange(value) {
    this.#mysteryNumberRange = value;
  }

  start() {
    this.settingEasy();
    this.setCurrentHighScore = 0;
  }

  restart() {
    this.setScore = 100;
    this.setMysteryNumber = this.randomingMysteryNumber();
    this.displayMessage("Start guessing...");
    currentScoreText.textContent = this.#score;
    mysteryNumber.textContent = "?";
    document.getElementById("answer").value = "";
    body.style.backgroundColor = "#222";
    checkBtn.disabled = false;
    checkBtn.style.cursor = "pointer";
  }

  randomingMysteryNumber() {
    return Math.trunc(Math.random() * this.#mysteryNumberRange + 1);
  }

  displayMessage(message) {
    messageText.textContent = message;
  }

  decreaseScore() {
    this.#score -= this.#decreaseScoreBy;
    currentScoreText.textContent = this.#score;
  }

  changeClue() {
    clueText.textContent = `<Between 1 and ${this.#mysteryNumberRange}>`;
  }

  winState() {
    this.displayMessage("🎉 Correct Number!");
    mysteryNumber.textContent = this.#mysteryNumber;
    body.style.backgroundColor = "#60b347";
    checkBtn.disabled = true;
    checkBtn.style.cursor = "not-allowed";

    // Cek apakah score lebih besar dari highscore, jika iya, jadikan score sebagai highscore
    if (this.#score > this.#currentHighScore) {
      this.setCurrentHighScore = this.#score;
      highScoreText.textContent = this.#currentHighScore;
    }
  }

  loseState() {
    this.displayMessage("💥 You lost the game!");
    currentScoreText.textContent = 0;
    body.style.backgroundColor = "#d7504d";
    checkBtn.style.cursor = "not-allowed";
    mysteryNumber.textContent = this.#mysteryNumber;
  }

  showSetting() {
    settingModal.classList.remove("hidden");
  }

  hiddenSetting() {
    settingModal.classList.add("hidden");
  }

  settingEasy() {
    this.setMysteryNumberRange = 20;
    this.setMysteryNumber = this.randomingMysteryNumber();
    this.setDecreaseScoreBy = 10;
    this.setScore = 100;
    this.changeClue();
    this.hiddenSetting();
  }

  settingMedium() {
    this.setMysteryNumberRange = 50;
    this.setMysteryNumber = this.randomingMysteryNumber();
    this.setDecreaseScoreBy = 10;
    this.setScore = 100;
    this.changeClue();
    this.hiddenSetting();
  }

  settingHard() {
    this.setMysteryNumberRange = 100;
    this.setMysteryNumber = this.randomingMysteryNumber();
    this.setDecreaseScoreBy = 20;
    this.setScore = 100;
    this.changeClue();
    this.hiddenSetting();
  }

  checkMysteryNumber() {
    // Fungsi ini hanya akan berjalan jika score > 1
    if (this.#score > 10) {
      const answerValue = document.getElementById("answer").value;

      // Jika tidak memasukkan nomor di kolom input
      if (!answerValue) {
        this.displayMessage("Insert a number!");
        console.log(answerValue);

        // Cek jawaban
      } else {
        const answer = Number(answerValue);
        console.log(answer);

        // Jika jawaban benar
        if (answer === this.#mysteryNumber) {
          this.winState();

          // Jika jawaban terlalu tinggi
        } else if (
          answer > this.#mysteryNumber &&
          answer < this.#mysteryNumberRange + 1
        ) {
          this.displayMessage("📈 Too high!");
          this.decreaseScore();

          // Jika jawaban terlalu rendah
        } else if (answer < this.#mysteryNumber && answer > 0) {
          this.displayMessage("📉 Too low");
          this.decreaseScore();
          // Jika jawaban melebihi rentang mystery number
        } else {
          this.displayMessage(
            `Guess between 1 to ${this.#mysteryNumberRange}!`
          );
        }
      }
    } else {
      this.loseState();
    }
  }
}

const guessMyNumber = new GuessMyNumberGame();
guessMyNumber.start();
console.log(guessMyNumber);

checkBtn.addEventListener("click", function () {
  guessMyNumber.checkMysteryNumber();
});

restartBtn.addEventListener("click", function () {
  guessMyNumber.restart();
});

settingBtn.addEventListener("click", function () {
  guessMyNumber.showSetting();
});

closeSettingBtn.addEventListener("click", function () {
  guessMyNumber.hiddenSetting();
});

difficultyBtns.forEach((item) => {
  item.addEventListener("click", function () {
    if (this.value === "easy") {
      guessMyNumber.settingEasy();
      guessMyNumber.restart();
      console.log(guessMyNumber);
    } else if (this.value === "medium") {
      guessMyNumber.settingMedium();
      guessMyNumber.restart();
      console.log(guessMyNumber);
    } else if (this.value === "hard") {
      guessMyNumber.settingHard();
      guessMyNumber.restart();
      console.log(guessMyNumber);
    }
  });
});
