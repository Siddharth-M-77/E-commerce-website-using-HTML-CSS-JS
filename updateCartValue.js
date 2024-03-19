
const cartValue = document.querySelector('#cartValue')
const updatedCartValue = (cartProducts) => {

    return (cartValue.innerHTML =`<i class="fa-solid fa-cart-shopping"> ${cartProducts.length} </i>`);
};
export default updatedCartValue;
