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

// render the chart AFTER 10 clicks
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

// Event Listener Steps:
let button = document.getElementById("productButton");
button.addEventListener("click", showNewImage);

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
    if (currentRound === 25) {
      // Remove my event listener
      button.removeEventListener("click", showNewImage);
      renderChart();
    }
  }

  showNewImage();

  let strings = [
    "bag",
    "banana",
    "bathroom",
    "boots",
    "breakfast",
    "bubblegum",
    "chair",
    "cthulhu",
    "dog-duck",
    "dragon",
    "pen",
    "pet-sweep",
    "scissors",
    "shark",
    "sweep",
    "tauntaun",
    "unicorn",
    "water-can",
    "wine-glass",
  ];
  let uniqueNumbers = [];
  
  function randomIndex(length) {
    return Math.floor(Math.random() * length);
  }
  
  while (uniqueNumbers.length < 18) {
    let index = randomIndex(strings.length);
    if (!uniqueNumbers.includes(strings[index])) {
      uniqueNumbers.push(strings[index]);
    }
  }
  
  uniqueNumbers.shift();
  uniqueNumbers.shift();
  uniqueNumbers.shift();

  while (uniqueNumbers.length < 18) {
    let index = randomIndex(strings.length);
    if (!uniqueNumbers.includes(strings[index])) {
      uniqueNumbers.push(strings[index]);
    }
  }
  
  console.log(uniqueNumbers);