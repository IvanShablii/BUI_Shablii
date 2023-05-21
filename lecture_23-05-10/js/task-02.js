/**
 * TASK-02 Рандомайзер [Тьома, Іван, Антон]
 *
 * Написати функцію-конструктор Randomizer.
 *
 * Аргументи:
 * - parent - CSS селектор для пошуку батьківського елементу на сторінці
 * - data - масив строк, які мають в рандомному порядку зʼявлятись ан сторінці
 *
 * Функція-конструктор повертатиме обʼєкт. Головним метдом у ньому буде render(),
 * він має відповідати за те, щоб рандомайзер зʼявився на сторінці.
 *
 * Коли рандомайзер вперше зʼявляється на стрінці - там має відображатись:
 * - текст "Натисни кнопочку шоб почати"
 * - під текстом кнопка "хєракс!"
 *
 * По кліку на кнопку "хєракс!", для користувача на екрані має зʼявлятись випадковий елемент переданого в конструктор масиву.
 *
 * ЗАВДАННЯ З ЗІРОЧКОЮ (на самостійну роботу після зідзвону):
 * навчитись запамʼятовувати уже вибрані елементи, записувати їх в окремий масив та видаляти з вихідного.
 * Коли елементи у вихідному масиві закічнаться - виводити на екран "Перезаряджено. Кляцни ще раз."
 * По кліку на кнопку "хєракс!" після цього - все починається по новій з вихідним масивом.
 */

function Randomizer(parent, data) {
  this.data = data
  this.usedData = []
  this.parent = document.querySelector(parent)
  this.elements = {
    buttonAction: document.createElement('button'),
    text: document.createElement('p')
  }

  this.getRandomData = () => {
    const randomIndex = Math.floor(Math.random() * this.data.length)
    return this.data[randomIndex]
  }

  this.handleClick = () => {
    this.elements.text.innerHTML = this.getRandomData()
  }

  this.render = () => {
    this.elements.buttonAction.className = 'randomizer__action'
    this.elements.buttonAction.innerText = 'хєракс!'

    this.elements.text.className = 'randomizer__text'
    this.elements.text.innerText = 'Натисни кнопочку шоб почати'

    // this.parent.append(this.elements.buttonAction,this.elements.text)
    this.parent.appendChild(this.elements.text)
    this.parent.appendChild(this.elements.buttonAction)
    this.elements.buttonAction.addEventListener('click', this.handleClick)
  }
}

const randomizerData = ['gogi', 'mogi', 'pinus nigra', 'puki', 'ruki', 'zvuki']
const myRandom = new Randomizer('.randomizer', randomizerData)

myRandom.getRandomData()
myRandom.render()

// const createRandomizer = (parent, data) => {
//   const getRandomData = () => {
//     const randomIndex = Math.floor(Math.random() * this.data.length)
//     return this.data[randomIndex]
//   }

//   const handleClick = () => {
//     this.elements.text.innerHTML = this.getRandomData()
//   }

//   const render = () => {
//     ;(this.elements.buttonAction.className = 'randomizer__action'),
//       (this.elements.text.className = 'randomizer__text')
//   }

//   return {
//     data: data,
//     parent: document.querySelector(parent),
//     elements: {
//       buttonAction: document.createElement('button'),
//       text: document.createElement('p')
//     },
//     getRandomData,
//     handleClick,
//     render
//   }
// }
