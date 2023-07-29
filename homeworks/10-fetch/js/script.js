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

  this.wrapper = document.querySelector(".wrapper");
  this.image = document.createElement("img");
}

Dog.prototype.render = function () {
  this.image.src = this.url;
  this.wrapper.append(this.image);
};

function ShowDogs() {
  this.submitBtn = document.querySelector(".form__submit");
  this.formInput = document.querySelector(".form__field");
  this.countOfDogs = 0;
}

ShowDogs.prototype.render = function () {
  this.submitBtn.addEventListener("click", (event) => {
    this.handleSubmit(event);
  });
};

ShowDogs.prototype.handleSubmit = function (event) {
  event.preventDefault();
  this.countOfDogs = this.formInput.value;

  if (!isNaN(+this.countOfDogs) && this.countOfDogs > 0) {
    let image;
    let dog;
    for (let i = 0; i < this.countOfDogs; i++) {
      // fetch
      image = fetch("https://dog.ceo/api/breeds/image/random")
        .then((data) => data.json())
        .then((data) => {
          dog = new Dog(data.message);
          dog.render();
        });
    }
  }
};

const showDogs = new ShowDogs();
showDogs.render();
