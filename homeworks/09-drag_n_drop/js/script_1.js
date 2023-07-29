/* Реалізувати невеличкий функціонал по типу дошки Trello, 
тобто створити форму з полем для вводу заголовку картки, 
та полем на вибір кольору картки(select: option = зелений,жовтий,червоний).

Після кліку на кнопку "Створити картку", під формою створюється колонка з данною карткою.
При створення наступних карток, всі попередні додаются з початку в одну і ту саму колонку.

Надати можливість користовачу перетягувати колонки с місця на місце, та звісно надати можливість 
перетягувати картки між колонками. Стилізація форми на ваш смак. Ось макет для тго шоб приблизно 
орієнтуватись. */

function Trello() {
  this.cardColorDropdown = document.querySelector(".form__select");
  this.createCardBtn = document.querySelector(".form__submit");
  this.createColumnBtn = document.querySelector(".form__add-column");
}

Trello.prototype.render = function () {
  this.createCardBtn.addEventListener("click", (event) => {
    this.handleAddCard(event);
  });

  this.createColumnBtn.addEventListener("click", (event) => {
    this.handleAddColumn(event);
  });

  // query all columns
  this.columns = document.querySelectorAll(".trello__column");
  this.columns.forEach((item) => {
    item.addEventListener("mousedown", (e) => {
      console.log("mousedown");
    });
  });

  // query all cards
  this.cards = document.querySelectorAll(".trello__card");
  this.cards.forEach((item) => {
    item.addEventListener("mousedown", (e) => {
      console.log("mousedown card");
    });
  });
};

// Trello.prototype.handleMove = function (event) {}

Trello.prototype.handleAddCard = function (event) {
  event.preventDefault();
  let card = new Card();
  let cardTitle = document.querySelector(".form__field").value;
  let cardColorIndex = this.cardColorDropdown.options["selectedIndex"];
  let cardColor = this.cardColorDropdown.options[cardColorIndex].value;
  if (cardTitle.length > 0) {
    card.create(cardTitle, cardColor);
  }
};

Trello.prototype.handleAddColumn = function (event) {
  event.preventDefault();
  let column = new Column();
  column.create();
};

function Card(parent = document.querySelector(".trello__column")) {
  this.parent = parent;
  this.card = document.createElement("div");
}

Card.prototype.create = function (title, color) {
  this.card.classList.add("trello__card");
  this.card.classList.add(`${color}`);
  this.card.textContent = title;
  this.parent.append(this.card);
};

function Column(parent = document.querySelector(".trello")) {
  this.parent = parent;
  this.column = document.createElement("div");
}

Column.prototype.create = function () {
  this.column.classList.add("trello__column");

  this.parent.append(this.column);
};

// TODO: Implement
Column.prototype.handleMove = function () {
  console.log("123");
};

//---------------------------------------------------------------------------------
let trello = new Trello();
trello.render();
