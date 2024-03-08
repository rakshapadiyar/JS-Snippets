//static -> something that doesnt change from one instance of the class to another

//so, access them using Class.static_property, (not object_instance.static_property).

//and it is mutable.

class Cat {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  static mood = "grumpy";

  describeCat = function () {
    console.log(
      `Hi I am ${this.name}, my fur is ${this.color} and my mood is always ${Cat.mood}`
    );
  };
}

var cat1 = new Cat("Devu", "Orange");
cat1.describeCat();

Cat.mood = "happy";

var cat2 = new Cat("Bittu", "Gray");
cat2.describeCat();
