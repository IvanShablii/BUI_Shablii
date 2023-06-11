/**
 * TASK-03 [Олег,Іван]
 *
 * Написати гру "Повторюха" де користувач має повторювати сгенерований текст, набираючи його.
 *
 * В констрцукторі компонента гри задається:
 * - час на набір тексту
 * - масив строк для повтрення
 *
 * На екрані має зʼявитись textarea та кнопка "Start".
 * Після кліку по кнопці "Start" має зʼявитись текст, який користувач має повторити та початись відлік часу, кнопка стає disabled.
 * Як тільки відлік часу закінчується:
 *  - інпут та кнопка стають disabled
 *  - значення інпуту порівнюється з текстом, який мав повторити користувач
 *  - якщо тексти ідентичні - виводиться alert з текстом "You win"
 *  - якщо тексти не ідентичні - виводиться alert з текстом "You lose"
 *
 * ЗАВДАННЯ З ЗІРОЧКОЮ:
 * - нараховувати користувачу очки 100 балів у випадку коли все співпало
 * - віднімати по 5 балів за кожне неспівпадіння
 * - виводити на екран пари слів, які не співпали
 *  */

function Povtoriucha(timeLimit, arrayToRepeat) {
  this.arrayToRepeat = arrayToRepeat
  this.timeLimit = timeLimit * 1000
  this.elements = {
    textArea: document.createElement("textarea"),
    startBtn: document.createElement("button"),
    timer: document.createElement("div"),
    text: document.createElement("div"),
  }
  // timeLimit in seconds
  this.render = () => {
    this.elements.startBtn.textContent = "Start"
    this.elements.startBtn.style.backgroundColor = "green"

    this.elements.startBtn.onclick = this.startGame

    document.body.prepend(
      this.elements.timer,
      this.elements.text,
      this.elements.textArea,
      this.elements.startBtn
    )
  }
  this.startGame = () => {
    let time = this.timeLimit

    const intervalID = setInterval(() => {
      if (time === 1000) {
        this.elements.textArea.disabled = true
        clearInterval(intervalID)
        this.gameResult()
      }

      time -= 1000
      this.elements.timer.innerText = time / 1000
    }, 1000)

    this.elements.startBtn.disabled = true
    this.elements.timer.innerText = time / 1000
    this.elements.text.innerText = this.arrayToRepeat[0]
  }

  this.gameResult = () => {
    let userText = this.elements.textArea.value

    if (this.arrayToRepeat[0] === userText) {
      console.log(alert("You win"))
      leaderboard.addPlayerScore(100)
    } else {
      console.log(alert("You loose"))
      leaderboard.addPlayerScore(0)
    }
  }
}

const game = new Povtoriucha(4, [
  "To build websites, you should know about HTML — the fundamental technology used to define the structure of a webpage.",
])
game.render()
