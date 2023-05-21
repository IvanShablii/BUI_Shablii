<!-- Вимкнути prettier для рядка чи шматка коду -->
<!-- prettier-ignore -->
<!-- prettier-ignore-start -->
<!-- prettier-ignore-end -->

# Методи `string`

## [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | [w3schools](https://www.w3schools.com/jsref/jsref_obj_string.asp) | [tc39](https://tc39.es/ecma262/#sec-properties-of-the-string-prototype-object)

---

> <span style="color:gray">_? - optional_, тобто необовʼязковий атрибут метода</span>

> [`.length`](#length-повертає-довжину-рядка) - повертає довжину рядка

> [`.charAt(index)`](#charatindex-повертає-символ-за-вказаним-індексом) - повертає символ за вказаним індексом

## ...true / false

> [`.includes(searchString, ?position)`](#includessearchstring-position-перевіряє-чи-містить-текст-фразу-та-повертає-true-чи-false) - перевіряє чи містить текст фразу та повертає true чи false. Case sensitive пошук

> [`.startsWith(searchString, ?position)`](#startswith-перевіряє-чи-рядок-або-його-відрізок-починається-з-конкретної-фрази) - перевіряє чи рядок або його відрізок починається з конкретної фрази

> [`.endsWith(searchString, ?endPosition)`](#endswithsearchstring-endposition-перевіряє-чи-рядок-або-його-відрізок-закінчується-конкретною-фразою) - перевіряє чи рядок або його відрізок закінчується конкретною фразою

> [`.isWellFormed()`](#iswellformed-перевіряє-чи-всі-символи-у-рядку-мають-формат-utf-16) - перевіряє, чи всі символи у рядку мають формат UTF-16

## ...index

> [`.indexOf(searchString, ?position)`](#indexofsearchstring-position-шукає-searchstring-в-рядку-та-повертає-індекс-з-якого-починається-searchstring-перший) - шукає substring в рядку та повертає індекс, з якого починається substring (перший)

> [`.lastIndexOf(searchString, ?position)`](#lastindexofsearchstring-position---повертає-перший-індекс-першої-searchstring-з-кінця) - повертає перший індекс першої searchString з кінця

## ...новий рядок

> [`.at(index)`]() - повертає рядок (символ), який складається з однієї одиниці коду UTF-16 за вказаним індексом

> [`.concat(str1, str2, ...)`](#concatstr1-str2--обєднує-два-або-більше-рядки) - об'єднує два або більше рядки

> [`.repeat(count)`](#repeat-повертає-новий-рядок-з-текстом-клонованим-n-разів) копіює текст N разів у новий рядок

> [`.replace(searchValue, replaceValue)`](#replacesearchvalue-replacevalue-замінює-одну-кілька-чи-всі-searchvalue-на-replacevalue-в-рядку) - замінює одну, кілька чи всі searchValue на replaceValue в рядку

> [`.substring(startIndex, ?endIndex)`](#substringstartindex-endindex-повертає-substring-від-startindex-до-endindex-не-включаючи-endindex) - повертає substring від _startIndex_ до _endIndex_ (не включаючи _endIndex_)

> [`.toLowerCase()`](#tolowercase-повертає-рядок-у-нижньому-регістрі) - повертає рядок у нижньому регістрі

> > [`.toLocaleLowerCase(?locales)`](#tolocalelowercase-новий-рядок-у-нижньому-регістрі-з-врахуванням-налаштувань-мови-браузера) - для окремих мов

> [`.toUpperCase()`](#touppercase-повертає-рядок-у-верхньому-регістрі) - повертає рядок у верхньому регістрі

> > [`.toLocaleUpperCase(?locales)`]() - для окремих мов

> [`.trim()`](#trim-видаляє-пробіли-з-початку-та-кінця-рядка) - видаляє пробіли з початку та кінця рядка

> [`.trimStart()` `.trimLeft()`](#trimstart-видаляє-пробіли-на-початку-рядка) - видаляє пробіли на початку рядка

> [`.trimEnd()` `.trimRight()`](#trimend-видаляє-пробіли-на-початку-рядка) - видаляє пробіли у кінці рядка

> [`.padStart(targetLength, ?padString)`](#padstarttargetlength-padstring-доповнити-рядок-символами-спереду-до-певної-довжини) - доповнити рядок на початку до заданої довжини

> [`.padEnd(targetLength, ?padString)`](#padendtargetlength-padstring-доповнити-рядок-символами-у-кінці-до-певної-довжини) - доповнити рядок у кінці до заданої довжини

## ...масив

> [`.split(separator)`](#splitseparator-розбиває-рядок-на-масив-підрядків-за-вказаним-роздільником) - розбиває рядок на масив підрядків за вказаним роздільником

> [`.match(regexp)`](#matchregexp-повертає-масив-з-першим-чи-усіма-збігами) - повертає масив з першим чи усіма збігами

> [`.matchAll(regexp)`](#matchallregexp-повертає-обєкт-ітератора-який-містить-інформацію-про-всі-збіги) - овертає ОБʼЄКТ ітератора, який містить інформацію про всі збіги

## ...статичні методи

> [`String.raw`](#stringraw-якщо-треба-зберегти-необроблений-текст) - текст не форматується. Зазвичай для зберігання посилань зі зворотнім слешем. Наприклад, шлях до файлу на компі.

> [`String.fromCodePoint(num1, num2, /* …, */ numN)`](#stringfromcodepointnum1-num2----numn-повертає-рядок-створений-з-послідовних-кодів-юнікод) - повертає рядок створений з послідовних кодів Юнікод

> [`String.fromCharCode(num1, num2, /* …, */ numN)`](#stringfromcharcodenum1-num2----numn-повертає-рядок-створений-з-послідовних-кодів-юнікод) повертає рядок створений з послідовних кодів Юнікод UTF-16

## ...інші - рідко використовуються

> [`.valueOf()`](#valueof-конвертує-рядок-у-примітив) - конвертує рядок та обʼєкт рядка у примітив. В більшості випадків JS робить це автоматично

> [`.toString()`](#tostring-конвертує-обʼєкт-чи-інший-тип-у-рядок) - конвертує обʼєкт чи інший тип у текст

> [`.normalize(?form)`]() - деякі символи можуть виглядати однаково, але в юнікод бути різними і навіть мати різну довжину. Цей метод приводить їх до одного формату.

> [`.localeCompare(compareString, ?locales, ?options)`](#localecompare-для-порівняння-двох-рядків-чи-символів-з-урахуванням-локалізації) - для порівняння двох рядків чи букв з урахуванням локалізації. Повертає -1, 0 або 1. Можна використовувати для сортування масивів у мовах, де є букви з діакретичними знаками

> [`.codePointAt(pos)`](#codepointatpos-повертає-невідємне-ціле-число-яке-є-закодованим-в-utf-16-значенням-кодової-точки) - повертає невід'ємне ціле число, яке є закодованим в UTF-16 значенням кодової точки

> [`.charCodeAt(index)`](#charcodeatindex-повертає-код-символу) - повертає код символу

---

---

#### `length` повертає довжину рядка

```js
var str = "Hello, World!";
console.log(str.length); // Виведе 13
```

---

#### `charAt(index)` повертає символ за вказаним індексом

```js
var str = "Hello, World!";
console.log(str.charAt(1)); // Виведе 'e'
console.log(str.charAt(25)); // Виведе undefined
```

---

#### `concat(str1, str2, ...)` об'єднує два або більше рядки

```js
var str1 = "Hello";
var str2 = "World";
var str3 = str1.concat(", ", str2);
console.log(str3); // Виведе 'Hello, World'
```

---

#### `indexOf(searchString, ?position)` шукає _searchString_ в рядку та повертає індекс, з якого починається _searchString_ (перший)

```js
var str = "Hello, World!";
console.log(str.indexOf("World")); // Виведе 7
console.log(str.indexOf("not-in-string")); // Виведе -1
```

---

#### `lastIndexOf(searchString, position)` - повертає перший індекс першої searchString з кінця

searchString - фраза чи символ, який шукає
position (optional) - з якого починається пошук

```js
const paragraph =
  "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";

const searchTerm = "dog";

console.log(
  `The index of the first "${searchTerm}" from the end is ${paragraph.lastIndexOf(
    searchTerm
  )}`
);
// Expected output: "The index of the first "dog" from the end is 52"
```

---

#### `substring(startIndex, endIndex)` Повертає substring від startIndex до endIndex (не включаючи endIndex)

```js
var str = "Hello, World!";
console.log(str.substring(7, 12)); // Виведе 'World'
```

---

#### `toLowerCase()` повертає рядок у нижньому регістрі

```js
var str = "Hello, World!";
console.log(str.toLowerCase()); // Виведе 'hello, world!'
```

---

#### `toLocaleLowerCase()` новий рядок у нижньому регістрі з врахуванням налаштувань мови браузера

```js
const dotted = "İstanbul";

console.log(`EN-US: ${dotted.toLocaleLowerCase("en-US")}`);
// Expected output: "i̇stanbul"

console.log(`TR: ${dotted.toLocaleLowerCase("tr")}`);
// Expected output: "istanbul"
```

    The toLocaleLowerCase() method converts a string to lowercase letters, using current locale.

    The locale is based on the language settings of the browser.

    The toLocaleLowerCase() method does not change the original string.

    The toLocaleLowerCase() returns the same result as toLowerCase(), except for locales that conflict with the regular Unicode case mappings (such as Turkish).

---

#### `toLocaleUpperCase()` новий рядок у верхньому регістрі з врахуванням налаштувань мови браузера

    for some locales, such as Turkish, whose case mappings do not follow the default case mappings in Unicode

---

#### `toUpperCase()` повертає рядок у верхньому регістрі

```js
var str = "Hello, World!";
console.log(str.toUpperCase()); // Виведе 'HELLO, WORLD!'
```

---

#### `split(separator)` розбиває рядок на масив підрядків за вказаним роздільником

```js
var str = "Hello, World!";
var words = str.split(", ");
console.log(words); // Виведе ['Hello', 'World!']
```

---

#### `replace(searchValue, replaceValue)` замінює одну, кілька чи всі searchValue на replaceValue в рядку

    searchValue - рядок, RegExp або обʼєкт. Наприклад, Symbol.replace
    replaceValue - рядок чи функція

```js
var str = "Hello, World!";
var newStr = str.replace("World", "JavaScript");
console.log(newStr); // Виведе 'Hello, JavaScript!'
```

---

#### `trim()` видаляє пробіли з початку та кінця рядка

```js
var str = "   Hello, World!   ";
console.log(str.trim()); // Виведе 'Hello, World!'
```

---

#### `trimStart()` видаляє пробіли на початку рядка

Також має аліас `trimLeft()`, який працює так само.

```js
const str = "   Hello world!   ";
console.log(`'` + str.trimStart() + `'`); // 'Hello world!   '
console.log(`'` + str.trimLeft() + `'`); // 'Hello world!   '
```

---

#### `trimEnd()` видаляє пробіли на початку рядка

Також має аліас `trimRight()`, який працює так само.

```js
const str = "   Hello world!   ";
console.log(`'` + str.trimEnd() + `'`); // '   Hello world!'
console.log(`'` + str.trimRight() + `'`); // '   Hello world!'
```

---

#### `valueOf()` конвертує рядок у примітив

Загалом, метод `valueOf()` на рядках в більшості ситуацій не використовується, оскільки _JavaScript_ забезпечує автоматичне перетворення типів.

```js
let str = new String(15);
console.log(typeof str); // object

let value = str.valueOf();
console.log(typeof value); // string
```

---

#### `toString()` конвертує обʼєкт чи інший тип у рядок

```js
let str = 15;
console.log(typeof str); // number
let str2 = str.toString();
console.log(typeof str2); // string
```

    Every JavaScript object has a toString() method.

    The toString() method is used internally by JavaScript when an object needs to be displayed as a text (like in HTML), or when an object needs to be used as a string.

    Normally, you will not use it in your own code.

---

#### `startsWith()` перевіряє чи рядок або його відрізок починається з конкретної фрази

```js
const str = "To be, or not to be, that is the question.";

console.log(str.startsWith("To be")); // true
console.log(str.startsWith("not to be")); // false
console.log(str.startsWith("not to be", 10)); // true
```

---

#### `endsWith(searchString, endPosition)` перевіряє чи рядок або його відрізок закінчується конкретною фразою

```js
const str1 = "Cats are the best!";

console.log(str1.endsWith("best!"));
// Expected output: true

console.log(str1.endsWith("best", 17));
// Expected output: true

const str2 = "Is this a question?";

console.log(str2.endsWith("question"));
// Expected output: false
```

---

#### `repeat()` повертає новий рядок з текстом, клонованим N разів

    Якщо у рядку число - видасть помилку, що .repeat is not a function

```js
const mood = "Happy! ";

console.log(`I feel ${mood.repeat(3)}`);
// Expected output: "I feel Happy! Happy! Happy! "
```

---

#### `String.raw` якщо треба зберегти необроблений текст

```js
var path = String.raw`C:\Users\Name\Documents`;

console.log(path); // Виведе "C:\Users\Name\Documents"
```

---

#### `padStart(targetLength, padString)` доповнити рядок символами спереду до певної довжини

    targetLength - довжина рядка на виході
    padString (optional) - символ чи текст на який замінити. По дефолту це пробіл

```js
const str1 = "5";

console.log(str1.padStart(2, "0"));
// Expected output: "05"

const fullNumber = "2034399002125581";
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, "*");

console.log(maskedNumber);
// Expected output: "************5581"
```

---

#### `padEnd(targetLength, padString)` доповнити рядок символами у кінці до певної довжини

    targetLength - довжина рядка на виході
    padString (optional) - символ чи текст на який замінити. По дефолту це пробіл

```js
"abc".padEnd(10); // "abc       "
"abc".padEnd(10, "foo"); // "abcfoofoof"
"abc".padEnd(6, "123456"); // "abc123"
"abc".padEnd(1); // "abc"
```

---

#### `normalize()` приводить до одного формату символи, для яких є кілька різних юнікод значень

```js
const name1 = "\u0041\u006d\u00e9\u006c\u0069\u0065";
const name2 = "\u0041\u006d\u0065\u0301\u006c\u0069\u0065";

console.log(`${name1}, ${name2}`);
// Expected output: "Amélie, Amélie"
console.log(name1 === name2);
// Expected output: false
console.log(name1.length === name2.length);
// Expected output: false

const name1NFC = name1.normalize("NFC");
const name2NFC = name2.normalize("NFC");

console.log(`${name1NFC}, ${name2NFC}`);
// Expected output: "Amélie, Amélie"
console.log(name1NFC === name2NFC);
// Expected output: true
console.log(name1NFC.length === name2NFC.length);
// Expected output: true
```

---

#### `match(regexp)` повертає масив з першим чи усіма збігами

    'g' флаг у regexp означає 'global' і якщо він вказаний, то метод вибере усі збіги. Без нього тільки перший.

```js
const paragraph = "The quick brown fox jumps over the lazy dog. It barked.";
const regex = /[A-Z]/g;
const found = paragraph.match(regex);

console.log(found);
// Expected output: Array ["T", "I"]
```

---

#### `matchAll(regexp)` повертає об'єкт ітератора, який містить інформацію про всі збіги

```js
const regexp = /t(e)(st(\d?))/g;
const str = "test1test2";

const array = [...str.matchAll(regexp)];

console.log(array[0]);
// Expected output: Array ["test1", "e", "st1", "1"]

console.log(array[1]);
// Expected output: Array ["test2", "e", "st2", "2"]
```

    (gpt3.5) Важливо відзначити, що метод matchAll() повертає ітератор, і для доступу до результатів збігів потрібно використовувати цикл for...of, forEach() або інші методи ітерації.

    Наприклад, якщо вам потрібно знайти всі входження чисел у рядку, ви можете використати matchAll() для отримання ітератора з усіма збігами, а потім перебрати їх:

```js
var str = "Numbers: 42, 15, 7";
var regex = /\d+/g;
var matchesIterator = str.matchAll(regex);

for (let match of matchesIterator) {
  console.log(match[0]); // Виведе '42', '15', '7'
}
```

---

#### `localeCompare()` для порівняння двох рядків чи символів з урахуванням локалізації

[flaviocopes.com - Find out all about the JavaScript localeCompare() method of a string](https://flaviocopes.com/javascript-string-localecompare/) | [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare)

The locale is determined by the current locale, or you can pass it as a second argument:

```js 'a'.localeCompare('à') //-1
"a".localeCompare("à", "it-IT"); //-1
```

The most common use case is for ordering arrays:

```js
["a", "b", "c", "d"].sort((a, b) => a.localeCompare(b));
```

Якщо в тексті багато такого, то може пригодитися. Це різні варіанти літери А : Å å Ǻ ǻ Ḁ ḁ ẚ Ă ă Ặ ặ Ắ ắ Ằ ằ Ẳ ẳ Ẵ ẵ Ȃ ȃ Â â Ậ ậ Ấ ấ Ầ ầ Ẫ ẫ Ẩ ẩ Ả ả Ǎ ǎ Ⱥ ⱥ Ȧ ȧ Ǡ ǡ Ạ ạ Ä ä Ǟ ǟ À à Ȁ ȁ Á á Ā ā Ā̀ ā̀ Ã ã Ą ą Ą́ ą́ Ą̃ ą̃ A̲ a̲ ᶏ

```js
const a = "réservé"; // With accents, lowercase
const b = "RESERVE"; // No accents, uppercase

console.log(a.localeCompare(b));
// Expected output: 1
console.log(a.localeCompare(b, "en", { sensitivity: "base" }));
// Expected output: 0
```

---

#### `isWellFormed()` перевіряє, чи всі символи у рядку мають формат UTF-16

```js
const strings = [
  // Lone high surrogate
  "ab\uD800",
  "ab\uD800c",
  // Lone low surrogate
  "\uDFFFab",
  "c\uDFFFab",
  // Well-formed
  "abc",
  "ab\uD83D\uDE04c",
];

for (const str of strings) {
  console.log(str.isWellFormed());
}
// Logs:
// false
// false
// false
// false
// true
// true
```

---

#### `includes(searchString, position)` перевіряє чи містить текст фразу та повертає true чи false

```js
"Blue Whale".includes("blue"); // returns false

"Blue Whale".toLowerCase().includes("blue"); // returns true
```

---

#### `String.fromCodePoint(num1, num2, /* …, */ numN)` повертає рядок створений з послідовних кодів Юнікод

```js
console.log(String.fromCodePoint(9731, 9733, 9842, 0x2f804));
// Expected output: "☃★♲你"
```

---

#### `String.fromCharCode(num1, num2, /* …, */ numN)` повертає рядок створений з послідовних кодів Юнікод

    n1, ..., nm - числа кодів символів Unicode UCS-2 (UTF-16, від 0 до 65535).

    Якщо необхідно отримати рядок з кодом більше за 65535 використовуйте метод String.fromCodePoint().

```js
console.log(String.fromCharCode(189, 43, 190, 61));
// Expected output: "½+¾="
```

---

#### `codePointAt(pos)` повертає невід'ємне ціле число, яке є закодованим в UTF-16 значенням кодової точки

    If there is no element at pos, returns undefined.
    If the element at pos is a UTF-16 high surrogate, returns the code point of the surrogate pair.
    If the element at pos is a UTF-16 low surrogate, returns only the low surrogate code point.

```js
"ABC".codePointAt(0); // 65
"ABC".codePointAt(0).toString(16); // 41

"😍".codePointAt(0); // 128525
"\ud83d\ude0d".codePointAt(0); // 128525
"\ud83d\ude0d".codePointAt(0).toString(16); // 1f60d

"😍".codePointAt(1); // 56845
"\ud83d\ude0d".codePointAt(1); // 56845
"\ud83d\ude0d".codePointAt(1).toString(16); // de0d

"ABC".codePointAt(42); // undefined
```

---

#### `charCodeAt(index)` повертає код символу

    Кодові точки Юнікода простягаються в діапазоні від 0 до 1114111 (0x10FFFF). Перші 128 кодових точок Юнікода безпосередньо відображаються в кодування ASCII.

    charCodeAt() повертає NaN, якщо зазначений індекс менше нуля або більше довжини рядка.

    Різниця між charCodeAt і charAt в тому що charAt повертає символ а charCodeAt код символу.

```js
"abc".charCodeAt(0); // повертає 97 код Unicode символу "a"

"abc".charAt(0); //повертає рядок (символ) "a"
```

---

#### `at(index)` повертає рядок (символ), який складається з однієї одиниці коду UTF-16 за вказаним індексом

```js
const sentence = "The quick brown fox jumps over the lazy dog.";

let index = 5;

console.log(
  `Using an index of ${index} the character returned is ${sentence.at(index)}`
);
// Expected output: "Using an index of 5 the character returned is u"

index = -4;

console.log(
  `Using an index of ${index} the character returned is ${sentence.at(index)}`
);
// Expected output: "Using an index of -4 the character returned is d"
```
