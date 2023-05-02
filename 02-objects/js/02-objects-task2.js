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

function profileMagazine( label, schedule, products = [] ) {

    /**
     * 
     * @param {Number} discount - розмір знижки числом від 0 до 1
     */
    const makeBlackFriday = function( discount ) {
        for ( let price in this.products ) {
            price *= discount;
    }; 

        return    
    };

    /**
     * 
     * @param {Array} store - массив товарів на складі
     */
    const verifySore = function( store = []) {
        for (count in products) {
            if (store.count !== products.count) {
                products.count = store.count
            }
        }
        return products
    };    

    return {
        label,
        schedule,
        products : products = {
            label,
            price,
            count,
        },

        makeBlackFriday,
        verifySore,
    };

    
}


