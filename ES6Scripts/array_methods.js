//exercises on 1-22
let cart = [
  { item: "Bread", price: 3.29, quantity: 2 },
  { item: "Milk", price: 4.09, quantity: 1 },
  { item: "T-Bone Steak", price: 12.99, quantity: 2 },
  { item: "Baking Potato", price: 1.89, quantity: 6 },
  { item: "Iceberg Lettuce", price: 2.06, quantity: 1 },
  { item: "Ice Cream - Vanilla", price: 6.81, quantity: 1 },
  { item: "Apples", price: 0.66, quantity: 6 },
];
function showItemName(arrayElement) {
  return arrayElement.item;
}
const itemName = cart.map(showItemName);
// console.log(itemName);

function displayName(items) {
  console.log(items);
}
itemName.forEach(displayName);
//cart.forEach(items);
console.log("====");

function reduceToTotalCost(currentTotal, arrayElement) {
  const elementTotal = arrayElement.price * arrayElement.quantity;
  currentTotal += elementTotal;
  return currentTotal;
}
const totalCost = cart.reduce(reduceToTotalCost, 0);
console.log("total cost is ", totalCost);

console.log("======");

cart.sort(function (a, b) {
  if (a.item < b.item) return -1;
  else if (a.item === b.item) return 0;
  else return 1;
});
const sortNames = cart.map(showItemName);
sortNames.forEach(displayName);

// function listPrices(cartItems) {
//   return cartItems.price * cartItems.quantity;
// }
// const prices = cart.find(cartItems);
