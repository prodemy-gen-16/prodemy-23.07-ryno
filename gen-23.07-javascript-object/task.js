const products = [
  {
    name: "ÄLEBY",
    price: 5_995_000,
  },
  {
    name: "EKOLSUND",
    price: 5_995_000,
  },
  {
    name: "HAVBERG",
    price: 10_990_000,
  },
  {
    name: "LANDSKRONA",
    price: 6_995_000,
  },
  {
    name: "OSKARSHAMN",
    price: 5_295_000,
  },
  {
    name: "SÖDERHAMN",
    price: 6_995_000,
  },
  {
    name: "STRANDMON",
    price: 4_395_000,
  },
  {
    name: "VIMLE",
    price: 6_995_000,
  },
];

console.log(products);
let filteredProducts;

// Select product name where price > 6.000.000
filteredProducts = products
  .filter(({ price }) => price > 6_000_000)
  .map(({ name }) => name);

console.log("\nNama product yang harganya lebih dari 6.000.000");
console.log(filteredProducts);

// Select product name where price < 5.500.000
filteredProducts = products
  .filter(({ price }) => price < 5_000_000)
  .map(({ name }) => name);

console.log("\nNama product yang harganya kurang dari 5.000.000");
console.log(filteredProducts);

// Select product name where 5.000.000 < price < 6.000.000
filteredProducts = products
  .filter(({ price }) => price > 5_000_000 && price < 6_000_000)
  .map(({ name }) => name);

console.log("\nNama product yang harganya antara 5.000.000 & 6.000.000");
console.log(filteredProducts);
