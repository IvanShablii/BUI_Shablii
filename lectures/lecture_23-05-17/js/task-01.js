/**
 * TASK-01 [Тьома]
 *
 * Коли "завантажується" сайт показувати Preloader у вигляді крутящогося кола.
 *
 * Створювати прелоадер за допомогою функції-конструктора,
 * та розміщувати його на екрані за допомогою його метода render()
 */

const classes = {
  preloader: "preloader",
  preloaderFigure: "preloader__figure",
}

/**
 *
 * @param {HTMLElement} parent
 * @param {object} classes
 * @param {string} classes.preloader - класс для зовнішнього дівака
 * @param {string} classes.preloaderFigure - класс для внутрішнього дівака
 */
function Preloader(parent, classes) {
  this.parent = parent
  this.elements = {
    preloader: document.createElement("div"),
    preloaderFigure: document.createElement("div"),
  }

  this.render = () => {
    this.elements.preloader.classList.add(classes.preloader)
    this.elements.preloaderFigure.classList.add(classes.preloaderFigure)

    this.elements.preloader.appendChild(this.elements.preloaderFigure)
    this.parent.appendChild(this.elements.preloader)
  }

  this.remove = () => {
    this.parent.removeChild(this.elements.preloader)
  }
}

const loader = new Preloader(document.body, {
  preloader: "preloader",
  preloaderFigure: "preloader__figure",
})
loader.render()

setTimeout(() => {
  loader.remove()
}, 3000)
