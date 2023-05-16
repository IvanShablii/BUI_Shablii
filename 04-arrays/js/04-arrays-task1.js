// Написати стрілочну функцію fill, котра повертає массив конктретної довжини с заповненим значенням.

// Arguments:
// arraySize - довжина массиву
// value - значення для наповнення
// Return value
// Массив з заданою довжиною, та заповнений переданим значенням
const fill = (arraySize, value) => {
  let arr = [];
  for (let i = 0; i < arraySize; i++) {
    arr.push(value);
  }
  return arr;
};

console.log(fill(12, "gogi"));
