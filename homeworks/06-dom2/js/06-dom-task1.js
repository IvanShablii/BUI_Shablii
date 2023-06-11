/* TASK-01
Написати функцію renderList, виводить на екран список на основі масиву обьектів, де властивість - name має бути заголовком(h2), а властивість price має бути текстом(p).

Arguments:
list - масив обь'єктів із власивостями(name, price)
Return value
відсутнє
 */

// Код для параметру функції:
const dataIcecream = [
  { name: "хрещатик", price: "7,99 uah" },
  { name: "100% пломбір", price: "2,50 uah" },
  { name: "maximus", price: "12,99 uah" },
  { name: "пташине молоко", price: "20,99 uah" },
];

const renderList = (list) => {
  let div = document.createElement("div");
  document.body.prepend(div); // загорнув їх у дів, щоб були перед скриптами

  list.forEach((e) => {
    let ul = document.createElement("ul");
    let li = document.createElement("li");
    let h2 = document.createElement("h2");
    let p = document.createElement("p");

    div.append(ul);
    ul.append(li);
    li.append(h2, p);
    h2.append(e.name);
    p.append(e.price);
  });
};
renderList(dataIcecream);
