/**
 * TASK 3 [Роман, Іван]
 *
 * Відрендерити на сторінці каталог товарів.
 *
 * API - https://fakestoreapi.com/docs
 *
 * Написати панель фільтрації за категорією, рейтингом та ціною.
 */

_URL = "https://fakestoreapi.com/products";

function CatalogItem(obj) {
  this.title = obj.title;
  this.price = obj.price;
  this.description = obj.description;
  this.image = obj.image;
  this.category = obj.category;
  this.rating = obj.rating.rate;
  this.ratingCount = obj.rating.count;

  this.elements = {
    self: document.createElement("div"),
    title: document.createElement("p"),
    price: document.createElement("p"),
    description: document.createElement("p"),
    image: document.createElement("img"),
    category: document.createElement("p"),
    rating: document.createElement("p"),
    ratingCount: document.createElement("p"),
  };

  let stars = "".padEnd(Math.round(this.rating), "⭐");
  // prettier-ignore
  this.elements.title.innerText = this.title,
  this.elements.price.innerText = "$" + this.price,
  this.elements.description.innerText = this.description,
  this.elements.image.setAttribute("src", this.image),
  this.elements.category.innerText = this.category,
  this.elements.rating.innerText = 'Rating : '+this.rating + ' ' + stars,
  this.elements.ratingCount.innerText = 'Votes : ' + this.ratingCount
}

CatalogItem.prototype.render = function (parent) {
  parent.append(this.elements.self);
  this.elements.self.append(this.elements.image);
  this.elements.self.append(this.elements.title);
  this.elements.title.classList.add("title");
  this.elements.self.append(this.elements.description);
  this.elements.description.classList.add("description");
  this.elements.self.append(this.elements.price);
  this.elements.price.classList.add("price");
  this.elements.self.append(this.elements.category);
  this.elements.category.classList.add("category");
  this.elements.self.append(this.elements.rating);
  this.elements.rating.classList.add("rating");
  this.elements.self.append(this.elements.ratingCount);
  this.elements.ratingCount.classList.add("ratingCount");
};

function Catalog(url) {
  this.url = url;
  this.parent = document.querySelector(".catalog");
  this.input = document.querySelector("input");

  this.renderLoader = () => {
    const loader = document.createElement("p");
    loader.innerText = "Loading...";
    this.parent.append(loader);
  };

  this.getAllProducts = async function () {
    const response = await fetch(this.url);
    const data = await response.json();

    this.data = data;
    this.renderList();
  };

  this.render = () => {
    this.getAllProducts();
    this.renderLoader();
  };

  this.renderList = () => {
    this.parent.replaceChildren();
    this.data.forEach((element) => {
      const catalogItem = new CatalogItem(element);
      catalogItem.render(this.parent);
    });
  };
}

const myStore = new Catalog(_URL);

myStore.render();

// {
//     title: 'test product',
//     price: 13.5,
//     description: 'lorem ipsum set',
//     image: 'https://i.pravatar.cc',
//     category: 'electronic'
// }
