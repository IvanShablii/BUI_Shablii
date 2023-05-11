// --STEP-1-- let's get all text from all nodes

const description = Array.from(
  document.getElementsByClassName("playlist__description")[0].children
);

let allText = description.map((node) => node.innerText).toString();

// --STEP-2-- let's convert text into array of separate words

let allWords = allText.match(/\b(\w+)\b/g);

// --STEP-3-- let's create array of words, that are used at least twice

let wordsToRecolor = allWords.filter(
  (value, index, self) => self.indexOf(value) === index
);

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

// --STEP-6-1- get innerHTML from nodes and store it in arr
let arr = description.map((node) => node.innerHTML);

// --STEP-6-2- recolor each word in each node if it repeats at least once
let newArr = arr.map((node) => recolorString(node));

// --STEP-6-2- replace text in nodes
description.map((node, index) => (node.innerHTML = newArr[index]));
