/* Відслідковувати клавіатурний браузерний івент таким чином, щоб при натисканні кнопки
на клавіатурі, у відповідного елементу зʼявлявся клас hit для того щоб підсвітити натискання.
Назви всіх натиснутих клавіш записувати у заголовок з класом 'title'.
 */

const title = document.querySelector(".title");

document.addEventListener("keyup", (el) => {
  let elements = document.querySelectorAll("li");
  elements.forEach((e) => {
    if (e.innerText === `${el.key.toUpperCase()}`) {
      e.classList.add("hit");
      title.textContent += el.key;
    }
  });
});
