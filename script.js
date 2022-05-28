
const displayCartData=()=>{
    const products=getCartData();
    for(const product in products){
       displayProducts(product);
    }
}

const getProduct = () => {
    //get added products
    const inputField = document.getElementById('inputField');
    const addedProduct = inputField.value;
    if (!addedProduct) {
        return;
    }
    //display products on ui
    displayProducts(addedProduct);

    //add data on local storage
    addProductOnStorage(addedProduct);

    //clear input field
    inputField.value = '';
}
const displayProducts = (name) => {
    const container = document.getElementById('productContainer');
    const li = document.createElement('li');
    li.innerText = name;
    container.appendChild(li);
}
const getCartData = () => {
    const cart = localStorage.getItem('cart');
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart);
    }
    else {
        cartObj = {};
    }
    return cartObj;
}
const addProductOnStorage = (name) => {
    const cart = getCartData();
    if (cart[name]) {
        cart[name] = cart[name] + 1;
    }
    else {
        cart[name] = 1;
    }
    const cartItem = JSON.stringify(cart);
    localStorage.setItem('cart', cartItem);


}
const placeOrder=()=>{
    document.getElementById('productContainer').textContent='';
    localStorage.removeItem('cart');
}
const deleteItem=()=>{
    document.getElementById('productContainer').textContent='';
    localStorage.removeItem('cart');
}
displayCartData();
