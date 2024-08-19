import { getCartProductsFromLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

getCartProductsFromLS();

export const addToCart = (event, id, stock) => {
  let localStorageProduct = getCartProductsFromLS();

  const currEl = document.querySelector(`#card${id}`);

  let productQuantity = currEl.querySelector(".productQuantity").innerText;
  let productPrice = currEl.querySelector(".productPrice").innerText;

  productPrice = productPrice.replace("₹", "");

  let existingProd = localStorageProduct.find((curr) => curr.id === id);

  if (existingProd && productQuantity > 1) {
    console.log(productPrice, productQuantity);
    productQuantity =
      Number(existingProd.productQuantity) + Number(productQuantity);
    productPrice = +(productQuantity * productPrice);
    console.log(productPrice, productQuantity);
    let updateCart = { id, productQuantity, productPrice };

    updateCart = localStorageProduct.map((currProd) => {
      return currProd.id === id ? updateCart : currProd;
    });

    localStorage.setItem("cartProductLS", JSON.stringify(updateCart));

    showToast("add", id);
  }

  if (existingProd) return false;

  productQuantity = +productQuantity;
  productPrice = +(productPrice * productQuantity);

  localStorageProduct.push({ id, productQuantity, productPrice });
  localStorage.setItem("cartProductLS", JSON.stringify(localStorageProduct));

  updateCartValue(localStorageProduct);

  showToast("add", id);
};
