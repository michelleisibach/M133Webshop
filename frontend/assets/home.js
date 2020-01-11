productloader();

var json = require('/assets/products.json');

function productloader() {
    if (json == null) {
        document.write("Kein JSON File gefunden");
    }
}