/* Написати функцію reverseArray, котра повертає реверснутий массив значень, але без застосування методу .reverse()

Arguments:
array - массив значень
Return value
Повертає реверснутий массив значень */

const reverseArray = (array) => {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.unshift(array[i]);
  }
  return newArr;
};

const someArrat = ["one", "two", "three", "four", "five", "six", "seven"];
console.log(reverseArray(someArrat));
