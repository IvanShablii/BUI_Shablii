/* Написати функцію checkMoney, яка буде перевіряти та підсвічувати елементи з заданого списку.

Якщо сума складає менше 20% від цілі - фарбуємо елемент з класом list-text в червоний колір
Якщо менше 50% - жовтий
Від 90 та більше - зелений.
Arguments:
відсутні

Return value
відсутнє
 */

const checkMoney = () => {
  const elements = {
    listItem: document.querySelectorAll("li.list__item"),
    listTitle: document.querySelectorAll("h2.list__title"),
    listText: document.querySelectorAll("p.list__text"),
    listGoal: document.querySelectorAll("p.list__goal"),
  };

  elements.listItem.forEach((e, i) => {
    let money = elements.listText[i].innerText;
    money = money.slice(16); // регуляркою було б надійшіне, мабуть, але хотів щось інше спробувати
    let goal = elements.listGoal[i].innerText;
    goal = goal.slice(6);

    if (money / goal < 0.2) {
      elements.listText[i].style.color = "red";
    } else if (money / goal < 0.5) {
      elements.listText[i].style.color = "yellow"; // yellow погано читається. Замінив би на gold або orange
    } else if (money / goal >= 0.9) {
      elements.listText[i].style.color = "green";
    }
  });
};

checkMoney();
