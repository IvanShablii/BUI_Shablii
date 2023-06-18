/* Зверстати та оживити бургер меню. Тобто зробити примітивне меню, показувати меню по натисканню
на іконку бургеру, та ховати при натисканні на хрестик. */

function BurgerMenu() {
  this.header = document.createElement("header");
  this.bugerWrapper = document.createElement("div");
  this.bugrerMenu = document.createElement("div");
  this.line1 = document.createElement("div");
  this.line2 = document.createElement("div");
  this.line3 = document.createElement("div");
  this.burgerText = document.createElement("p");

  this.bugrerList = document.createElement("ul");
  this.butgerListItem1 = document.createElement("li");
  this.butgerListItem2 = document.createElement("li");
  this.butgerListItem3 = document.createElement("li");
  this.butgerListItem4 = document.createElement("li");
}

BurgerMenu.prototype.render = function (parent) {
  parent.insertAdjacentElement("afterbegin", this.header);
  this.header.append(this.bugerWrapper);
  this.bugerWrapper.classList.add("burger-wrapper");
  this.bugerWrapper.append(this.bugrerMenu);
  this.bugrerMenu.classList.add("burger-menu");
  this.bugrerMenu.append(this.line1);
  this.line1.classList.add("line");
  this.bugrerMenu.append(this.line2);
  this.line2.classList.add("line");
  this.bugrerMenu.append(this.line3);
  this.line3.classList.add("line");

  this.bugerWrapper.append(this.burgerText);
  this.burgerText.textContent = "- I'm the burger menu. Click me";

  this.header.append(this.bugrerList);
  this.bugrerList.classList.add("burger-list", "disabled");
  this.bugrerList.append(this.butgerListItem1);
  this.butgerListItem1.textContent = "OPTION ONE";
  this.bugrerList.append(this.butgerListItem2);
  this.butgerListItem2.textContent = "OPTION TWO";
  this.bugrerList.append(this.butgerListItem3);
  this.butgerListItem3.textContent = "OPTION THREE";
  this.bugrerList.append(this.butgerListItem4);
  this.butgerListItem4.textContent = "OPTION FOUR";

  this.bugrerMenu.addEventListener("click", (e) => {
    console.log("buger clicked");
    this.line1.classList.toggle("close-btn");
    this.line2.classList.toggle("close-btn");
    this.line3.classList.toggle("close-btn");
    this.bugrerList.classList.toggle("disabled");
  });
};

// Перемудрив з CSS, але працює
// =================================================================
let parent = document.querySelector("body");
let menu = new BurgerMenu();
menu.render(parent);
