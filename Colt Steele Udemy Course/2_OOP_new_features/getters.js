// get method, is a function, but can be accessed as a property.
// used when a property is based on some other property of the object.(radius, diameter)

// _variable => indicates to the coder, dont use/get/set the variable directly

class Circle {
  constructor(radius) {
    this._radius = radius;
  }
  get radius() {
    return this._radius;
  }
  get diameter() {
    return this._radius * 2;
  }
}

var c = new Circle(4);
console.log(c.diameter); //used like a property op:8

//why we need getter method in the first place
class Circle2 {
  constructor(radius) {
    this._radius = radius;
    this.diameter = radius * 2;
  }
}
var c2 = new Circle2(5);
console.log(c2.diameter);
c2.radius = 8;
console.log(c2.diameter); ///diameter still shows 10, even though radius changed.
// so, we need to get diameter, based on radius always. So use getter.
