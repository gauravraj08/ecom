import { getCartProductsFromLS } from "./getCartProducts";

const productFinalTotal = document.querySelector(".productFinalTotal");
const productSubTotal = document.querySelector(".productSubTotal");
const productTax = document.querySelector(".productTax");

export const updateCartPrice = () => {
  let localStorageProduct = getCartProductsFromLS();
  if (localStorageProduct.length === 0) productTax.innerText = 0;

  let sum = 0;
  localStorageProduct.forEach((currProd) => {
    sum += currProd.productPrice;
  });
  productSubTotal.innerText = sum;
  productFinalTotal.innerText = (
    sum + (localStorageProduct.length === 0 ? 0 : 50)
  ).toFixed(2);
};
