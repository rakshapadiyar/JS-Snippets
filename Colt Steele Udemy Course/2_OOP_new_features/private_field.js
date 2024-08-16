//fields only accessible from within the class, not from outside

class Circle{
    radius; //PUBLIC FIELDS CAN BE DIRECTLY INITIATED WITHOUT DECLARING LIKE THIS HERE FIRST
    #privateVar; //PRIVATE FIELDS MUST BE DECLARED FIRST
    constructor(radius, val)
    {
        this.radius = radius;
        this.#privateVar = val;
    }

    getRadius()
    {
        return this.#privateVar;
    }
    get radii()
    {
        return this.#privateVar;
    }
}

const c= new Circle(10,15);
// console.log(`${c.radius} ${c.#privateVar}`); //SyntaxError: Private field '#privateVar' must be declared in an enclosing class
// c.#privateVar = 50; //same error
console.log(c.getRadius()); //15
console.log(c.radii); //15

