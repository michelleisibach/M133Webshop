const cart = document.getElementById('cart');
const price = document.getElementById('price');
var sum = 0;

getItem();

function getItem() {
    fetch("/api/warenkorb/get")
        .then(r => r.json())
        .then(r => {
            let productId = []
            for (let i = 0; i < r.allProducts.length; i++) {
                productId.push(r.allProducts[i].id)
                sum = sum + r.allProducts[i].specialOffer
            }
            displayCheckout();
        });
}

function displayCheckout() {

    document.getElementById("checkout").innerHTML = `${sum.toFixed(2)}.-`;

}