import ProductCard from "./components/ProductCard.js";

let productList = document.getElementById('product-list');

let products = [
    {
        name: "Iphone 14",
        price: "R$ 400,00",
        color: "Midnight",
        storage: "256GB"
    },
    {
        name: "Nokia",
        price: "R$ 450,00"
    },
    {
        name: "Motorola",
        price: "R$ 50,00"
    }
];

for(let index = 0; index < products.length; index++) {

    productList.innerHTML += ProductCard(products[index]);

}
