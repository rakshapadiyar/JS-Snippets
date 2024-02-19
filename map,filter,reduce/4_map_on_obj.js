const info = [
  { fname: "Raksha", lname: "Padiyar", age: 24 },
  { fname: "Radhika", lname: "Padiyar Bhat", age: 28 },
  { fname: "Rajath", lname: "J Padiyar", age: 26 },
  { fname: "Rachana", lname: "J. Padiyar", age: 19 },
];

//list of full names

const ans = info.map((x) => {
  return x.fname + " " + x.lname;
});

console.log(ans);
