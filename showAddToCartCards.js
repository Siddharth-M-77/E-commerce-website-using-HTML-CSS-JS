import { incrementDecrement } from "./incrementDecrement";
import products from "./api/products.json";
import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS";
import getCartProductFromLS from "./getCartProducts";
import { removeProdFromCart } from "./removeProdFromCart";
import { updateCartProductTotal } from "./updateCartProductTotal";

//getting data from localStorage👇👇👇
let cartProducts = getCartProductFromLS();

//filter the api products and save it in filterProducts
let filterProducts = products.filter((curProd) => {
  return cartProducts.some((curElem) => curElem.id === curProd.id);
});
console.log(filterProducts);

const productContainer = document.querySelector("#productCartContainer");
const templateCantainer = document.querySelector("#productCartTemplate");

const showCartProducts = () => {
  filterProducts.forEach((curProd) => {
    const { id, category, image, name, stock, price } = curProd;
    let productClone = document.importNode(templateCantainer.content, true);
    const IsActualPrice = fetchQuantityFromCartLS(id, price);
    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productPrice").textContent =
      IsActualPrice.price;
    productClone.querySelector(".productQuantity").textContent =
      IsActualPrice.quantity;
    productClone
      .querySelector(".remove-to-cart-button")
      .addEventListener("click", () => removeProdFromCart(id));

    // handle the increment and decrement
    productClone
    .querySelector(".stockElement")
    .addEventListener("click", (event) => {
      incrementDecrement(event, id, stock, price);
    });
    productContainer.appendChild(productClone);
  });
};

//showing the cartProducts
showCartProducts();

//here we update the total price in showtocart
updateCartProductTotal()
