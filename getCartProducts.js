import updatedCartValue from "./updateCartValue";


const getCartProductFromLS=()=>{

    let cartProducts=localStorage.getItem('cartProductLS')
    if(!cartProducts){
        return [];
    }
    cartProducts=JSON.parse(cartProducts);
    //here we updates the current cart value 
    updatedCartValue(cartProducts);
    return cartProducts;
}
export default getCartProductFromLS;