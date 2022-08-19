"use strict"

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

let currentRound = 0;

//product construction function
function product(name) {
    this.name = name;
    this.clicked = 0;

}

// return a random index inside allProducts array
function randomImage() {
    // return a number between 0 - 18 (18 is the index of the last item in allProducts)
    return Math.floor(Math.random() * allProducts.length);
  }

//function to return a random index inside the allProducts array
function randomImage() {
    //make it return a number between 0-18 (18 is the index of the last item in allProducts)
    for (let i = 0; i < 3; i++) {
        return Math.floor(Math.random() * allProducts.length);
        let img = document.getElementById("productImage"); 
        let img2 = document.getElementById("productImage2"); 
        let img3 = document.getElementById("productImage3");
        img.src = `img/${product.name}.jpg`;
        img.alt = product.name;
        img.title = product.name;
        img2.src = `img/${product.name}.jpg`;
        img2.alt = product.name;
        img2.title = product.name;
        img3.src = `img/${product.name}.jpg`;
        img3.alt = product.name;
        img3.title = product.name;
    }
}

randomImage();

function renderChart() {
    let productNames = [];
    for (let i = 0; i < allProducts.length; i++) {
      productNames.push(allProducts[i].name);
    }
  
    let clicks = [];
    for (let i = 0; i < allProducts.length; i++) {
      clicks.push(allProducts[i].clicked);
    }
    const ctx = document.getElementById("myChart").getContext("2d");
    const myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: productNames,
        datasets: [
          {
            label: "# of Votes",
            data: clicks,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            bor
            derWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
  

// let randomized = [];

// while (randomized.length < 3) {
//     let random = randomImage();
//     while (!randomized.includes (allProducts[random])) {
//         randomized.push(allProducts[random]);
//     }
// };

// randomized();


// DOM Manipulation
// let product = allProducts[randomImage()];
// let img = document.getElementById("productImage");
// img.src = `assets/${product.name}.jpg`;


// Event Listener Steps:
let button = document.getElementById("productButton"); 
let button2 = document.getElementById("productButton2"); 
let button3 = document.getElementById("productButton3");

button.addEventListener('click', showNewImage);
button2.addEventListener('click', showNewImage);
button3.addEventListener('click', showNewImage);

// This is the event handler that gets invoked when we click the button
function showNewImage() {
    // Get a random product
    let product = allProducts[randomImage()];
    // Select the img
    let img = document.getElementById("productImage"); 
    let img2 = document.getElementById("productImage2"); 
    let img3 = document.getElementById("productImage3");
    // Make the img the product
    img.src = `img/${product.name}.jpg`;
    img.alt = product.name;
    img.title = product.name;
    // Create the img for image 2
    img2.src = `img/${product.name}.jpg`;
    img2.alt = product.name;
    img2.title = product.name;
    // Create the img for image 3
    img3.src = `img/${product.name}.jpg`;
    img3.alt = product.name;
    img3.title = product.name;

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
