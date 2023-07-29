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

Trello.prototype.handleAddTask = function () {
  const createCard = (e) => {
    e.preventDefault();
    let card = new Card();
    let cardTitle = document.querySelector(".form__field").value;
    let cardColorIndex = this.cardColorDropdown.options["selectedIndex"];
    let cardColor = this.cardColorDropdown.options[cardColorIndex].value;
    if (cardTitle.length > 0) {
      card.create(cardTitle, cardColor);
    }
  };
  this.createCardBtn.addEventListener("click", createCard);
};

Trello.prototype.handleAddColumn = function (parent) {
  this.parent = parent;
  const createColumn = (e) => {
    e.preventDefault();
    let column = new Column();
    column.create(this.parent);
  };
  this.createColumnBtn.addEventListener("click", createColumn);
};

function Card() {
  this.parent = document.querySelector(".trello__column");
  this.card = document.createElement("div");
}

Card.prototype.create = function (title, color) {
  this.card.classList.add("trello__card");
  this.card.classList.add(`${color}`);
  this.card.textContent = title;
  this.parent.append(this.card);
};

function Column() {
  this.column = document.createElement("div");
}

Column.prototype.create = function (parent) {
  this.column.classList.add("trello__column");
  parent.append(this.column);
};

Column.prototype.handleMove = function () {
  item.addEventListener("mousedown", this.handle
};

//---------------------------------------------------------------------------------

let parent = document.querySelector(".trello");
let trello = new Trello();
trello.handleAddTask();
trello.handleAddColumn(parent);
