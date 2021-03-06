const tbody = document.getElementById("products");


fetch("/api/products")
    .then(r => r.json())
    .then(products => products.forEach(products => {
        let price = Number(products.normalPrice);
        let specialPrice = Number(products.specialOffer)
        tbody.innerHTML +=
            `
            <div height: 200px;>  
            <a href="/product/:${products.id}">               
               <button type="button" class="btn btn-light" )> 
               <img src="/assets/images/${products.imageName}"}>    
                <hr />
                <div style="margin-bottom: 25px;">
                <h3 class="producttitle"> ${products.productName} </h3>    
                </div>
                <hr />
                <div style="font-size: 15px; color:red; text-decoration: line-through" >${price.toFixed(2)} CHF  </div>
                <div style="font-size: 15px; color:green;">${specialPrice.toFixed(2)} CHF </div>
                </button>
                </a>
            </div>`;
    }));