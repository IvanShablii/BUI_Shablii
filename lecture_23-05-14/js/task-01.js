/**
 * TASK-01 [Роман, Антон]
 *
 * Написати коспонент LoginForm
 *
 * Функції-конструктор приймає один аргумент config, що має такі властивості:
 * - root - елемент, в який буде рендеритися форма
 * - onSubmit - функція, яка буде викликатися при сабміті форми. Приймає один аргумент - дані форми.
 * - errorMessage - повідомлення про помилку, яке буде виводитися для не валідних інпутів
 * - selectors - об'єкт, що містить CSS-селектори для кожного елементу форми
 *
 * В формі має бути 2 інпути - імейл та пароль.
 * Правила валідації для імейла:
 * - обов'язкове поле
 * - не менше 6 символів
 * - має бути @
 * - до і після @ має бути не менше 2 символів
 *
 * Правила валідації для пароля:
 * - обов'язкове поле
 * - не менше 8 символів
 * - має бути хоча б одна цифра
 *
 * Інпути мають валідуватися після кожного введеного символу.
 * Якщо значення в інпуті не пройшло валідацію - ренерити над повідомлення про помилку та самому інпуту додавати класс з модифікатором помилки.
 *
 * ЗАДАЧА З ЗІРОЧКОЮ:
 * - в функції onSubmit яка передається в конфіг, дописати 2-секундний таймаут, після якого в localStorage буде записано користувацькі дані з форми
 * - якшо в інпутах все валідно, то після сабміту ховати форму та показувати заголовок "Welcome"
 * - при наступному відкритті сторінки, якщо в localStorage є дані - на сторінці замість має зʼявитись заголовок "Welcome"
 */

const config = {
  root: document.querySelector("main"),
  onSubmit: () => {},
  errorMessage: "Invalid input",
  selectors: {
    form: ".login",
    input: ".login__input",
    inputInvalid: ".login__input--invalid",
    mailInvalidInput: ".login__error--email",
    passInvalidInput: ".login__error--password",
    error: ".login__error",
    submit: ".login__button",
  },
}

function LoginForm(config) {
  this.root = config.root
  this.onSubmit = config.onSubmit
  this.errorMessage = config.errorMessage
  this.selectors = config.selectors
  this.inputInvalid = config.selectors.inputInvalid

  this.elemetns = {
    email: document.querySelector(`${this.selectors.input}[type="email"]`),
    password: document.querySelector(
      `${this.selectors.input}[type="password"]`
    ),
    submitBtn: document.querySelector(this.selectors.submit),
    mailInvalidMsg: document.querySelector(this.selectors.mailInvalidInput),
    passInvalidMsg: document.querySelector(this.selectors.passInvalidInput),
    parent: document.querySelector(this.selectors.form),
  }

  this.validateMail = (email) => {
    const mailregExp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    return mailregExp.test(email) //містер хитра срака!
  }

  this.validatePassword = (password) => {
    const digitsRegExp = /[0-9]/
    return password.length > 8 && digitsRegExp.test(password)
  }

  this.validate = (inputType, event) => {
    if (inputType === "password") {
      return this.validatePassword(event.target.value) // true / false
    } else if (inputType === "email") {
      return this.validateMail(event.target.value) // true / false
    }
  }

  this.elemetns.password.addEventListener("keyup", (e) => {
    if (!this.validate("password", e)) {
      this.elemetns.passInvalidMsg.textContent = this.errorMessage
      this.elemetns.submitBtn.disabled = true
      this.elemetns.password.classList.add(this.inputInvalid.substring(1))
    } else {
      this.elemetns.submitBtn.disabled = false
      this.elemetns.passInvalidMsg.textContent = ""
      this.elemetns.password.classList.remove(this.inputInvalid.substring(1))
    }
  })

  this.elemetns.email.addEventListener("keyup", (e) => {
    if (!this.validate("email", e)) {
      this.elemetns.mailInvalidMsg.textContent = this.errorMessage
      this.elemetns.submitBtn.disabled = true
      this.elemetns.email.classList.add(this.inputInvalid.substring(1))
    } else {
      this.elemetns.submitBtn.disabled = false
      this.elemetns.mailInvalidMsg.textContent = ""
      this.elemetns.email.classList.remove(this.inputInvalid.substring(1))
    }
  })

  this.handleSubmit = (e) => {}

  this.elemetns.submitBtn.addEventListener("click", (event) => {
    this.handleSubmit(event)
  })
}

const gogiLogin = new LoginForm(config)
