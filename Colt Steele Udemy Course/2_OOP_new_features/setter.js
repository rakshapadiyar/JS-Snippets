//allows us to set value of an object's property.
//plus u can add validation rules for those values set...must be positive...less than 1000 etc

class Circle {
  constructor(radius, color) {
    this._radius = radius; //_ means private var, dont directly touch/modify
    this._color = color;
  }

  set radius(value) {
    if (value < 0) {
      throw new Error("Radius cannot be negative!!!!");
    } else {
      this._radius = value;
    }
  }

  get radius() {
    return this._radius;
  }

  get diameter() {
    return this._radius;
  }

  get color() {
    return this._color;
  }

  set color(value) {
    const allowedColors = new Set(["red", "green", "blue"]);
    if (allowedColors.has(value)) {
      this._color = value;
    } else {
      throw new Error("Circle of that color is forbidden!!!");
    }
  }
}

const circle = new Circle(5);
console.log("RADIUS IS ", circle.radius); //RADIUS IS  5
circle.radius = 4;
console.log("RADIUS IS ", circle.radius); //RADIUS IS  4
//circle.radius = -3; //Error: Radius cannot be negative!!!!
//circle.color = "violet"; //Error: Circle of that color is forbidden!!!
circle.color = "green";
console.log("Circles color is " + circle.color); //Circles color is green
