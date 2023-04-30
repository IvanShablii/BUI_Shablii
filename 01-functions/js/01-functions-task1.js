/* TASK-01
Написати фунцію, яка буде визначати чи є буква в слові на визначеній позиції.

Arguments:
word - слово, на якому треба буде перевіряти наявність букви
index - позиція символу на якому треба перевірити здогадку
char - буква, наявність якої треба перевіряти в слові
Return value
true або false, залежно від того є буква в слові чи ні. 
*/


function checkLetterPosition(word, index, char) {
    // let result = char === word[index];

    // let equalOrNot = result ? " = " : " ≠ ";
   
   return char === word[index]; //+ " , " + char + equalOrNot + word[index] 
}

 alert(checkLetterPosition("gogi", 3, "f")); // false
//  alert(checkLetterPosition("gogi", 3, "i")) // true