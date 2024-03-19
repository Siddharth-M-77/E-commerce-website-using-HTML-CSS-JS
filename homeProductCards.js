const productContainer = document.querySelector("#productContainer");
const productTemplate = document.querySelector("#productTemplate");
import homeQuantityToggle from "./homeQuantityToggle";
import addToCart from './addToCart'
import { showToast } from "./showToast";
function showProductContainer(products) {
  if (!products) {
    return false;
  }

  products.forEach((curProd) => {
    const { id, name, descrition, image, stock, price, brand, category } =
      curProd;

    const productClone = document.importNode(productTemplate.content, true);

    //HERE CHANGE THE ID WITH CARD USING SET ATTRIBUTE METHOD
    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);



    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productImage").alt = name;
    productClone.querySelector(".productStock").textContent = stock;
    productClone.querySelector(".productDescription").textContent = descrition;
    productClone.querySelector(".productPrice").textContent = `₹${price}`;
    productClone.querySelector(".productActualPrice").textContent = `₹${
      price * 4
    }`;


    //ADDING EVENT LISTENER TO THE PARENT ON PARENT to increase the quantity

    productClone
      .querySelector(".stockElement")
      .addEventListener("click", (event) => {
        homeQuantityToggle(event, id, stock);
      });
 
    //adding eventListener to the add-to-cart-button

    productClone.querySelector(".add-to-cart-button").addEventListener('click',(event)=>{
        addToCart(event,id,stock)
        showToast("Added",id)
        

    })

    productContainer.append(productClone);
  });
}
export default showProductContainer;
