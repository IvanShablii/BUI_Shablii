/* Написати функцію reverseArray, котра повертає реверснутий массив значень, але без застосування методу .reverse()

Arguments:
array - массив значень
Return value
Повертає реверснутий массив значень */

const reverseArray = (array) => {
  let newArr = [];
  array.forEach(a => newArr.unshift(a))
  return newArr;
};

const someArrat = ["one", "two", "three", "four", "five", "six", "seven"];
console.log(reverseArray(someArrat));
