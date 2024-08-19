import { getCartProductsFromLS } from "./getCartProducts";

export const fetchQuantityFromLS = (id, price) => {
  let cartProduct = getCartProductsFromLS();

  let existingProd = cartProduct.find((currProd) => currProd.id === id);
  let quantity = 1;

  if (!existingProd) return;

  quantity = existingProd.productQuantity;
  price = +existingProd.productPrice.toFixed(2);

  return { quantity, price };
};
