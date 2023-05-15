// --STEP-1-- let's get all text from all nodes

const allDescriptions = Array.from(
  document.getElementsByClassName("playlist__description")
);
// const description = Array.from(allDescriptions[0].children);

// let allText = description.map((node) => node.innerText).toString();
const allText = allDescriptions[0].innerText;

// --STEP-2-- let's convert text into array of separate words

let allWords = allText.match(/\b(\w+)\b/g);

// --STEP-3-- let's create array of words, that are used at least twice

let wordsToRecolor = allWords.filter(
  (word, _, self) =>
    self.filter((w) => w.toLowerCase() === word.toLowerCase()).length > 1
);
console.log(wordsToRecolor);

// --STEP-4-- create function to convert word to regex
function toRegexp(word) {
  return new RegExp("\\b" + word + "\\b", "g");
}
// --STEP-5-- create function to recolor words in array
function recolorString(str) {
  for (i = 0; i < wordsToRecolor.length; ++i) {
    let word = wordsToRecolor[i];
    if (str.includes(word)) {
      str = str.replace(
        toRegexp(word), // слово, яке замінимо. Без регексп збіги в частині слова теж замінить
        `<span style="color:red">` + word + `</span>`
      );
    }
  }
  return str;
}

// --STEP-6-2- replace text in nodes
allDescriptions.forEach(
  (node, index) => (node.innerHTML = recolorString(node.innerHTML))
);

// allWords
//   .map((word, _, self) => {
//     const dublicates = self.filter((w) => w === word);

//     if (dublicates.length > 1) {
//       return `<span style="color:red">${word}</span>`;
//     } else {
//       return word;
//     }
//   })
//   .join(" ");
