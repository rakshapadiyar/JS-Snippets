class Triangle {
  constructor(a, b) {
    if (!isFinite(a) || a < 0 || !isFinite(b) || b < 0) {
      console.log("Enter Valid sides");
    } else {
      this.a = a;
      this.b = b;
    }
  }

  getArea() {
    console.log(`Area is ${(this.a * this.b) / 2}`);
  }

  describe() {
    console.log("I am a bold triangle");
  }
}

class ShyTriangle extends Triangle {
  describe() {
    console.log("I am shy triangle");
  }

  shyness() {
    console.log("Im super shy");
  }
}

var a = new Triangle(1, 2);
a.describe();
a.getArea();
// a.shyness();
var b = new ShyTriangle(3, 6);
b.getArea();
b.describe();
b.shyness();
