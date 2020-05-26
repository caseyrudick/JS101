// #41 Inventory Item Transactions
// Write a function that takes two arguments, inventoryItem, and transactions, and returns
// an array containing only the transactions for the specified inventoryItem
// let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
//                      { id: 105, movement: 'in',  quantity: 10 },
//                      { id: 102, movement: 'out', quantity: 17 },
//                      { id: 101, movement: 'in',  quantity: 12 },
//                      { id: 103, movement: 'out', quantity: 20 },
//                      { id: 102, movement: 'out', quantity: 15 },
//                      { id: 105, movement: 'in',  quantity: 25 },
//                      { id: 101, movement: 'out', quantity: 18 },
//                      { id: 102, movement: 'in',  quantity: 22 },
//                      { id: 103, movement: 'out', quantity: 15 }, ];
// transactionsFor(101, transactions);

function transactionsFor(inventoryItem, transactions) {
  let query = transactions.filter(element => 
    element.id === inventoryItem)
  return query
}

// let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
//                      { id: 105, movement: 'in',  quantity: 10 },
//                      { id: 102, movement: 'out', quantity: 17 },
//                      { id: 101, movement: 'in',  quantity: 12 },
//                      { id: 103, movement: 'out', quantity: 20 },
//                      { id: 102, movement: 'out', quantity: 15 },
//                      { id: 105, movement: 'in',  quantity: 25 },
//                      { id: 101, movement: 'out', quantity: 18 },
//                      { id: 102, movement: 'in',  quantity: 22 },
//                      { id: 103, movement: 'out', quantity: 15 }, ];
// transactionsFor(101, transactions);

// #42 Inventory Item Availability
// Building on the previous exercise, write a function that return true or false
// // if the item is avaiable
// function transactionsFor(inventoryItem, transactions) {
//   let query = transactions.filter(element => 
//     element.id === inventoryItem)
//   return query
// }

function isItemAvailable (num, trans) {
  let itemHistory = transactionsFor(num, trans).reduce(
    (sum, trans) => {
    if (trans.movement === 'in') {
      return sum + trans.quantity;
    } else {
      return sum - trans.quantity;
    }
  },
  0
);
  console.log(itemHistory)
}

// function isItemAvailable(item, transactions) {
//   let quantity = transactionsFor(item, transactions).reduce(
//     (sum, transaction) => {
//       if (transaction.movement === "in") {
//         return sum + transaction.quantity;
//       } else {
//         return sum - transaction.quantity;
//       }
//     },
//     0
//   );
//   return quantity > 0;
// }

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

isItemAvailable(101, transactions);     // false
isItemAvailable(103, transactions);     // false
isItemAvailable(105, transactions);     // true