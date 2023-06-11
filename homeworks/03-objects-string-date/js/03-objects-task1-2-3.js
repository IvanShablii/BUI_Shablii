/* TASK-01
Доповнити функціонал 2-ї задачі з минулої домашньої роботи. До функції profileMagazine, яка повертає обʼєкт інтернет-магазину з додатковими методами по роботі з ним додати наступні параметри та методи.

Arguments:
description - опис про магазин
Return value
Обʼєкт інтернет магазину, у якого наявні одноіменні аргументам властивості, а також 4 методи - makeBlackFriday, verifySore, ellipsisText, censorshipCheck

метод ellipsisText
Перевіряє максимальну довжину рядка, та за умови якщо рядок перевищує максимульну кількість символів - обрізає рядок та додає "..."

Arguments:
text - текст для перевірки
maxLength - розмір максимальної довжини рядка в числовому значенні
Return value
Якщо максимальна кількість символів не перевищена - рядок без змін. Якщо максимальна кількість символів перевищена - рядок з "..." замість зайвих символів.

метод censorshipCheck
Перевіряє рядок(рекламу магазину) на цензуру, тобто якщо у тексті є заборонене слово то видаляє його по всьому рядку

Arguments:
advertisement - текст(рекламний текст) для перевірки
forbiddenWord - заборонене слово
Return value
Якщо заборонене слово не знайдено - рядок без змін. Якщо заборонене слово присутнє в тексті - оновлений рядок без цього слова.
 */

/* TASK-02
Доповнити функціонал з минулої задачі. До функції profileMagazie, яка повертає обʼєкт інтернет-магазину з додатковими методами по роботі з ним додати наступні параметри та методи.

Arguments:
startSaleDate - дата початку знижок
Return value
Обʼєкт інтернет магазину, у якого наявні одноіменні аргументам властивості, а також 4 методи - makeBlackFriday, verifySore, ellisisText, checkDaytoSale

метод checkDaytoSale
Вираховує скільки днів залишилось до початку розпродажу

Arguments:
startSaleDate - дата початку розпродажу у форматі(22.07.2022)
Return value
Кількість днів яка залишилась до початку розпродажу */

/* TASK-03
Доповнити функціонал з минулої задачі. До функції profileMagazie, яка повертає обʼєкт інтернет-магазину з додатковими методами по роботі з ним додати наступні параметри та методи.

Arguments:
team - кількість працівників в магазині
Return value
Обʼєкт інтернет магазину, у якого наявні одноїменні аргументам властивості, а також 5 методів - makeBlackFriday, verifySore, ellisisText, checkDaytoSale, prepareInventory

метод prepareInventory
Вираховує чи встигає команда магазину підготувати товар до розпродажу за умови, що 1 працівник в день може підготовляти лише 10 одиниць товару.

Arguments:
немає

Return value
Значення - true, в разі що магазин встигає до розпродажу, та значення - false, якщо ні */

/**
 *
 * @param {string} label - name of magazine
 * @param {string} schedule - hours of work schedule
 * @param {Array} products - array of products with properties title, count, price
 * @param {string} description - some description
 * @param {string} startSaleDate - sales date in format DD-MM-YYYY
 * @param {number} team - number of team members
 * @returns
 */
const profileMagazine = (
  label,
  schedule,
  products,
  description,
  startSaleDate,
  team
) => {
  const makeBlackFriday = (discount) => {
    if (discount <= 0 || discount >= 1) {
      console.warn("DO'H! Wrong discount argument. Expected between 0 and 1");
      return null;
    } else {
      for (const key in this.products) {
        this.products[key].price *= discount;
      }
    }
    return this; // в умові ретурн відсутній, але тоді буде undefined після виклику методу
  };

  const verifySore = (store) => {
    let unmatchedProductsString = "";
    for (const key in this.products) {
      if (store[key].count !== products[key].count) {
        unmatchedProductsString += " ," + this.products[key].title;
        this.products[key].count = store[key].count;
      }
    }
    return unmatchedProductsString;
  };

  // TASK-01
  const ellipsisText = (text, maxLength) => {
    if (text.length > maxLength) {
      text = text.substring(0, maxLength) + "...";
    }
    return text;
  };

  // TASK-01
  const censorshipCheck = (advertisement, forbiddenWord) => {
    if (advertisement.includes(forbiddenWord)) {
      const regex = new RegExp(
        `\\b\\W${forbiddenWord}\\b|\\b${forbiddenWord}\\W\\b`,
        "gi"
      );
      advertisement = advertisement.replace(regex, "");
    }
    return advertisement;
  };

  // TASK-02
  const checkDaytoSale = (startSaleDate) => {
    const saleDate = startSaleDate.split(".").reverse().join("-");
    const saleDateMs = new Date(saleDate).getTime();
    const now = Date.now();
    if (saleDateMs < now) {
      return (daysToSale = 0); // вирішив додати перевірку чи розпродаж не минув
    } else {
      const timeDiff = Math.abs(saleDateMs - now);
      const daysToSale = Math.ceil(timeDiff / (1000 * 3600 * 24));
      return daysToSale;
    }
  };

  // TASK-03
  const prepareInventory = () => {
    // debugger;
    const productsCount = products.map((e) => e.count);
    const totalProducts = productsCount.reduce((sum, n) => sum + n, 0);
    return team * 10 * checkDaytoSale(startSaleDate) > totalProducts;
  };

  return {
    label,
    schedule,
    products,
    description,
    startSaleDate,
    team,

    makeBlackFriday,
    verifySore,
    ellipsisText,
    censorshipCheck,
    checkDaytoSale,
    prepareInventory,
  };
};

// --- TEST DATA TO CHECK verifySore method ---
const stores = profileMagazine(
  "rozetka",
  "8-22",
  [
    { title: "phone", count: 13, price: 250 },
    { title: "camera", count: 83, price: 200 },
  ],
  "this is the description",
  "22.06.2023",
  3
);

// console.log(stores);
// stores.verifySore([
//   { title: "phone", count: 77, price: 250 },
//   { title: "camera", count: 8, price: 200 },
// ]);
// console.log(stores);
// console.log("ellipsisText: " + stores.ellipsisText("1234567890", 4));
console.log(
  "Днів до розпродажу: " + stores.checkDaytoSale(stores.startSaleDate)
);
console.log("встигає команда магазину підготувати товар до розпродажу?");
console.log(stores.prepareInventory());
