function Square(number) {
  this.number = number
  this.squareEl = document.createElement("div")
}

Square.prototype.render = function (parent) {
  this.squareEl.textContent = this.number
  this.squareEl.classList.add("square")
  this.squareEl.dataset.number = this.number
  parent.append(this.squareEl)
}
