const tbody = document.querySelector("table tbody");


fetch("/api/products")
    .then(r => r.json())
    .then(products => products.forEach(products => {
        console.log(products);

    }));