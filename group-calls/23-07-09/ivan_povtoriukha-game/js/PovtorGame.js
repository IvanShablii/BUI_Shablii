function PovtorGame(levels, currentUser) {
  this.user = currentUser;
  this.levels = levels;
  this.currentLevelIndex = currentUser.level;

  Object.defineProperty(this, "levelWidth", {
    get() {
      return this.levels[this.currentLevelIndex].width;
    },
  });
  Object.defineProperty(this, "levelSquares", {
    get() {
      return this.levels[this.currentLevelIndex].squares;
    },
  });
  Object.defineProperty(this, "levelRepeat", {
    get() {
      return this.levels[this.currentLevelIndex].repeat;
    },
  });

  this.gameWrapper = document.createElement("div");
  this.squaresWrapper = document.createElement("div");
  this.startBtn = document.createElement("button");
  this.gameName = document.createElement("h2");
}

PovtorGame.prototype.getRandomPattern = function (length = 3, max = 3) {
  let orderedArr = [];
  for (let i = 1; i <= max; i++) {
    orderedArr.push(i);
  }
  let resArray = [];

  while (resArray.length !== length) {
    let random = Math.floor(Math.random() * orderedArr.length);
    resArray.push(orderedArr.splice(random, 1)[0]);
  }
  return resArray;
};

PovtorGame.prototype.render = function (parent) {
  this.parent = parent;
  this.pattern = this.getRandomPattern(this.levelSquares, this.levelSquares);
  this.pattern.forEach((e) => {
    const newSquare = new Square(e);
    newSquare.render(this.squaresWrapper);
  });

  this.gameName.textContent = "ПОВТОРЮХА";
  this.startBtn.textContent = "Старт";

  this.gameName.classList.add("game-title");
  this.startBtn.classList.add("game-start");
  this.squaresWrapper.classList.add("squares-wrapper");
  this.gameWrapper.classList.add("game-wrapper");

  this.startBtn.addEventListener("click", (e) => {
    this.startGame(e);
    e.stopImmediatePropagation();
  });

  this.squaresWrapper.style.gridTemplateColumns = `repeat(${this.levelWidth}, 1fr)`;

  this.gameWrapper.append(this.gameName, this.squaresWrapper, this.startBtn);
  parent.insertAdjacentElement("afterbegin", this.gameWrapper);
};

// те, що відбувається Після кліку по кнопці "Старт"
PovtorGame.prototype.startGame = function () {
  this.pattern = this.getRandomPattern(this.levelRepeat, this.levelSquares);
  this.highlightedNumbers = [...this.pattern];
  this.startBtn.disabled = true;
  let interval = setInterval(() => {
    let activeEl = document.querySelector(".active");

    if (this.pattern.length === 0) {
      clearInterval(interval);
      activeEl?.classList.remove("active");
      return;
    }

    activeEl?.classList.remove("active");

    let numberToHighlight = this.pattern.shift();
    let elToHighlight = document.querySelector(
      `[data-number="${numberToHighlight}"]`
    );
    elToHighlight.classList.add("active");
  }, 500);

  console.log(this.highlightedNumbers + " highlightedNumbers");

  typeof userClicked === "undefined" ? (userClicked = []) : (userClicked = []);

  // add event listened only when the game begins, to prevent clickiing before it happens
  if (this.squaresWrapper.getAttribute("listener") !== "true") {
    this.squaresWrapper.addEventListener("click", (e) => {
      this.handleRepeatPattern(e, userClicked);
      console.log(userClicked);
      e.stopImmediatePropagation();
    });
  }
};

PovtorGame.prototype.handleRepeatPattern = function (e, userClicked) {
  if (e.target.className === "square") {
    e.target.classList.add("active");
    userClicked.push(e.target.dataset.number);
  }

  if (userClicked.length === this.levelRepeat) {
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
  } else if (this.currentLevelIndex < this.levels.length - 1) {
    this.currentLevelIndex++;
    alert(`You won this level`);
    // Update localStorage
    let povtorGameSaves = JSON.parse(localStorage.getItem("povtorGameSaves")); // get all saves from localStorage
    let currentUserIndex = povtorGameSaves.findIndex(
      (user) => user.username === this.user.username
    );
    povtorGameSaves[currentUserIndex].level = this.currentLevelIndex;
    localStorage.setItem("povtorGameSaves", JSON.stringify(povtorGameSaves)); // записуємо юзера в локалсторедж

    // remove all HTML inside wrapper
    this.squaresWrapper.replaceChildren();
    this.squaresWrapper.style.gridTemplateColumns = `repeat(${this.levelWidth}, 1fr)`;
    this.render(this.parent);
    this.startBtn.disabled = false;
  } else return alert(`You won the game`);
};
