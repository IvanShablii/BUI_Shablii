/**
 * TASK-01 [Іван]
 *
 * Написати гру "Повторюха".
 *
 * Гравець перед собою бачить поле 5 на 5 квадратів.
 * На кожному квадраті випадковим чином відображається цифра від 1 до 25 без повторень.
 *
 * Після кліку по кнопці "Старт", гра має згенерувати комбінацію  5-ти цифр, та підсвітити їх по черзі.
 * Після цього гравець повинен повторити комбінацію в тому ж порядку.
 *
 * Якщо комбінацію повторено не вірно - вивести повідомлення про помилку.
 */

// http://127.0.0.1:5500/_js/4-july/02-07-2023/index-01.html

/* Питання 
- після того як ми підсвітили 5 цифр ми необмежено довго чекаємо, щоб юзер клікнув 5 разів? 
    Чи дамо йому якийсь час, після якого теж виводимо повідомлення про помилку?

- Що виводити, якщо комбінацію повторено вірно?


Виводитиму You failed, як юзер не вгадав і You win, якщо юзер правильно повторив усі правильно
*/

const MAX_NUMBER = 25;
const RANDOM_NUMBER = 5;

function Square(number) {
  this.number = number;
  this.squareEl = document.createElement("div");
}

Square.prototype.render = function (parent) {
  this.squareEl.textContent = this.number;
  this.squareEl.classList.add("square");
  this.squareEl.dataset.number = this.number;
  parent.append(this.squareEl);
};

function PovtorGame() {
  this.gameWrapper = document.createElement("div");
  this.squaresWrapper = document.createElement("div");
  this.startBtn = document.createElement("button");
  this.gameName = document.createElement("h2");
}

PovtorGame.prototype.getRandomPattern = function (length = 5, max = 5) {
  const orderedArr = [];
  for (let i = 1; i <= max; i++) {
    orderedArr.push(i);
  }

  const resArray = [];

  while (resArray.length !== length) {
    let random = Math.floor(Math.random() * orderedArr.length);
    resArray.push(orderedArr.splice(random, 1)[0]);
  }
  return resArray;
};

PovtorGame.prototype.render = function (parent) {
  const pattern = this.getRandomPattern(MAX_NUMBER, MAX_NUMBER);
  pattern.forEach((e) => {
    const newSquare = new Square(e);
    newSquare.render(this.squaresWrapper);
  });

  this.gameName.textContent = "ПОВТОРЮХА";
  this.startBtn.textContent = "Старт";

  this.gameName.classList.add("game-title");
  this.startBtn.classList.add("game-start");
  this.squaresWrapper.classList.add("squares-wrapper");
  this.gameWrapper.classList.add("game-wrapper");

  this.startBtn.addEventListener("click", (e) => this.startGame(e));

  this.gameWrapper.append(this.gameName, this.squaresWrapper, this.startBtn);
  parent.insertAdjacentElement("afterbegin", this.gameWrapper);
};

// те, що відбувається Після кліку по кнопці "Старт"
PovtorGame.prototype.startGame = function () {
  const pattern = this.getRandomPattern(RANDOM_NUMBER, MAX_NUMBER);
  // витратив 2 години на наступний рядок коду, бо ніяк не міг передати числа
  this.highlightedNumbers = [...pattern];
  this.startBtn.disabled = true;
  let interval = setInterval(() => {
    let activeEl = document.querySelector(".active");

    if (pattern.length === 0) {
      clearInterval(interval);
      activeEl?.classList.remove("active");
      return;
    }

    activeEl?.classList.remove("active");

    let numberToHighlight = pattern.shift();
    let elToHighlight = document.querySelector(
      `[data-number="${numberToHighlight}"]`
    );
    elToHighlight.classList.add("active");
  }, 500);

  let userClicked = [];
  // add event listened only when the game begins, to prevent clickiing before it happens
  this.squaresWrapper.addEventListener("click", (e) => {
    this.handleRepeatPattern(e, userClicked);
  });
};

PovtorGame.prototype.handleRepeatPattern = function (e, userClicked) {
  if (e.target.className === "square") {
    e.target.classList.add("active");
    userClicked.push(e.target.dataset.number);
  }

  if (userClicked.length === 5) {
    // довелось додати таймаут, щоб встигало дофарбувати останню клітинку, бо у нас там транзішн
    setTimeout(() => {
      this.gameResult(userClicked);
    }, 400);
  }
};

PovtorGame.prototype.gameResult = function (userClicked) {
  if (this.highlightedNumbers.toString() !== userClicked.toString()) {
    alert(
      `You failed. You clicked ${userClicked.toString()} when pattern was ${this.highlightedNumbers.toString()}`
    );
  } else {
    alert(`You won`);
  }
};

//----------------------------------------------------------------

const parent = document.body;
const newGame = new PovtorGame();
newGame.render(parent);
