/* Змінити курсор, тобто тегу html вимкнути властивість курсору(cursor: none), та оживити елемент 
з класом(root-cursor), зробити так щоб він пересувався по сторінці як звичайний курсор миші. */

const element = document.querySelector(".root-cursor");

document.addEventListener("mousemove", (e) => {
  element.style.left = e.clientX + "px";
  element.style.top = e.clientY + "px";
});
