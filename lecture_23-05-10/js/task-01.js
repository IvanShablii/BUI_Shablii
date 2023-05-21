/**
 * TASK-01 Слайдер [Рома, Олег]
 *
 * Функція-конструктор Slider прийматиме аргументи:
 * - name - назву слайдеру
 * - parent - CSS-селектор для пошуку батьківського елемента, куди будуть відрендерині слайди
 * - photoURLs - масив посилань на фотографії
 * - arrows - boolean флаг чи рендерити стрілочки
 *
 * Слайдер зʼявляʼться на сторінці лише з однією фотографією, вона має бути перша з масиву.
 * Якщо флаг arrows зазнаяений як true, то по кліку на праву і ліву стрілочку фотографії мають змінюватися "вперед" і "назад".
 * Якщо флаг arrows зазнаяений як false - те саме має відбуватись, коли користувач нажимає стрілочки вліво та вправо на клавіатурі, або клавіші D та A
 *
 */
const gogiEmotions = [
  'https://media.slovoidilo.ua/media/publications/15/143244/143244-1_large.jpg',
  'https://i.lb.ua/077/61/5978b039ca210.jpeg',
  'https://static.espreso.tv/uploads/photobank/213000_214000/213531_145691-1_large_new_960x380_0.jpg',
  'https://novynarnia.com/wp-content/uploads/2020/05/Saakashvili.jpg'
]

function Slider(name, parent, photoURLs, arrows) {
  this.name = name
  this.curentPhoto = 0
  this.parent = document.querySelector(parent)
  this.arrows = true
  this.data = photoURLs
  this.elements = {
    img: document.createElement('img'),
    arrowLeft: document.createElement('div'),
    arrowRight: document.createElement('div')
  }
  this.render = () => {
    this.elements.img.src = this.data[this.curentPhoto]
    this.elements.arrowLeft.classList.add(
      'slider__arrow',
      'slider__arrow--left'
    )
    this.elements.arrowRight.classList.add(
      'slider__arrow',
      'slider__arrow--right'
    )

    this.parent.addEventListener('click', event => {
      const isArrowLeft = event.target.classList.contains('slider__arrow--left')
      const isArrowRight = event.target.classList.contains(
        'slider__arrow--right'
      )

      if (this.curentPhoto === 0 && isArrowLeft) {
        this.curentPhoto = this.data.length - 1
      } else if (this.curentPhoto >= this.data.length - 1 && isArrowRight) {
        this.curentPhoto = 0
      } else {
        if (isArrowLeft) {
          this.curentPhoto--
        } else if (isArrowRight) {
          this.curentPhoto++
        }
      }

      this.elements.img.src = this.data[this.curentPhoto]
    })

    this.parent.append(
      this.elements.arrowLeft,
      this.elements.img,
      this.elements.arrowRight
    )
  }
}

const mySlider = new Slider('Gogi emotions', '#slider', gogiEmotions, true)

mySlider.render()
