// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  return cb(arr[0]);
}
  firstItem(items, (whatever)=>{
    console.log(whatever);
  })



  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we can use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };

  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"



function getLength(arr, cb) {
  cb(arr.length);
  // getLength passes the length of the array into the callback.
}
getLength(items, (bananaphone) => {
  console.log(bananaphone);
});

function last(arr, cb) {
  cb(arr[arr.length - 1]);
  // last passes the last item of the array into the callback.
}
last(items, (hamburgerphone) =>{
  console.log(hamburgerphone);
})

function sumNums(x, y, cb) {
  cb(x + y);
  // sumNums adds two numbers (x, y) and passes the result to the callback.
}
sumNums(4, 5, (TheSum) =>{
  console.log(TheSum);
})

function multiplyNums(x, y, cb) {
  cb(x * y);
  // multiplyNums multiplies two numbers and passes the result to the callback.
}
multiplyNums(9, 10, (Multiply) =>{
  console.log(Multiply);
})

// function contains(item, list, cb) {
//   cb(list.ForEach((item, list)=>{
//     alert(item, list);
//   }))
//   // contains checks if an item is present inside of the given array/list.
//   // Pass true to the callback if it is, otherwise pass false.
// }
// contains(anything, items, (UMMMM) => {
//   console.log(UMMMM);
// }
/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
