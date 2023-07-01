// Реалізуйте наступний функціонал:

// Після кліку по кнопці на сторінці запускати таймер(функцію startTimer)
// Функція startTimer приймає один аргумент у форматі дати із поля для вводу,
// та запускає таймер який кожної секунди оновлює інформацію про - дні,години,хвилини
// та секунди до дати аргумента. Тобто аргументом приходить дата, до якох треба кожну секунду
// виразовувати скільки залишилось часу і виводити ці значення на екран.
// Arguments функції startTimer:
// eventDate - дата у форматі строки ("01-09-2022")
// Return value
// Відсутнє

//----------------------------------------------------------------

// Зробив, але думав мав би бути значно простіший спосіб

/* 
==== ПИТАННЯ ====

1. Інпут - число. Дозволені тільки числа. 
    Число треба валідувати якось? (наприклад, довжину) і приводити до формату ("01-09-2022")? 
    Чи може краще використати інпут типу "дата"?

2. Повинна бути тільки одна функція startTimer()?
    Чи загорнути усю логіку в обʼєкт, методом якого є startTimer()?

3. Змінив тег form на div, бо form при сабміті додавав значення з інпуту
    в лінку і сторінка релоудилась. Не знайшов чого так.
*/

function startTimer(eventDate) {
  const targetDate = new Date(eventDate);
  const currentDate = new Date();
  let timeDiff = targetDate.getTime() - currentDate.getTime();

  const dayToMs = 1000 * 60 * 60 * 24;
  const hourToMs = 1000 * 60 * 60;
  const minuteToMs = 1000 * 60;
  const secondToMs = 1000;

  const dayEl = document.querySelector(`[data-timer='day']`);
  const hoursEl = document.querySelector(`[data-timer='hours']`);
  const minuteEl = document.querySelector(`[data-timer='minute']`);
  const secondEl = document.querySelector(`[data-timer='second']`);

  let interval = setInterval(() => {
    timeDiff = timeDiff - 1000;

    let daysLeft = Math.floor(timeDiff / dayToMs);
    let hoursLeft = Math.floor((timeDiff - daysLeft * dayToMs) / hourToMs);
    // prettier-ignore
    let minutesLeft = Math.floor(
      ((timeDiff - daysLeft * dayToMs) - (hoursLeft * hourToMs)) / minuteToMs);
    // prettier-ignore
    let secondsLeft =Math.floor(
      (((timeDiff -
        daysLeft * dayToMs) -
        hoursLeft * hourToMs) -
        minutesLeft * minuteToMs) / secondToMs);

    dayEl.textContent = daysLeft;
    hoursEl.textContent = hoursLeft;
    minuteEl.textContent = minutesLeft;
    secondEl.textContent = secondsLeft;
  }, 1000);
}

//----------------------------------------------------------------
const button = document.querySelector(".setTimer__submit");

button.addEventListener("click", () => {
  let inputValue = document.querySelector(".setTimer__field").value;

  inputValue = inputValue.split("");
  inputValue.splice(2, 0, `-`);
  inputValue.splice(5, 0, `-`);
  inputValue = inputValue.join("");

  startTimer(inputValue);
});
