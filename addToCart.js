import getCartProductFromLS from "./getCartProducts";
import { showToast } from "./showToast";
import updatedCartValue from "./updateCartValue";

getCartProductFromLS();


const addToCart = (event, id, stock) => {
  //to get a blank array so that we can push the data in that array and then save it in localStorage👇👇👇

  const arrLocalStrorageProduct = getCartProductFromLS();
  const currentCardElement = document.querySelector(`#card${id}`);
  let quantity = currentCardElement.querySelector(".productQuantity").innerText;
  let price = currentCardElement.querySelector(".productPrice").innerText;

  // convert rupee symbol to blank array so that price will calculate accoretely

  price = price.replace("₹", "");

  //only add product in local storage  which is not present in Already in LS

  let existingProd = arrLocalStrorageProduct.find((curProd) => {
    return curProd.id === id;
  });

  //here we add actual price and quantity in LS  for the perticular product

  if (existingProd && quantity > 1) {
    quantity = Number(existingProd.quantity + Number(quantity));
    price = Number(price * quantity);

    //here we update the price and quantity in LS .only which id on which user clicked👇👇👇

    let updatedCart = { id, price, quantity };
    // here we set the value of the clicked product👇👇👇
    updatedCart = arrLocalStrorageProduct.map((curProd) => {
      return existingProd.id === id ? updatedCart : curProd;
    });
    localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));
  }

  if (existingProd) {
    return false;
  }

  price = Number(price * quantity);
  quantity = Number(quantity);

  //here arrLocalStorageProduct is a blank array and we push id price and quantity for save in LocalStorage👇👇👇👇
  arrLocalStrorageProduct.push({ id, price, quantity });

  //saving the data in the LS in JSON string format

  localStorage.setItem(
    "cartProductLS",
    JSON.stringify(arrLocalStrorageProduct)
  );

  // console.log(quantity,price);

  //here we updates the current cart value
  updatedCartValue(arrLocalStrorageProduct);

  //show toast when product is added in the cart
  showToast("Added",id)
  
};
export default addToCart;
