//methods that can be called on Class iteself and not on objects/instances of the class.
//we call it with name of the class

class Cat {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  static type = "tuxedo";

  static meow() {
    console.log(`${Cat.type} says Meow meow meowwwww`);
  }

  meow() {
    console.log(`${this.name} says MEOW!!!`);
  }
}

const cat1 = new Cat("Peggy", "White");
cat1.meow();
Cat.meow();
