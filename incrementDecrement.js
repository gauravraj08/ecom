import { getCartProductsFromLS } from "./getCartProducts";
import { updateCartPrice } from "./updateCartTotalPrice";

export const incrementDecrement = (event, id, stock, price) => {
  const currCardEl = document.querySelector(`#card${id}`);
  const productQuant = currCardEl.querySelector(".productQuantity");
  const productPri = currCardEl.querySelector(".productPrice");

  let quantity = 1;
  let localPrice = 0;

  let localSP = getCartProductsFromLS();
  let existingProd = localSP.find((curr) => curr.id === id);

  if (existingProd) {
    quantity = existingProd.productQuantity;
    localPrice = existingProd.productPrice;
  } else {
    localPrice = price;
    price = price;
  }

  if (event.target.className === "cartIncrement") {
    if (quantity < stock) {
      quantity += 1;
    } else if (quantity === stock) {
      quantity = stock;
      localPrice = price * stock;
    }
  }
  if (event.target.className === "cartDecrement") {
    if (quantity > 1) {
      quantity -= 1;
    }
  }

  localPrice = price * quantity;
  localPrice = Number(localPrice.toFixed(2));

  let updatedCart = { id, productQuantity: quantity, productPrice: localPrice };

  updatedCart = localSP.map((curProd) => {
    return curProd.id === id ? updatedCart : curProd;
  });

  localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));

  productQuant.innerText = quantity;
  productPri.innerText = localPrice;

  updateCartPrice();
};
