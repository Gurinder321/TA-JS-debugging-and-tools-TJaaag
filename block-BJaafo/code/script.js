// function fullName(firstName, lastName) {
//   return `${firstName} ${lastName}`;
// }

// let result = fullName("Jack", "Jillenhall");
// let expected = "Jack Jillenhall";

// console.log(result);
// console.log(expected);

// if (result !== expected) {
//   throw new Error(`${result} is not equal to ${expected}`);
// }

function totalAmount(amount, taxRate) {
  return amount + amount * taxRate;
}

let result = totalAmount(100, 0.03);
let expected = 123;

console.log(result);
console.log(expected);

if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}

console.log(totalAmount(100, 0.03));
