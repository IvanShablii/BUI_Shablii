/* 
Написати функцію clearLinksPage, яка буде перевіряти всі посилання на сторінці, та в разі якщо посилання має пустий атрибут 'href', видаляти таке посилання з ромітки

Arguments:
Відсутні

Return value
відсутнє
 */

const clearLinksPage = () => {
  const links = document.querySelectorAll("a");
  links.forEach((link) => {
    if (link.attributes.href.value === "") {
      link.remove();
    }
  });
};

clearLinksPage();
