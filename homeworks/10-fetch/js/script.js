/* ## TASK-01

Реалізувати наступний функціонал.

На сторінці присутня форма з полем для вводу, користувач вводить туди число,
 яке буде відповідати кількості картинок які він хоче побачити.

Після кліку по кнопці "Показати песиків", потрібно відправити запит стільки разів,
скільки вкаже користувач, та, отримавши від сервера посилання на картинку, відмалювати їх у розмітці.

Ось сайт з документацією [API](https://dog.ceo/dog-api/), яке вам знадобиться.
Та саме посилання для запиту: _https://dog.ceo/api/breeds/image/random_

#### Приклад відповіді з серверу */

/*
{
  "message": "https://images.dog.ceo/breeds/retriever-curly/n02099429_1504.jpg",
  "status": "success"
}
 */

function Dog(url) {
  this.url = url;
  this.image = document.createElement("img");
}

Dog.prototype.render = function (parent) {
  this.wrapper = parent;
  this.image.src = this.url;
  this.wrapper.append(this.image);
};

function ShowDogs() {
  this.submitBtn = document.querySelector(".form__submit");
  this.formInput = document.querySelector(".form__field");
  this.countOfDogs = 0;
  this.wrapper = document.querySelector(".wrapper");
  this.notANumber = document.createElement("p");
}

ShowDogs.prototype.render = function () {
  this.submitBtn.addEventListener("click", (event) => {
    this.handleSubmit(event);
  });
};

ShowDogs.prototype.handleSubmit = function (event) {
  event.preventDefault();

  this.wrapper.replaceChildren();

  this.countOfDogs = this.formInput.value;

  if (
    !isNaN(+this.countOfDogs) &&
    this.countOfDogs > 0 &&
    this.countOfDogs <= 100
  ) {
    // let dog;
    for (let i = 0; i < this.countOfDogs; i++) {
      // fetch
      fetch("https://dog.ceo/api/breeds/image/random")
        .then((data) => data.json())
        .then((data) => {
          let dog = new Dog(data.message);
          dog.render(this.wrapper);
        });
    }
  } else if (isNaN(+this.countOfDogs)) {
    this.notANumber.textContent = "Value should be a number between 0 and 100";
    this.notANumber.style.color = "red";
    this.wrapper.append(this.notANumber);
  }
};

const showDogs = new ShowDogs();
showDogs.render();
