class User {
  constructor(fname, lname) {
    this.firstName = fname;
    this.lastName = lname;
  }
  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  set fullName(name) {
    const arr = name.split(" ");
    // const [first,last] = name.split(" ")
    //this.firstName = first; 
      //this.firstName = last; 
    this.firstName = arr[0]; 
    this.lastName = arr[1];
    console.log("NEW NAME SET");
  }
}

const user = new User("Raksha", "Padiyar");
console.log(user.fullName); // Raksha Padiyar
user.fullName = "Radhika Bhat"; //NEW NAME SET
console.log(user.fullName); //Radhika Bhat
console.log(user.firstName); //Radhika
