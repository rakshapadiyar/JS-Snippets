// Filter - skim some values from array based on a condition.
const arr = [2, 3, 4, 5, 6, 7];

//way 1
function isEven(num) {
  if (num % 2 == 0) return num;
}
const op = arr.filter(isEven);
console.log("Even numbers are : " + op);

//way 2
console.log(
  "Odd numbers are : " +
    arr.filter(function isOdd(num) {
      if (num % 2 == 1) return num;
    })
);

//way 3 (not a single line return, so put the anonymous func body in {})
console.log(
  "2)Odd numbers are : " +
    arr.filter((num) => {
      if (num % 2 != 0) return num;
    })
);
