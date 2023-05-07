// ----- let's get all text from all nodes
const description = document.getElementsByClassName("playlist__description")[0]
  .children;

let allText = [];
for (i = 0; i < description.length; ++i) {
  allText += description[i].innerText;
}

// ----- let's convert text into array of separate words
let allWords = allText.match(/\b(\w+)\b/g);

// ----- let's create array of words, that are used at least twice
let wordsToRecolor = allWords.filter(
  (value, index, self) => self.indexOf(value) === index
);

// ----- let's make this words red
for (i = 0; i < description.length; ++i) {
  let arr = description[i].innerHTML;
  for (j = 0; j < wordsToRecolor.length; ++j) {
    let word = wordsToRecolor[j];
    let wordRegex = new RegExp("\\b" + word + "\\b", "g"); // to replace whole words only, not part of it
    if (arr.includes(word)) {
      arr = arr.replace(
        wordRegex,
        `<span style="color:red">` + word + `</span>`
      );
    } else {
      description[i].innerHTML = arr;
    }
  }
}
