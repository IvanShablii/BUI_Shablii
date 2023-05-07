/* Написати функцію without, котра повертає новий об'єкт без вказаних значень.
https://github.com/BUI-studies/frontend-exercises/blob/master/js-homeworks/02-objects.md

Arguments:
object - будь-який обь'єкт
propertyName - назва властивості для видалення
Return value
Обʼєкт, у якого вказана властивість має значення null.

Код для перевірки:
const data = { login: 'gogi', password: 'GloryOfUkraine', address: 'Kiev' }
console.log(without(data, 'address',)) // { login: 'gogi', password: 'GloryOfUkraine', address: null} */


function without(object, propertyName) {
    const mofieldOject = {};

    for (let key in object) {
        mofieldOject[key] = object[key];
      }
    
    mofieldOject[propertyName] = null;

    return mofieldOject;
}

const data = { login: 'gogi', password: 'GloryOfUkraine', address: 'Kiev' }
console.log(without(data, 'address')) // { login: 'gogi', password: 'GloryOfUkraine', address: null} */