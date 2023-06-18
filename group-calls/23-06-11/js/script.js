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
  this.filtersParent = document.querySelector(".filters-list");

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
    this.renderFilters();
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

// Roma
Catalog.prototype.renderFilters = function () {
  const listOfCategories = [];
  this.data.forEach((e) => {
    if (!listOfCategories.includes(e.category)) {
      listOfCategories.push(e.category);
    }
  });

  const filtersWrapper = document.createElement("fieldset");
  const filterBtn = document.createElement("button");
  filterBtn.innerText = "Filter";
  const resetBtn = document.createElement("button");
  resetBtn.innerText = "Reset sorting";

  resetBtn.addEventListener("click", (e) => {
    e.preventDefault();
    this.renderList(this.parent);
    const checkBoxList = document.querySelectorAll('input[type="checkbox"]');
    checkBoxList.forEach((e) => {
      e.checked = false;
    });
  });

  filterBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const checkBoxList = document.querySelectorAll('input[type="checkbox"]');
    const checkedItems = [];
    checkBoxList.forEach((e) => {
      if (e.checked) {
        checkedItems.push(e.value);
      }
    });
    const filteredProducts = this.data.filter((product) =>
      checkedItems.includes(product.category)
    );

    this.parent.replaceChildren();

    filteredProducts.forEach((element) => {
      const catalogItem = new CatalogItem(element);
      catalogItem.render(this.parent);
    });
  });

  const filtersWrapperLegend = document.createElement("legend");
  filtersWrapperLegend.innerText = "Choose category:";
  filtersWrapper.prepend(filtersWrapperLegend);

  listOfCategories.forEach((el) => {
    const categoryCheckboxContainer = document.createElement("div");
    const categotyFilterCheckBox = document.createElement("input");
    categotyFilterCheckBox.setAttribute("type", "checkbox");
    categotyFilterCheckBox.setAttribute("value", `${el}`);
    categotyFilterCheckBox.setAttribute("id", `${el}`);
    const categoryCheckBoxLable = document.createElement("label");
    categoryCheckBoxLable.setAttribute("for", `${el}`);
    categoryCheckBoxLable.innerText = el;

    categoryCheckboxContainer.append(
      categotyFilterCheckBox,
      categoryCheckBoxLable
    );
    filtersWrapper.append(categoryCheckboxContainer);
  });
  filtersWrapper.append(filterBtn, resetBtn);
  this.filtersParent.append(filtersWrapper);
};

// Ivan

  const ratingFiltersWrapper = document.createElement("fieldset");
  const filterBtn = document.createElement("button");
  filterBtn.innerText = "Filter";
  const resetBtn = document.createElement("button");
  resetBtn.innerText = "Reset sorting";

  resetBtn.addEventListener("click", (e) => {
    e.preventDefault();
    this.renderList(this.parent);
    const ratingList = document.querySelectorAll('input[type="ratio"]');
    // ratingList.forEach((e) => {
    //   e.checked = false;
    // });
  });

  filterBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const ratingList = document.querySelectorAll('input[type="radio"]');
    const checkedItems = [];
    // checkBoxList.forEach((e) => {
    //   if (e.checked) {
    //     checkedItems.push(e.value);
    //   }
    // });
    const filteredProducts = this.data.filter((product) =>
      checkedItems.forEach(e.rating.rate => e.rating.rate)
    );

    this.parent.replaceChildren();

    filteredProducts.forEach((element) => {
      const catalogItem = new CatalogItem(element);
      catalogItem.render(this.parent);
    });
  });
};

const myStore = new Catalog(_URL);

myStore.render();

// {
//     title: 'test product',
//     price: 13.5,
//     description: 'lorem ipsum set',
//     image: 'https://i.pravatar.cc',
//     category: 'electronic'
// }
