//map - apply some transformation on entire array
const arr = [2, 3, 4, 5];

//way 1
function doubleIt(num) {
  return num * 2;
}

const output = arr.map(doubleIt);
console.log("doubled : " + output);

//way2
console.log(
  "tripled : " +
    arr.map(function tripleIt(num) {
      return num * 3;
    })
);

//way2
console.log("quadrupled : " + arr.map((num) => num * 4));
