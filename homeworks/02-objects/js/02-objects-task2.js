/* Написати функцію profileMagazine, яка повертає обʼєкт інтернет-магазину з додатковими методами по роботі з ним.

Arguments:
label - назва магазину
schedule - розклад роботи
products - масив продуктів, наявних на складі
Return value
Обʼєкт інтернет магазину, у якого наявні одноїменні аргументам властивості, а також 2 методи - makeBlackFriday, verifySore

метод makeBlackFriday
Перебрати увесь масив товарів, для кожного товару вирахувати нову ціну, просто перемноживши стару ціну на розмір знижки.

Arguments:
discount - розмір знижки числом від 0 до 1
Return value
Відсутнє 

метод verifySore
Метод має "пробігати" по усім товарам магазину, та для кожного звіряти його кількість з таким самим товаром на складі. Якщо кількість товару у магазині не збігається - переназначити її таку ж як на складі.

Arguments:
store - массив товарів на складі
Return value
Строка зі списком назв товарів кількість яких не зпівпала з наявністю у магазині. */

/**
 *
 * @param {string} label - назва магазину
 * @param {String} schedule - розклад роботи
 * @param {Array} products - масив продуктів, наявних на складі
 * @returns
 */

function profileMagazine(label, schedule, products = []) {
  /**
   *
   * @param {Number} discount - розмір знижки числом від 0 до 1
   */

  const makeBlackFriday = function (discount) {
    if (discount <= 0 || discount >= 1) {
      console.warn("DO'H! Wrong discount argument. Expected between 0 and 1");
      return null;
    } else {
      for (const key in this.products) {
        this.products[key].price *= discount;
      }
    }
    return this; // в умові ретурт відсутній, але тоді буде undefined після виклику методу
  };

  /**
   *
   * @param {Array} store - массив товарів на складі, тоді як products - товари в магазині
   */
  const verifySore = function (store = []) {
    let unmatchedProductsString = "";
    for (const key in this.products) {
      if (store[key].count !== products[key].count) {
        unmatchedProductsString += " ," + this.products[key].title;
        this.products[key].count = store[key].count;
      }
    }
    return unmatchedProductsString;
  };

  return {
    label,
    schedule,
    products,

    makeBlackFriday,
    verifySore,
  };
}

// --- TEST DATA TO CHECK profileMagazine function---
// const stores = profileMagazine("rozetka", "8-22", [
//   { title: "phone", count: 13, price: 250 },
//   { title: "camera", count: 3, price: 200 },
// ]);
// profileMagazine("moyo", "8-22", { title: "TV", count: 25, price: 150 }),
//   profileMagazine("silpo", "8-22", {
//     title: "kanapka",
//     count: 250,
//     price: 1.5,
//   }),
//   console.log(stores);

// --- TEST DATA TO CHECK makeBlackFriday method ---
// const stores = profileMagazine("rozetka", "8-22", [
//   { title: "phone", count: 13, price: 250 },
//   { title: "camera", count: 3, price: 200 },
// ]);
// stores.makeBlackFriday(1.5);
// console.log(stores);

// --- TEST DATA TO CHECK verifySore method ---
const stores = profileMagazine("rozetka", "8-22", [
  { title: "phone", count: 13, price: 250 },
  { title: "camera", count: 3, price: 200 },
]);
stores.verifySore([
  { title: "phone", count: 77, price: 250 },
  { title: "camera", count: 8, price: 200 },
]);
console.log(stores);
