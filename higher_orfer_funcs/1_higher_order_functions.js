// A function that takes another function as argument or returns a functions.

function x() {
  console.log("I am callback fucntion");
}

function y(x) {
  console.log("I am higher oreder function");
  console.log(x);
}

y();
