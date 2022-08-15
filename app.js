"use strict"

//product construction function
function product(name) {
    this.name = name;
    this.clicked = 0;

}

//an array of all the different types of products for the product contructor
let allProducts = [
    new product("bag"),
    new product("banana"),
    new product("bathroom"),
    new product("boots"),
    new product("breakfast"),
    new product("bubblegum"),
    new product("chair"),
    new product("cthulhu"),
    new product("dog-duck"),
    new product("dragon"),
    new product("pen"),
    new product("pet-sweep"),
    new product("scissors"),
    new product("shark"),
    new product("sweep"),
    new product("tauntaun"),
    new product("unicorn"),
    new product("water-can"),
    new product("wine-glass")
]

let currentRound = 0

//function to return a random index inside the allProducts array
function randomImage() {
    //make it return a number between 0-18 (18 is the index of the last item in allProducts)
    return Math.floor(Math.random() * allProducts.length)
}

// DOM Manipulation
// let product = allProducts[randomImage()];
// let img = document.getElementById("productImage");
// img.src = `assets/${product.name}.jpg`;


// Event Listener Steps:
let button = document.getElementById("productButton");
button.addEventListener('click', showNewImage);

// This is the event handler that gets invoked when we click the button
function showNewImage() {
    // Get a random product
    let product = allProducts[randomImage()];
    // Select the img
    let img = document.getElementById("productImage");
    // Make the img the product
    img.src = `img/${product.name}.jpg`;
    img.alt = product.name;
    img.title = product.name;
    // Increments shown product's .clicked property
    product.clicked++;
    console.log(product);
    currentRound++;
    // Logic for when voting rounds have completed:
    if (currentRound === 10) {
        // Remove my event listener
        button.removeEventListener('click', showNewImage);
    }
}

showNewImage();
