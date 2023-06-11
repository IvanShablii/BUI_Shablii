/**
 * TASK 2 [Олег, Іван, Тьома]
 *
 * Написати коспонент BookingSeats.
 *
 * Вартість будь якого місця - 100 грн.
 *
 * Аргументом функція-конструктор приймає обʼєкт config, що має такі властивості:
 * - root - елемент, в який буде рендеритися форма
 * - rows - кількість рядів
 * - seats - кількість місць в ряді
 * - bookedSeats - масив заброньованих місць
 * - onSelect - функція, яка буде викликатися при виборі місця.
 *   Приймає один аргумент - заброньоване місце. Механізм бронювання має бути за її межами,
 *   вона потрібна лише на випадок, якщо хтось захоче додати якусь ще логіку після того як користувач вибрав місце.
 * - classes - об'єкт, що містить CSS-класи для кожного елементу форми
 * - bookingBtnText - текст кнопки "Забронювати"
 * - onSubmit - функція, яка буде викликатися після кліку по кнопці "Забронювати". Приймає один аргумент - масив заброньованих місць.
 *
 * Всі місця мають рендеритися на екрані зі своїм порядковим номером. Також користувач має бачити номер ряду.
 *
 * По кліку на одне місце - вибране місце виділяється, йому додається класс з модифікатором --selected,
 * номер ряду та місця додається в масив вибраних місць, після чого викликається функція onSelect для додаткової логіки поза компонентом.
 *
 * По кліку на вже вибране місце - воно стає не вибраним, з нього знімається клас з модифікатором --selected.
 *
 * При кліку на кнопку "Забронювати" - виводити в консоль масив з вибраними місцям,
 * після чого викликати функцію onSubmit для додаткової логіки по типу як в onSelect.
 *
 * ЗАВДАННЯ З ЗІРОЧКОЮ:
 * - зробити так, щоб після того як натиснули кнопку "Забронювати" - місця в масиві заброньованих не можна було уже відмінити.
 * - додати можливість "ходити" по місцях стрілочками на клавіатурі
 * - додати можливість вибирати декілька місць за один раз, зажавши клавішу Shift
 * - додати функцію відміни бронювання через 15 хвилин після того як була натиснута кнопка "Забронювати"
 * - зберігати вибрані місця в localStorage та підвантажувати їх звідти. при будь яких змінах - оновлювати localStorage
 */

const _COST = 100

function BookingSeats(config) {
  this.root = config.root
  this.rows = config.rows
  this.seats = config.seats
  this.bookedSeats = config.bookedSeats || []
  this.onSelect = config.onSelect
  this.classes = config.classes
  this.bookingBtnText = config.bookingBtnText
  this.onSubmit = config.onSubmit

  this.render = () => {
    const wrapper = document.createElement("div")
    wrapper.classList.add(this.classes.wrapper)
    this.renderSeatsMatrix(wrapper)
    wrapper.onclick = this.handleSelectSeat

    const bookBtn = document.createElement("button")
    bookBtn.classList.add(this.classes.bookingBtn)
    bookBtn.textContent = this.bookingBtnText
    bookBtn.onclick = this.handleSubmitBooking
    wrapper.append(bookBtn)
    this.root.append(wrapper)
  }

  this.renderSeatsMatrix = (parent) => {
    for (let row = 1; row <= this.rows; row++) {
      const rowEl = document.createElement("div")
      rowEl.classList.add(this.classes.row)
      for (let seat = 1; seat <= this.seats; seat++) {
        let classNames = this.classes.seat

        // if (this.bookedSeats.find(([x, y]) => x === row && y === seat)) {
        if (this.bookedSeats.find((el) => el[0] === row && el[1] === seat)) {
          classNames += ` ${this.classes.bookedSeat}`
        }

        const seatEl = `<div class="${classNames}" data-seat="${row},${seat}">${seat}</div>`
        rowEl.insertAdjacentHTML("beforeend", seatEl)
      }
      parent.append(rowEl)
    }
  }

  this.handleSelectSeat = (event) => {
    // це і є фунція, яки вилкикатиметься по кліку. тобі нетреба писати eventListener
    // розраховуй що у кожного місця буде атрибут data-seat де через кому буде вказаний номер рядку та номер місця
    const clickedSeat = event.target
    if (!clickedSeat.classList.contains(this.classes.seat)) {
      return null
    }
    const seat = clickedSeat.dataset.seat.split(",") //[1,2]

    if (!clickedSeat.classList.contains(this.classes.bookedSeat)) {
      clickedSeat.classList.add(this.classes.bookedSeat)
      if (
        !this.bookedSeats.find((el) => el[0] === seat[0] && el[1] === seat[1])
      ) {
        //el -> [1,2], seat -> [1,2]
        this.bookedSeats.push(seat)
        this.onSelect(seat)
      }
      //
    } else if (clickedSeat.classList.contains(this.classes.bookedSeat)) {
      clickedSeat.classList.remove(this.classes.bookedSeat)
      const seatIndex = this.bookedSeats.findIndex(
        (el) => el[0] === seat[0] && el[1] === seat[1]
      )
      this.bookedSeats.splice(seatIndex, 1)
    }
  }

  this.handleSubmitBooking = () => {
    console.log(this.bookedSeats)
    this.onSubmit(this.bookedSeats)
  }
}

const gogiBooking = new BookingSeats({
  root: document.querySelector("main"),
  rows: 15,
  seats: 20,
  bookedSeats: [
    [1, 2],
    [5, 3],
  ],
  onSelect: (coordinates) => console.log(coordinates),
  classes: {
    wrapper: "booking",
    row: "booking__row",
    seat: "booking__seat",
    bookedSeat: "booking__seat--selected",
    bookingBtn: "booking__btn",
  },
  bookingBtnText: "Забронювати",
  onSubmit: (bookedSeats) => console.log(bookedSeats),
})
gogiBooking.render()
