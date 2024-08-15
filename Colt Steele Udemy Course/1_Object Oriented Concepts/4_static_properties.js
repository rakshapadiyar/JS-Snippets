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
cat1.describeCat(); // Hi I am Devu, my fur is Orange and my mood is always grumpy

Cat.mood = "happy";

var cat2 = new Cat("Bittu", "Gray");
cat2.describeCat(); //Hi I am Bittu, my fur is Gray and my mood is always happy

var cat3 = new Cat("Peggy", "White");
cat3.describeCat();// Hi I am Peggy, my fur is White and my mood is always happy
