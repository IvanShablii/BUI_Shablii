/* TASK-02
Напишіть функцію, яка перевірятиме довжину свого аргументу.

Arguments:
str - строка, довжину якої має перевіряти функція
expectedLength - очікувана довжина строки
Return value
true або false */

function checkStringLength(str, expectedLength) {
    // let a = str.length === expectedLength;

    return str.length === expectedLength;
}

alert(checkStringLength("Test", 4)) // true
// alert(checkStringLength("Test", 3)) // false
// alert(checkStringLength("Test string", 11)) // true
