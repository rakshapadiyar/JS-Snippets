class MayClass{
    #privateMethod(){
        console.log("Private Method Called")
    }

    publicMathod(){
        this.#privateMethod()
    }
}

const c = new MayClass();
//c.#privateMethod(); //error
console.log(c.publicMathod()); //Private Method Called