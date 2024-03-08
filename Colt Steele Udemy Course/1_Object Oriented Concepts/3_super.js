//using parents constructor with customization additions to sub class's constructor
class Triangle {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  describe() {
    console.log(`My sides are ${this.a} and ${this.b}`);
  }
}

class ChildTriangle extends Triangle {
  constructor(a, b, color) {
    super(a, b);
    this.color = color;
  }
  describe() {
    console.log(`My color is ${this.color}`);
  }
}

var tri1 = new Triangle(10, 20);
tri1.describe();
var tri2 = new ChildTriangle(10, 20, "red");
tri2.describe();
