//jk with the name

//corner case

function x() {
  let a = 10;
  function y() {
    console.log(a);
  }
  a = 20;
  return y;
}
var z = x();
console.log(z()); // 20

// console.clear()
function x2() {
  let a = 10;
  function y() {
    console.log(a);
  }
  a = 20;
  return y;
}
a = 30;
var z2 = x2();
z2(); //20
console.log(a); //30

console.log(zy);
var zy = 90;
console.log(zy);

//console.log(zz) gives not defined error
zz=900;
console.log(zz)

//It is not explicitly declared with let, var, or const, so it becomes a property of the global object.

