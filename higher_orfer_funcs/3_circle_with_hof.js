//using higher order functions
const radius = [2, 3, 4, 5];

function area(r) {
  return Math.PI * r * r;
}
function diameter(r) {
  return 2 * Math.PI * r;
}
function circumference(r) {
  return 2 * r;
}

function calculateAny(radius, method) {
  output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(method(radius[i]));
  }
  return output;
}

let ans = [];
ans = calculateAny(radius, area);
console.log("area : " + ans);

ans = [];
ans = calculateAny(radius, diameter);
console.log("diameter : " + ans);

ans = [];
ans = calculateAny(radius, circumference);
console.log("circumference : " + ans);
