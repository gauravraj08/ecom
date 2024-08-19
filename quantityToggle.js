export const homeQuantityToggle = (event, id, stock) => {
  const currentEl = document.querySelector(`#card${id}`);

  const cartIncrement = currentEl.querySelector(".cartIncrement");
  const cartDecrement = currentEl.querySelector(".cartDecrement");
  const productQuantity = currentEl.querySelector(".productQuantity");

  let quantity = +productQuantity.getAttribute("data-quantity") || 1;

  if (!cartIncrement && !cartDecrement) return;

  const className = event.target.className;

  if (className === "cartIncrement") {
    if (quantity < stock) quantity++;
    else if (quantity === stock) quantity = stock;
  } else if (className === "cartDecrement") if (quantity > 1) quantity--;

  productQuantity.innerText = quantity;
  productQuantity.setAttribute("data-quantity", quantity.toString());
};
