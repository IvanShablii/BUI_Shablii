/* Зверстати та оживити бургер меню. Тобто зробити примітивне меню, показувати меню по натисканню
на іконку бургеру, та ховати при натисканні на хрестик. */

const burgerMenu = document.querySelector(".burger-menu");

const btnClicked = () => {
  "buttin was clicked";
};

burgerMenu.addEventListener("click", btnClicked, false);
// const closeBtn = document.querySelector(".burger-close");
// closeBtn.addEventListener("click", console.log("close button click"));
