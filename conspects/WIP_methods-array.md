<!-- Вимкнути prettier для рядка чи шматка коду -->
<!-- prettier-ignore -->
<!-- prettier-ignore-start -->
<!-- prettier-ignore-end -->

# Методи `array`

## [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) | [w3schools](https://www.w3schools.com/jsref/jsref_obj_array.asp) | [tc39](https://tc39.es/ecma262/#sec-properties-of-the-array-prototype-object) | [javascript.info (ukr)](https://uk.javascript.info/array-methods) | [яваскрипт.укр](http://xn--80adth0aefm3i.xn--j1amh/array)

---

> <span style="color:gray">_? - optional_, тобто необовʼязковий атрибут метода</span>

> [`.filter()`]()

> [`.find()`]()

> [`.findIndex()`]()

> [`.flat()`]()

> [`.flatMap()`]()

> [`.forEach()`]()

> [`.from()`]()

> [`.includes()`]()

> [`.indexOf()`]()

> [`.isArray()`]()

> [`.join()`]()

> [`.keys()`]()

> [`.lastIndexOf()`]()

> [`.length`]()

> [`.map()`]()

> [`.name`]()

> [`.observe()`]()

> [`.of()`]()

> [`.pop()`]()

> [`.push()`]()

> [`.reduce()`]()

> [`.reduceRight()`]()

> [`.reverse()`]()

> [`.shift()`]()

> [`.slice()`]()

> [`.some()`]()

> [`.sort()`]()

> [`.splice()`]()

> [`.toLocaleString()`]()

> [`.toSource()`]()

> [`.toString()`]()

> [`.unshift()`]()

> [`.values()`]()

## ...true / false

> [`.every(callbackFn, ?thisArg)`](#everycallbackfn-thisarg-перевіряє-чи-усі-елементи-масиву-відповідають-умові) - перевіряє чи усі елементи масиву відповідають умові

## ...index

> [`.entries()`](#entries-повертає-новий-обєкт-ітератора-масиву-array-iterator-що-містить-пари-ключ--значення-для-кожного-індексу-в-масиві) - повертає новий об'єкт ітератора масиву Array Iterator, що містить пари ключ / значення для кожного індексу в масиві, наприклад - [0, "Banana"]

## ...новий рядок

> [`.`]()

## ...новий масив

> [`.concat( ?value0, ?value1)`](#concat-value0-value1-обєднує-масив-з-масивом-або-зі-значенням-і-повертає-новий-масив) - об'єднує масив з масивом або зі значенням і повертає новий масив

## ...змінений масив

> [`.copyWithin(target, ?start, ?end)`](#copywithintarget-start-end-копіює-послідовність-елементів-масиву-всередині-масиву) - копіює послідовність елементів масиву всередині масиву і повертає змінений масив

> [`.fill(value, ?start, ?end)`](#fillvalue-start-end-заповнює-всі-елементи-масиву-від-початкового-до-кінцевого-індекса-одним-значенням) - заповнює всі елементи масиву від початкового до кінцевого індекса одним значенням

## ...елемент масиву

> [`.at( index )`](#at-index--повертає-елемент-масиву-за-вказаним-індексом) - повертає елемент масиву за вказаним індексом

## ...інші - рідко використовуються

> [`.`]()

> [`.`]()

---

---

#### `length` повертає довжину рядка

```js

```

---

#### `.at( index )` повертає елемент масиву за вказаним індексом

```js
const arr = ["one", "two", "three", "four"];
console.log(arr.at(1)); // two
console.log(arr.at(-1)); // four
console.log(arr.at(44)); // undefined
console.log(arr.at()); // one
```

---

#### `.concat( ?value0, ?value1)` об'єднує масив з масивом або зі значенням і повертає новий масив

```js
const letters = ["a", "b", "c"];
const numbers = [1, 2, 3];

const alphaNumeric = letters.concat(numbers);
console.log(alphaNumeric); // results in ['a', 'b', 'c', 1, 2, 3]
```

---

#### `.copyWithin(target, start, end)` копіює послідовність елементів масиву всередині масиву

`target` Required. The index (position) to copy the elements to.

`start` Optional. The start index (position). Default is 0.

`end` Optional. The end index (position). Default is the array length.

```js
console.log([1, 2, 3, 4, 5].copyWithin(-2));
// [1, 2, 3, 1, 2]

console.log([1, 2, 3, 4, 5].copyWithin(0, 3));
// [4, 5, 3, 4, 5]

console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));
// [4, 2, 3, 4, 5]

console.log([1, 2, 3, 4, 5].copyWithin(-2, -3, -1));
// [1, 2, 3, 3, 4]
```

---

#### `.entries()` повертає новий об'єкт ітератора масиву Array Iterator, що містить пари ключ / значення для кожного індексу в масиві

Корисний, коли потрібно працювати з обома - індексами та значеннями елементів масиву

```js
const array1 = ["a", "b", "c"];

const iterator1 = array1.entries();

console.log(iterator1.next().value);
// Expected output: Array [0, "a"]

console.log(iterator1.next().value);
// Expected output: Array [1, "b"]
```

---

#### `.every(callbackFn, ?thisArg)` перевіряє чи усі елементи масиву відповідають умові

`callbackFn` - функція, яка виконуватиметься з кожним елементом масиву
`thisArg` ( optional ) - значення, що використовується в якості this при виконанні функції callbackFn

```js
function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough); // false
[12, 54, 18, 130, 44].every(isBigEnough); // true
```

---

#### `.fill(value, ?start, ?end)` заповнює всі елементи масиву від початкового до кінцевого індекса одним значенням

```js
const array1 = [1, 2, 3, 4];

// Fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]

// Fill with 5 from position 1
console.log(array1.fill(5, 1));
// Expected output: Array [1, 5, 5, 5]

console.log(array1.fill(6));
// Expected output: Array [6, 6, 6, 6]
```

---

#### `.`

```js

```

---

#### `.`

```js

```

---

#### `.`

```js

```

---

#### `.`

```js

```

---

#### `.`

```js

```

---

#### `.`

```js

```

---

#### `.`

```js

```

---

#### `.`

```js

```

---

#### `.`

```js

```

---

#### `.`

```js

```
