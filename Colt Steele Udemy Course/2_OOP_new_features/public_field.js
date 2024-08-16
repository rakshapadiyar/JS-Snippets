class Cats{
    static numOfCats = 0;

    numLegs = 4; // every cat by default has 4 legs...so public var
    constructor(name)
    {
      this.name = name;
      Cats.numOfCats +=1;
    }

    amputate(){
        this.numLegs -=1;
    }
}
const c = new Cats("peggy")
console.log(c.numOfCats); //undefined
console.log(Cats.numOfCats); //1
console.log(c.name); //peggy

console.log(c.numLegs); //4
//GOD FORBID
c.amputate(); 
console.log(c.numLegs);//3