const info = [
  { fname: "Raksha", lname: "Padiyar", age: 24 },
  { fname: "Radhika", lname: "Padiyar Bhat", age: 28 },
  { fname: "Rajath", lname: "J Padiyar", age: 26 },
  { fname: "Rachana", lname: "J. Padiyar", age: 19 },
];

//get full name of those with age less than 25

const ans = info.filter((p) => {
  if (p.age < 26)
    return p.fname + " " + p.lname + " is " + p.age + " years old";
});
console.log(ans);
//But this returns "P", the entire object.
//So, to get only first and last names,we need to chain it to map
//This is CHAINING.

const ans2 = info
  .filter((p) => p.age < 26)
  .map((x) => x.fname + " " + x.lname + " is " + x.age + " years old.");
console.log("Their names : " + ans2);
