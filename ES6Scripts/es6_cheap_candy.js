let products = [
  { product: "Gummy Worms", price: 5.79 },
  { product: "Plain M&Ms", price: 2.89 },
  { product: "Peanut M&Ms", price: 2.89 },
  { product: "Swedish Fish", price: 3.79 },
  // TODO: fill the array with 10 candies of various
  // price ranges
];

const under4 = products.filter((item) => item.price < 4);

under4.forEach((item) => {
  console.log(item.price.toFixed(2), item.product);
});
console.log("   ");

const nameM = products.filter((item) => item.product.indexOf("M&Ms") != -1);

nameM.forEach((item) => {
  console.log(item.product);
});
console.log("   ");

const doWeHave = products.find((item) => item.product === "Swedish Fish");

if (doWeHave) {
  console.log("yes");
} else {
  console.log("no");
}
