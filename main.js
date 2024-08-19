import "./style.css";
import products from "./api/products.json";
import { showProductContainer } from "./homeProductCards";
// import { togg } from "./quantityToggle";
// Define a function named showProductContainer that takes an array of products as input.

document.addEventListener("DOMContentLoaded", function () {
  showProductContainer(products);
  //   togg();
});
