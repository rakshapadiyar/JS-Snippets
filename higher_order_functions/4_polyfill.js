//The calculate function in 3, mimics map function
const radius = [2, 3, 4, 5];

function area(r) {
  return Math.PI * r * r;
}

function calculate(arr, method) {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(method(arr[i]));
  }
  return output;
}

console.log("Output of OG higher order function : " + calculate(radius, area));

console.log("Map function does the same : " + radius.map(area));

console.log(
  "So we have kinda implemented map function as calculate, but map function tahes only one param, so to convert area function into protype types ..."
);

Array.prototype.calculateArea2 = function (method) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(method(this[i]));
  }
  return output;
};

console.log("Prototype function mimics map " + radius.calculateArea2(area));
