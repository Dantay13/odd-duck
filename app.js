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
    new product("cthulhul"),
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

//function to return a random index inside the allProducts array
function randomImage() {
    //make it return a number between 0-18 (18 is the index of the last item in allProducts)
    return Math.floor(Math.random() * allProducts.length)
}

//DOM Manipulation
