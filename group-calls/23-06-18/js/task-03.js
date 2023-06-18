/**
 * TASK 03 [Іван]
 *
 * Написати слайдер з фотографіями, де по кліку на відображене фото, воно має відкриватись у вигляді "на весь екран".
 * Також у слайдера мають бути кнопки "<" та ">" для перемикання фотографій.
 *
 */

// slider
// slider__item
// slider__item--active
// slider__btn
// slider__btn--prev
// slider__btn--next

// modal-wrapper
// modal
// close-btn

const _URLs = [
  "https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/2774140/pexels-photo-2774140.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/7210754/pexels-photo-7210754.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/16652420/pexels-photo-16652420.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/15347387/pexels-photo-15347387.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/58997/pexels-photo-58997.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/160846/french-bulldog-summer-smile-joy-160846.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/247522/pexels-photo-247522.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/164186/pexels-photo-164186.jpeg?auto=compress&cs=tinysrgb&w=800",
];

function Slider(_URLs) {
  this.wrapper = document.createElement("div");
  this.images = _URLs;

  this.btnPrew = document.createElement("button");
  this.btnNext = document.createElement("button");

  this.modalWrapper = document.createElement("div");
  this.modal = document.createElement("div");
  this.closeBtn = document.createElement("button");
}

Slider.prototype.render = function (parent) {
  parent.insertAdjacentElement("afterbegin", this.wrapper);
  this.wrapper.classList.add("slider");
  this.images.forEach((e, index) => {
    this.wrapper.insertAdjacentHTML(
      "beforeend",
      `<img class="slider__item${
        index === 0 ? " slider__item--active" : ""
      }" src=${e}></img>`
    );
  });

  this.wrapper.append(this.btnPrew);
  this.btnPrew.classList.add("slider__btn", "slider__btn--prev");
  this.btnPrew.textContent = "<";

  this.wrapper.append(this.btnNext);
  this.btnNext.classList.add("slider__btn", "slider__btn--next");
  this.btnNext.textContent = ">";

  this.navigation();
};

Slider.prototype.navigation = function () {
  this.wrapper.addEventListener("click", (e) => {
    let currentImage = this.wrapper.querySelector(".slider__item--active");

    if (e.target === this.btnPrew) {
      // left button navigation
      currentImage.classList.remove("slider__item--active");
      if (
        currentImage.previousSibling != null &&
        currentImage.previousSibling.classList.contains("slider__item")
      ) {
        currentImage.previousSibling.classList.add("slider__item--active");
      } else {
        Array.from(this.wrapper.children)
          .findLast((e) => e.classList.contains("slider__item"))
          .classList.add("slider__item--active");
      }
    } else if (e.target === this.btnNext) {
      // right button navigation
      currentImage.classList.remove("slider__item--active");
      if (
        currentImage.nextSibling != null &&
        currentImage.nextSibling.classList.contains("slider__item")
      ) {
        currentImage.nextSibling.classList.add("slider__item--active");
      } else {
        Array.from(this.wrapper.children)
          .find((e) => e.classList.contains("slider__item"))
          .classList.add("slider__item--active");
      }
    } else if (e.target.classList.contains("slider__item--active")) {
      // open modal
      this.fullScreen(currentImage);
    }
  });
};

Slider.prototype.fullScreen = function (currentImage) {
  this.wrapper.insertAdjacentElement("beforebegin", this.modalWrapper);

  this.modalWrapper.classList.add("modal-wrapper");

  this.modalWrapper.append(this.modal);
  this.modal.classList.add("modal");

  let currentImageCopy = currentImage.cloneNode(true);
  this.modal.append(currentImageCopy);

  this.modal.append(this.closeBtn);
  this.closeBtn.classList.add("close-btn");
  this.closeBtn.textContent = "Close";

  this.btnPrew.style.visibility = "hidden";
  this.btnNext.style.visibility = "hidden";

  this.modalWrapper.addEventListener("click", (e) => {
    if (e.target === this.closeBtn || e.target != this.modal) {
      currentImageCopy.remove();
      this.modalWrapper.remove();

      this.btnPrew.style.visibility = null;
      this.btnNext.style.visibility = null;
    }
  });
};

//----------------------------------------------------------------
const parent = document.querySelector("body");
const slider = new Slider(_URLs);
slider.render(parent);
