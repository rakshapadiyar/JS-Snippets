//REDUNDANCY in code
const radius = [2, 3, 4, 5];

function calculateArea(radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
  }
  return output;
}

const areaAns = calculateArea(radius);
console.log("Radius : ");
console.log(areaAns);

function circum(r) {
  return 2 * Math.PI * r;
}

function diameter(r) {
  return 2 * r;
}

function calculateCircumference(radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(circum(radius[i]));
  }
  return output;
}

const circumAns = calculateCircumference(radius);
console.log("Circumference : ");
console.log(circumAns);

function calculateDiameter(radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(diameter(radius[i]));
  }
  return output;
}
const diaAns = calculateDiameter(radius);
console.log("Diameter : ");
console.log(diaAns);
