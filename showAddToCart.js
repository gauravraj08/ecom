import products from "./api/products.json";
import { fetchQuantityFromLS } from "./fetchQuantityFromCartLS";
import { getCartProductsFromLS } from "./getCartProducts";
import { incrementDecrement } from "./incrementDecrement";
import { removeItem } from "./removeFromCart";
import { updateCartPrice } from "./updateCartTotalPrice";

let localStorageProduct = getCartProductsFromLS();

let filteredProducts = products.filter((currProduct) =>
  localStorageProduct.some((currEl) => currEl.id === currProduct.id)
);

const productCartContainer = document.querySelector("#productCartContainer");
const productCartTemplate = document.querySelector("#productCartTemplate");

const showAddToCartsCard = () => {
  filteredProducts.forEach((currProd) => {
    const { category, id, image, name, stock, price } = currProd;

    let productClone = document.importNode(productCartTemplate.content, true);

    let isActualdata = fetchQuantityFromLS(id, price);

    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);

    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productQuantity").textContent =
      isActualdata.quantity;
    productClone.querySelector(".productPrice").textContent =
      isActualdata.price;

    productClone
      .querySelector(".stockElement")
      .addEventListener("click", (event) => {
        incrementDecrement(event, id, stock, price);
      });

    productClone
      .querySelector(".remove-to-cart-button")
      .addEventListener("click", (event) => {
        removeItem(event, id);
      });

    productCartContainer.appendChild(productClone);
  });
};

showAddToCartsCard();

updateCartPrice();
