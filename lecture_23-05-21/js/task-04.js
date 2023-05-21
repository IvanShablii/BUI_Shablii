/**
 * TASK-04
 *
 * Користуючись отриманними знаннями на даний момент, написати функцонал для створення опитувань.
 * На екрані має зʼявлятись питання, варіантти відповідей з можливістю вибору лише однієї відповіді.
 * Після натискання на кнопку "Наступне питання" має зʼявлятись наступне питання.
 * Після натискання на кнопку "Завершити опитування" має зʼявлятись повідомлення про кількість правильних відповідей.
 *
 * Спосіб виконання довільний, єдина вимога - передавати _QUESTIONS як аргумент, а не використовувати як глобальну змінну.
 */

const _QUESTIONS = [
  {
    question: "Як звати 23-го президента США?",
    answers: [
      "Барак Обама",
      "Джордж Вашингтон",
      "Білл Клінтон",
      "Бенджамін Гаррісон",
    ],
    correctAnswer: "Бенджамін Гаррісон",
  },
  {
    question: "Скільки буде 2+2*2?",
    answers: ["6", "8", "4", "2"],
    correctAnswer: "6",
  },
  {
    question: "Чому дорівнює довжина гіпотенузи прямокутного трикутника?",
    answers: [
      "Сумі катетів",
      "Добутку катетів",
      "Різниці катетів",
      "Квадрату катетів",
    ],
    correctAnswer: "Сумі катетів",
  },
  {
    question: "У чому різниця між HTTP та HTTPS?",
    answers: [
      "В HTTPS використовується шифрування",
      "HTTPS - це HTTP для мобільних пристроїв",
      "HTTPS - це HTTP для десктопних пристроїв",
      "HTTPS - це HTTP для мобільних пристроїв",
    ],
    correctAnswer: "В HTTPS використовується шифрування",
  },
]
