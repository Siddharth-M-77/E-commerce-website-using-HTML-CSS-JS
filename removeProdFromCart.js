
import getCartProductFromLS from "./getCartProducts";
import updatedCartValue from "./updateCartValue";
import { showToast } from "./showToast";


export const removeProdFromCart = (id)=>{
    let cartProducts=getCartProductFromLS();
    cartProducts=cartProducts.filter((curProd)=>curProd.id!==id);
    localStorage.setItem("cartProductLS",JSON.stringify(cartProducts));

    //to remove the div on click
    let RemoveDiv=document.getElementById(`card${id}`)

    if(RemoveDiv){
        RemoveDiv.remove();
        showToast("delete",id)
    }

    updatedCartValue(cartProducts)
}