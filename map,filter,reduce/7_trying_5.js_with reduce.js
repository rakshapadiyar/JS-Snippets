const info = [
  { fname: "Raksha", lname: "Padiyar", age: 24 },
  { fname: "Radhika", lname: "Padiyar Bhat", age: 28 },
  { fname: "Rajath", lname: "J Padiyar", age: 26 },
  { fname: "Rachana", lname: "J. Padiyar", age: 19 },
];

//get full name of age <26

const ans = info.reduce(function (acc, curr) {
  if (curr.age < 26) acc.push(curr.fname + " " + curr.lname);
  return acc;
}, []);
console.log(ans);
