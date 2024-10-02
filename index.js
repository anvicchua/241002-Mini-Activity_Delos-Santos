//I will first declare the variables for store name, location, and capacity
//I will use the const keyword because the value of store name, location and capacity will remain constant

const storeName = "Orange Juice";
const storeLocation = "General Trias, Cavite";
const storeCapacity = 50000;

/*
This is where i will start with the Product Inventory
Array of objects will be used as the placeholder for the items
I will also declare the name, price, and quantity of the item as placeholder
*/

let name;
let price;
let quantity;

let items = [
    {name: "Laptop", price: 45999, quantity: 50},
    {name: "Smartphone", price: 9999, quantity: 100},
    {name: "Tablet", price: 11999, quantity: 80}
];

let totalNumberItems = 0; //I used let keyword because the number of products will be updated and is not constant

//This block of code shows how the total number of items is computed
for (let inventoryItem of items) {
    totalNumberItems += inventoryItem.quantity;
}

let totalInventoryValue = 0; //This declares and initializes the total inventory value which is set to 0 because it will be updated based on the number of inventory items

for (let inventoryItem of items) {
    totalInventoryValue += inventoryItem.price * inventoryItem.quantity;
}

/*
This upcoming line of code is where we add to the Laptop's quantity as per the instruction. This updates the initial quantity of the Laptop which will then be shown in the output.
*/
const addLaptop = 10;
items[0].quantity += addLaptop;

let highestPriceProductName = "";
let highestPrice = 0;

// This block of code updates the highest price and highest price product
for (let inventoryItem of items) {
    if (inventoryItem.price > highestPrice) {
        highestPrice = inventoryItem.price;  // Update highest price
        highestPriceProductName = inventoryItem.name;  // Update product name
    }
}

// Now this is where the code is being output. Showing through console.log of the browser
console.log("Store Name: ", storeName);
console.log("Store Location: ", storeLocation);
console.log("Total Number of Products: ", totalNumberItems);
console.log("Total Inventory Value: ", totalInventoryValue);
console.log("Updated Laptop Quantity: ", items[0].quantity);
console.log("Most Expensive Product: ", highestPriceProductName);