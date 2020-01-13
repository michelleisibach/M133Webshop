const tbody = document.getElementById("products");


fetch("/api/products")
    .then(r => r.json())
    .then(products => products.forEach(products => {
        console.log(products);
        tbody.innerHTML +=
            `<div height: 200px;>                 
                <img src="/assets/images/${products.imageName}"}>    
                <hr />
                <div style="margin-bottom: 25px;">
                <h3 class="producttitle"> ${products.productName} </h3>    
                </div>
                <hr />
                <div style="font-size: 15px; color:red; margin-bottom: 0%;">${products.normalPrice} CHF  </div>
                <div style="font-size: 15px; color:green; margin-bottom: 0%;">${products.specialOffer} CHF </div>
            </div>`;
    }));