// Реалізувати наступний функціонал:

// При заватаженні сторінки перевірити localStorage, чи є значення у ключа basket, якщо там пусто, то на основі заздалегіть заготовленого масиву об'єктів відобразити список товарів
// Якщо ж у localStorage там є значення, тобто користувач уже вибирав щось в корзину до цього, то відобразити лише вибрані товари
// Написати функцію renderStorage, яка приймає аргументом "storage"(масив об'єктів), та відмальовує їх у div з айдішником root_storage
// На кожен товар додати кнопку, при натисканні на яку додавати цей товар у localStorage до ключа basket
// Примітка:
// Користувач може додати 1 товар , лише один раз
// У localStorage ключ basket - має бути масивом, тому при запису до стореджу не забуваємо користуватися методом JSON.stringify()
// Arguments функції renderStorage:
// storage - масив об'єктів товарів, де кожен обʼєкт має ключі:
// title - назва товару, тег:
// imgUrl - посилання на картинку товару, тег:
// description - невеликий опис товару, тег:
// Return value
// Відсутнє

//----------------------------------------------------------------
// Масив товарів, який має бути в корзині
const goodsObj = [
  {
    id: 1,
    imgUrl:
      "https://zelenasadyba.com.ua/wp-content/uploads/2021/02/idealni-kimnatni-roslyny-04.jpg",
    title: "ficus",
    description:
      "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit ",
  },
  {
    id: 2,
    imgUrl:
      "https://zelenasadyba.com.ua/wp-content/uploads/2021/02/idealni-kimnatni-roslyny-04.jpg",
    title: "qui esse",
    description:
      "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores ",
  },
  {
    id: 3,
    imgUrl:
      "https://zelenasadyba.com.ua/wp-content/uploads/2021/02/idealni-kimnatni-roslyny-04.jpg",
    title: "molestias",
    description:
      "et iusto sed quo iure\nvoluptatem occaecati porro eius odio et labore et velit aut",
  },
  {
    id: 4,
    imgUrl: "https://vazon.pp.ua/image/cache/catalog/News/bonsay-650x650.jpg",
    title: "occaecati",
    description:
      "ullam et saepe reiciendis voluptatem doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
  },
  {
    id: 5,
    imgUrl:
      "https://zelenasadyba.com.ua/wp-content/uploads/2021/02/idealni-kimnatni-roslyny-04.jpg",
    title: "nesciunt",
    description:
      "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
  },
  {
    id: 6,
    imgUrl:
      "https://na-dache.pro/uploads/posts/2021-05/1620532643_69-p-vazoni-dlya-tsvetov-iz-dereva-foto-77.jpg",
    title: "dolorem",
    description:
      "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis",
  },
  {
    id: 7,
    imgUrl:
      "https://zelenasadyba.com.ua/wp-content/uploads/2021/02/idealni-kimnatni-roslyny-04.jpg",
    title: "autem",
    description: "dolore placeat quibusdam ea quo vitaea sed quas",
  },
  {
    id: 8,
    imgUrl:
      "https://na-dache.pro/uploads/posts/2021-05/1620532643_69-p-vazoni-dlya-tsvetov-iz-dereva-foto-77.jpg",
    title: "dolorem",
    description: "dignissimos aperiam dolorem qui eum\nfacilis quibusdam",
  },
  {
    id: 9,
    imgUrl:
      "https://zelenasadyba.com.ua/wp-content/uploads/2021/02/idealni-kimnatni-roslyny-04.jpg",
    title: "tempora",
    description: "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam",
  },
  {
    id: 10,
    imgUrl: "https://vazon.pp.ua/image/cache/catalog/News/bonsay-650x650.jpg",
    title: "molestias",
    description:
      "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero",
  },
];

//----------------------------------------------------------------

// перевіряємо, чи є щось в локал-стореджі. Якщо нема, то записуємо
const basket = localStorage.getItem("basket");

if (basket === null) {
  localStorage.setItem("basket", JSON.stringify(goodsObj));
  console.log("localStorage");
}

// функція рендер сторедж
const parentEl = document.getElementById("root_storage");
const storage = JSON.parse(localStorage.getItem("basket"));

function renderStorage(storage) {
  storage.forEach((e) => {
    const item = document.createElement("div");
    const image = document.createElement("img");
    const title = document.createElement("h2");
    const description = document.createElement("p");

    item.append(image, title, description);
    image.src = e.imgUrl;
    title.textContent = e.title;
    description.textContent = e.description;

    parentEl.append(item);
  });
}

renderStorage(storage);
