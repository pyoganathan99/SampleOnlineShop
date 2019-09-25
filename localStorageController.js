let cart = {};
let cartString = localStorage.getItem('cart');

if (cartString != null) {
    cart = JSON.parse(cartString);
}

function getAllItemsFromCart() {

    return cart;

}

function addItemToCart(productId, quantity) {

    cart[productId] = quantity;

    localStorage.setItem('cart', JSON.stringify(cart));

}

function changeQuantityInCart(productId, quantity) {

    cart[productId] = quantity;

    localStorage.setItem('cart', JSON.stringify(cart));

}

function deleteItemFromCart(productId) {

    delete cart[productId];

    localStorage.setItem('cart', JSON.stringify(cart));

}