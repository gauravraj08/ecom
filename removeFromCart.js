import products from "./api/products.json";
import { getCartProductsFromLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartPrice } from "./updateCartTotalPrice";
import { updateCartValue } from "./updateCartValue";

export const removeItem = (event, id) => {
  let localProd = getCartProductsFromLS();

  let filteredProd = localProd.filter((currProd) => currProd.id !== id);

  localStorage.setItem("cartProductLS", JSON.stringify(filteredProd));

  let removeDiv = document.getElementById(`card${id}`);
  if (removeDiv) {
    removeDiv.remove();

    showToast("deleted", id);
  }
  localProd = getCartProductsFromLS(); //call again to get updated array length
  updateCartValue(localProd);
  updateCartPrice();
};
