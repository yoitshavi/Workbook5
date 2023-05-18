let menu = [
  [
    { item: "Sausage and Egg Biscuit", price: 3.69 },
    { item: "Bacon and Egg Biscuit", price: 3.49 },
    { item: "Ham and Egg Biscuit", price: 3.29 },
  ],
  [
    { item: "Burger and Fries", price: 10.69 },
    { item: "Slice of Pizza and 2 Garlic Knots", price: 8.49 },
    { item: "Ham and Cheese Sandwich with Chips", price: 5.29 },
    { item: "Turkey and Cheese Sandwich with Chips", price: 5.29 },
  ],
  [
    { item: "Steak and Mashed Potatoes", price: 20.69 },
    { item: "Chicken Alfredo with Garlic Knots", price: 15.49 },
    { item: "Spaghetti with  Meatballs and Garlic Knots", price: 14.29 },
    { item: "Chicken Parmesan with Garlic Knots", price: 16.49 },
    { item: "Soup and Salad", price: 12.29 },
  ],
];

// if (meal === 0){
//     console.log("Breakfast Menu")
// }else if (meal === 1){
//     console.log("Lunch Menu")
// }else if(meal === 2){
//     console.log("Dinner Menu")
// }
const mealIndex = 2;
const mealNames = ["Breakfast", "Lunch", "Dinner"];
console.log(mealNames[mealIndex], "Menu");

menu[mealIndex].forEach((meal) => console.log(meal.item, `$${meal.price}`));
