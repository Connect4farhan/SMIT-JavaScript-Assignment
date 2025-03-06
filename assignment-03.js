var products = [
  {
    id: 101,
    title: "Sony LED 40 inch",
    variations: [
      { id: 1, color: "black", price: 50000, quantity: 5 },
      { id: 2, color: "red", price: 50000, quantity: 1 },
      { id: 3, color: "silver", price: 55000, quantity: 8 },
    ],
    reviews: [
      {
        id: 1,
        user: "Ahmad",
        rating: 4.0,
        title: "Good Product",
        comments: "It is a very good product ....",
        date: "06-02-2021",
        status: true,
      },
      {
        id: 2,
        user: "Zubair",
        rating: 4.5,
        title: "Very Good Product",
        comments: "zubair It is a very good product ....",
        date: "05-02-2021",
        status: false,
      },
      {
        id: 3,
        user: "Ali",
        rating: 5.0,
        title: "bad Product",
        comments: "ali It is a very good product ....",
        date: "04-02-2021",
        status: true,
      },
    ],
  },
  {
    id: 102,
    title: "Mobile",
    variations: [
      { id: 1, color: "black", price: 50000, quantity: 5 },
      { id: 2, color: "red", price: 50000, quantity: 1 },
      { id: 3, color: "silver", price: 55000, quantity: 8 },
    ],
    reviews: [
      {
        id: 1,
        user: "Ahmad",
        rating: 4.0,
        title: "Good Product",
        comments: "It is a very good product ....",
        date: "06-02-2021",
        status: true,
      },
      {
        id: 2,
        user: "Zubair",
        rating: 4.5,
        title: "Very Good Product",
        comments: "zubair It is a very good product ....",
        date: "05-02-2021",
        status: false,
      },
      {
        id: 3,
        user: "Ali",
        rating: 5.0,
        title: "bad Product",
        comments: "ali It is a very good product ....",
        date: "04-02-2021",
        status: true,
      },
    ],
  },
  {
    id: 103,
    title: "Bike",
    variations: [
      { id: 1, color: "black", price: 55000, quantity: 5 },
      { id: 2, color: "red", price: 50000, quantity: 1 },
    ],
    reviews: [
      {
        id: 1,
        user: "Ahmad",
        rating: 4.0,
        title: "Good Product",
        comments: "It is a very good product ....",
        date: "06-02-2021",
        status: true,
      },
      {
        id: 2,
        user: "Zubair",
        rating: 3.0,
        title: "Very Good Product",
        comments: "zubair It is a very good product ....",
        date: "05-02-2021",
        status: false,
      },
    ],
  },
];

// //----------------------------------------------------------------------------
// // Question-01  Find a Product by ID ?
// //Write a program that takes a product ID and prints the product object.

console.log("** products by ID ** ");
let productId = 102;
let foundProduct = null;
for (let i = 0; i < products.length; i++) {
  if (products[i].id === productId) {
    foundProduct = products[i];
    break;
  }
}
console.log("Product Found:", foundProduct);

// Question-02  List All Product Titles
//Write a program that prints all product titles.

console.log("** All Product Titles **");
for (var i = 0; i < products.length; i++) {
  var product = products[i];
  console.log(product.title);
}

// Question-03  Find Available Colors of a Product
// Given a product ID, print all available colors.

console.log("** Available Colors for Product **");
for (let i = 0; i < products.length; i++) {
  if (products[i].id === 101) {
    for (let j = 0; j < products[i].variations.length; j++) {
      console.log(products[i].variations[j].color);
    }
  }
}


// Question-04  Get Total Quantity of a Product
//Write a program that calculates and prints the total quantity of all variations of a given product.

console.log("** Total Quantity of a Product **");
let totalQuantity = 0;
for (let i = 0; i < products.length; i++) {
  if (products[i].id === 101) {
    for (let j = 0; j < products[i].variations.length; j++) {
      totalQuantity += products[i].variations[j].quantity;
    }
  }
}
console.log("Total Quantity of Product 101:", totalQuantity);

// Question-05 Filter Products with Low Stock
//Write a program that prints products where at least one variation has a quantity of less than 2

console.log("** Products with Low Stock **");
for (let i = 0; i < products.length; i++) {
  for (let j = 0; j < products[i].variations.length; j++) {
    if (products[i].variations[j].quantity < 2) {
      console.log(products[i].title);
      break;
    }
  }
}