/**
 * TASK 02 [Іван]
 *
 * Написати секундомір.
 *
 * На екрані - кнопка "Старт", "Стоп" та цифри для відображення кількості секунд.
 *
 * Після того, як користувач натиснув "Старт" - починає відлік секунд, та кнопка "Старт" перетворюється на "Коло".
 *
 * Коли користувач натискає на кнопку "Коло" - нижче під цифровим відліком зʼявляʼться число з підписом "Коло 1", "Коло 2" і так далі.
 *
 */

/**
 * НА САМОСТІЙНЕ ВИКОНАНЯ
 * - змінити інтервал на 10 мілісекунд, та оновлювати значення на екрані з мілісекундами.
 * - написати функціонал кнопки Reset. По кліку на неї занченя секундоміра має обнулятися, а всі кола мають зникнути.
 * - написати функціонал кнопки "Пауза". По кліку на неї секундомір має зупинятися, а кнопка "Пауза" має змінюватися на "Продовжити".
 * - написати функціонал кнопки "Продовжити". По кліку на неї секундомір має продовжувати відлік, а кнопка "Продовжити" має змінюватися на "Пауза".
 */

// http://localhost:5500/_js/3-jun/25-06-2023%20/index-02.html

function Stopwatch() {
  this.stopwatchWrapper = document.createElement("div");
  this.timer = document.createElement("h2");
  this.time = 0;
  this.lapTime = 0;
  this.lapN = 1;
  this.buttonsWrapper = document.createElement("div");
  this.btnStop = document.createElement("button");
  this.btnPause = document.createElement("button");
  this.btnStart = document.createElement("button");
  this.lapsWrapper = document.createElement("div");
}

Stopwatch.prototype.render = function (parent) {
  parent.insertAdjacentElement("afterbegin", this.stopwatchWrapper);
  this.stopwatchWrapper.classList.add("stopwatch");
  this.stopwatchWrapper.addEventListener("click", (e) => {
    switch (e.target.dataset.action) {
      case "start":
        this.start();
        break;
      case "stop":
        this.stop();
        break;
      case "lap":
        this.lap();
        break;
      case "reset":
        this.reset();
        break;
      case "pause":
        this.pause();
        break;
      case "continue":
        this.continue();
        break;
      default:
        return null;
    }
  });

  this.btnStop.textContent = "Stop";
  this.btnStart.textContent = "Start";
  this.timer.textContent = `${this.formatTime(this.time)}`;

  this.btnStop.dataset.action = "stop";
  this.btnStart.dataset.action = "start";
  this.buttonsWrapper.classList.add("buttons-wrapper");
  this.stopwatchWrapper.append(this.timer, this.buttonsWrapper);
  this.buttonsWrapper.append(this.btnStop, this.btnStart);
  this.stopwatchWrapper.append(this.lapsWrapper);
  this.lapsWrapper.classList.add("laps-wrapper");
};

Stopwatch.prototype.start = function () {
  this.btnStart.textContent = "Lap";
  this.btnStart.dataset.action = "lap";

  this.btnPause.textContent = "Pause";
  this.btnPause.dataset.action = "pause";
  this.btnStart.insertAdjacentElement("beforebegin", this.btnPause);

  this.startTimer();
};

Stopwatch.prototype.stop = function () {
  clearInterval(this.intervalID);

  this.btnStop.textContent = "Reset";
  this.btnStop.dataset.action = "reset";
};

Stopwatch.prototype.lap = function () {
  const lap = document.createElement("p");
  lap.textContent = `Lap${this.lapN++} : ${this.formatTime(this.lapTime)}`;
  this.lapsWrapper.append(lap);
  this.lapTime = 0;
};

Stopwatch.prototype.reset = function () {
  this.time = 0;
  this.lapTime = 0;
  this.timer.textContent = `${this.formatTime(this.time)}`;

  this.lapN = 1;

  this.btnStop.textContent = "Stop";
  this.btnStop.dataset.action = "stop";

  this.btnStart.textContent = "Start";
  this.btnStart.dataset.action = "start";

  this.btnPause.remove();

  this.lapsWrapper.replaceChildren();
};

Stopwatch.prototype.pause = function () {
  this.btnPause.textContent = "Continue";
  this.btnPause.dataset.action = "continue";

  clearInterval(this.intervalID);
};

Stopwatch.prototype.continue = function () {
  this.btnPause.textContent = "Pause";
  this.btnPause.dataset.action = "pause";

  this.startTimer();
};

Stopwatch.prototype.startTimer = function () {
  const startTimer = setInterval(() => {
    this.time++;
    this.lapTime++;
    this.timer.textContent = `${this.formatTime(this.time)}`;
  }, 10);

  this.intervalID = startTimer;
};

Stopwatch.prototype.formatTime = function (time) {
  let formattedTime = Array.from(time.toString().padStart(6, "0"));
  formattedTime.splice(2, 0, `:`);
  formattedTime.splice(5, 0, `,`);
  let result = formattedTime.join("");

  return result;
};

//----------------------------------------------------------------

const parentEl = document.querySelector("body");
const stopwatch = new Stopwatch();
stopwatch.render(parentEl);
