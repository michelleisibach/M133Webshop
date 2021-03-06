import * as express from "express";
import * as path from "path";
import * as bodyParser from "body-parser";
import * as expressSession from "express-session";
import Product from "./types";
import { ShoppingCart } from "./types";

const products: Product[] = require("../frontend/assets/products.json");

const app = express();
app.use(bodyParser.json());
//generate Session
app.use(expressSession({
    secret: "planespottingalasuisse_session",
    resave: false,
    saveUnitialized: true
}));
//use default assets like stylesheet etc...
app.use("/assets", express.static(path.join(__dirname, "/../frontend/assets")));
app.use(express.json());

//frontend
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + '/../frontend/html/index.html'));
});

app.get("/product/:id", (req, res) => {
    res.sendFile(path.join(__dirname + '/../frontend/html/product.html'));
});

app.get("/shoppingcart", (req, res) => {
    res.sendFile(path.join(__dirname + '/../frontend/html/shoppincart.html'));
});

app.get("/checkout", (req, res) => {
    res.sendFile(path.join(__dirname + '/../frontend/html/checkout.html'));
})


//api to get/set shoppingcart etc..
app.get("/api/products", (req, res) => {
    res.json(products);
});

app.post("/api/warenkorb/:id", (req, res) => {
    const product = products.find(x => Number(x.id) === Number(req.params.id));

    if (!product) {
      res.sendStatus(404);
      return;
    }
  
    if (!req.session!.shoppingcart) {
      req.session!.shoppingcart = new ShoppingCart();
    }
  
    let shoppingcart = req.session!.shoppingcart as ShoppingCart;
    shoppingcart.allProducts = [...shoppingcart.allProducts, product!];
    console.log(shoppingcart);
    res.sendStatus(200);
});

app.get("/api/warenkorb/get", (req, res) => {
 res.send(req.session!.shoppingcart)
})

//serverlistening
app.listen(8080, () => {
    console.log("Server listening on Port 8080")
});