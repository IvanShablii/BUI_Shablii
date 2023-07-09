const LEVELS = [
  {
    width: 3,
    squares: 3 * 3,
    repeat: 4,
  },
  {
    width: 4,
    squares: 4 * 4,
    repeat: 4,
  },
  {
    width: 5,
    squares: 5 * 5,
    repeat: 5,
  },
  {
    width: 6,
    squares: 6 * 6,
    repeat: 5,
  },
  {
    width: 7,
    squares: 7 * 7,
    repeat: 6,
  },
  {
    width: 10,
    squares: 10 * 10,
    repeat: 12,
  },
]

//----------------------------------------------------------------
// - додати на екран форму для вводу нікнейму.

function Login() {
  this.formWrapper = document.createElement("form")
  this.inputWrapper = document.createElement("div")
  this.nameInput = document.createElement("input")
  this.inputLabel = document.createElement("label")
  this.okButton = document.createElement("input")
  this.okButtonWrapper = document.createElement("div")
}

Login.prototype.render = function (parent) {
  this.inputLabel.textContent = "Give me your name"
  this.nameInput.type = "text"
  this.nameInput.name = "text"
  this.inputWrapper.append(this.inputLabel, this.nameInput)
  this.okButtonWrapper.append(this.okButton)
  this.okButton.type = "submit"
  this.okButton.value = "OK"
  this.formWrapper.append(this.inputWrapper, this.okButtonWrapper)

  // add event-listener
  this.okButton.addEventListener("click", () => this.handleSubmit(parent))

  parent.append(this.formWrapper)
}

Login.prototype.handleSubmit = function (parent) {
  let povtorGameSaves =
    JSON.parse(localStorage.getItem("povtorGameSaves")) || [] // get all saves from localStorage
  let currentUser = povtorGameSaves.find(
    (user) => user.username === this.nameInput.value
  )
  if (!currentUser) {
    currentUser = { username: this.nameInput.value, level: 0 }
    povtorGameSaves.push(currentUser)
    localStorage.setItem("povtorGameSaves", JSON.stringify(povtorGameSaves)) // записуємо юзера в локалсторедж
  }

  const newGame = new PovtorGame(LEVELS, currentUser)
  this.formWrapper.remove()
  newGame.render(parent)
}

// - якщо гравець ввів нікнейм, який уже записаний в localStorage, то показувати йому останній рівень на якому він зупинився

// - починати гру тільки після того, як користувач ввів нікнейм та натиснув "ок"

// - зберігати нікнейм гравця та рівень на якому він зупинився в localStorage

// const parent = document.body
// const login = new Login()

// const newGame = new PovtorGame(LEVELS)
// newGame.render(parent)

const form = new Login()
form.render(document.querySelector("main"))
