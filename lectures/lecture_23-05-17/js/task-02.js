/**
 * TASK-02 [Антон,Рома]
 *
 * Написати компонент LeaderBoard - таблиця лідерів.
 * За прикладом попередніх компонентів.
 *
 * Основна задача - вивести список лідерів на екран.
 *
 * Один із методів цього компонента getAllPlayers - має повертати масив гравцій у форматі [{ name: 'Player 1', points: 100 }, { name: 'Player 2', points: 200 }, ...]
 * Брати масив гравців за замовчуванням із localStorage по ключу "leaderboard".
 *
 * Для цього потрібно відрендерити форму з одного інпута та кнопки "ok",
 * щоб користувач міг ввести своє імʼя.
 *
 * Після того як користувач ввів імʼя і натиснув на кнопку "ок", інпут з кнопкною стають disabled.
 * Щоб відобразити імʼя юзера у списку лідерів треба викликати метод addPlayerScore(points) компоненту LeaderBoard.
 *  */
const config = {
  parent: document.querySelector("main"),
}

function LeaderBoard(config) {
  this.elements = {
    playersList: document.createElement("ul"),
    inputField: document.createElement("input"),
    okBtn: document.createElement("button"),
    parent: config.parent,
  }
  this.leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || []
  this.currentPlayer = null

  this.handleSavePlayerName = (event) => {
    event.preventDefault()
    if (!this.elements.inputField.value) {
      return null
    }
    this.currentPlayer = this.elements.inputField.value
    this.elements.inputField.disabled = true
    this.elements.okBtn.disabled = true
  }

  this.render = () => {
    this.elements.okBtn.innerText = "OK!"
    this.elements.okBtn.setAttribute("type", "submit")

    const players = this.leaderboard.map(this.createSinglePlayerElement)

    this.elements.playersList.append(...players)

    this.elements.parent.append(
      this.elements.inputField,
      this.elements.okBtn,
      this.elements.playersList
    )
    this.elements.okBtn.addEventListener("click", this.handleSavePlayerName)
  }

  this.createSinglePlayerElement = (player) => {
    const playerListItem = document.createElement("li")
    playerListItem.innerText = `${player.name} - ${player.points}`
    return playerListItem
  }
  this.addPlayerScore = (points) => {
    // створити обʼєкт з двома властивостями  - name, points
    // додати обʼєкт до масиву leaderboard
    // відсортувати масив leaderboard за спаданням властивості points
    // перерендерити список гравців

    let playerObj = {
      name: this.currentPlayer,
      points: points,
    }

    this.leaderboard.push(playerObj)

    this.leaderboard.sort((a, b) => a.points - b.points)
    localStorage.setItem("leaderboard", JSON.stringify(this.leaderboard))

    const players = this.leaderboard.map(this.createSinglePlayerElement)
    this.elements.playersList.innerHTML = ""
    debugger
    this.elements.playersList.append(...players)
  }
}

const leaderboard = new LeaderBoard(config)
leaderboard.render()
