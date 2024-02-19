//Reduce the array into some single value
// ex: sum of an array, largest in the array...
// accumulator(acc), current_value(curr)
// array.reduce() -> takes 2 param a function, and initial value of accumulator;
const arr = [2, 3, 4, 5, 6, 7, 3];

let ans = arr.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);
console.log("Sum of array " + arr + " is " + ans);
