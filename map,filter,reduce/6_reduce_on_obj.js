const info = [
  { fname: "Raksha", lname: "Padiyar", age: 24 },
  { fname: "Radhika", lname: "Padiyar Bhat", age: 28 },
  { fname: "Rajath", lname: "J Padiyar", age: 24 },
  { fname: "Rachana", lname: "J. Padiyar", age: 19 },
];

// group by age.
// {19: 1, 24:2, 28:1}

const ans = info.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = acc[curr.age] + 1;
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});
console.log(ans);
