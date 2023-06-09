/* Вам надано два відсортовані масиви, які містять лише цілі числа. Потрібно реалізувати метод mergeArrays, який буде об'єднувати обидва масива в один, відсортований за зростанням.

Arguments:
firstArray - перший відсортований масив
secondArray - другий відсортований масив
Return value
Повертає масив цілих чисел відстортований за зростанням, що мывстить усі елементи обох масивыв переданих у параметрах.

Exmaple
mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]) --> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12] */

// вирішив скопіювати перший масив і в нього розпихати значення з другого масиву
const mergeArrays = (firstArray, secondArray) => {
  let newArr = [...firstArray];
  secondArray.forEach((e) => {
    // якщо в новому масиві ще нема такого числа...
    if (!newArr.includes(e)) {
      // шукаю індекс найближчого меншого числа... (спочатку пробував окремо find() і потім findIndex(), поки не побачив, що можна робити це одночасно і з будь-якого боку)
      let index = newArr.findLastIndex((n) => n < e);
      // запихаю нове число після меншого
      newArr.splice(++index, 0, e);
    }
  });

  return newArr;
};

console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]));
