/* TASK-03
Написати функцію filterСlothes, яка буде фільтрувати елементи на сторінці по заданому значеню
з інпута при натисканні на кнопку, в разі якщо такого значення не знайдено вивести під полем
для вводу помилку - "такого кольору немає в асортименті". Фільтрувати будемо по кольору одягу

Arguments:
color - значення по якому фільтруємо елементи
Return value
відсутнє */

// Код для отримання кольору:
document.getElementById("filterBtn").addEventListener("click", (e) => {
  e.preventDefault();
  const valueField = document.querySelector(".field").value;
  // виклик вашої функції
  filterClothes(valueField);
});
////////////////////////////////
// create filterСlothes function
const filterClothes = (color) => {
  const noColorMessage = "такого кольору немає в асортименті";
  const p = document.createElement("p");
  const input = document.querySelector("form");
  const pExists = document.querySelector("form p"); // щоб не дублювати помилку

  // get list of unique colors from list__item
  const listItem = document.querySelectorAll(".list__item");
  let listOfColors = [];
  listItem.forEach((e) => {
    let itemColor = e.innerText.split(" ")[1];
    if (!listOfColors.includes(itemColor)) {
      listOfColors.push(itemColor);
    }
  });
  // якщо введений текст не є назвою кольору зі списку - показуємо помилку
  if (listOfColors.includes(color)) {
    // якщо такий колір є - приховуємо усі товари крім товарів з цим кольором
    listItem.forEach((e) => {
      let itemColor = e.innerText.split(" ")[1];
      if (color === itemColor) {
        e.style.display = "list-item";
      } else {
        e.style.display = "none";
      }
    });
  } else if (!pExists) {
    listItem.forEach((e) => (e.style.display = "")); // повертаю елементи якщо в інпуті колір не зі списку
    input.append(p);
    p.style.color = "red";
    p.prepend(noColorMessage);
    setTimeout(() => p.remove(), "2000"); // можна ще прибирати, ввести валідний колір
  }
};

// цікава задачка. Найбільша проблема була дістати кольори і виводити ту помилку нормально.
