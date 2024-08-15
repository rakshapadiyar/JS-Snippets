//methods that can be called on Class iteself and not on objects/instances of the class.
//we call it with name of the class

class Cat {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  static type = "tuxedo";
  static staticMeow() {
    console.log(`${Cat.type} says Meow meow meowwwww`);
  }

  static meow() {
    console.log(`static ${Cat.type} says Meow meow meowwwww, her name is ${this.name} ${this.color}`);
  }

  meow() {
    console.log(`${this.name} says MEOW!!!`);
  }
}

const cat1 = new Cat("Peggy", "White");
cat1.meow(); //Peggy says MEOW!!!
Cat.staticMeow() //tuxedo says Meow meow meowwwww
Cat.meow(); //static tuxedo says Meow meow meowwwww, her name is Cat undefined

// static method does not have access to any varioables inside class as it wa snot initialized. so undefined
