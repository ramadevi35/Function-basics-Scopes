//global & function Scope

// alert("Hello");
// console.log(innerWidth);

// const x = 100;
// console.log(x, "in global");

// function run() {
//   console.log(window.innerHeight);
//   console.log(x, "in function");
// }
// run();

// if (true) {
//   console.log(x, "in block");
// }

// function add() {
//   const x = 1;
//   const y = 50;
//   console.log(x + y);
// }

// console.log(y);

// add();

//Block Scope

// const x = 100;
// const foo = 1;
// var bar = 2;

// if (true) {
//   const y = 200;
//   console.log(x + y);
// }
// console.log(x + y);

// for (var i = 0; i <= 10; i++) {
//   console.log(i);
// }
// console.log(i);

// if (true) {
//   const a = 500;
//   let b = 600;
//   var c = 700;
// }

// console.log(c);
// function run() {
//   var d = 100;
//   console.log(d);
// }
// run();

// console.log(d);

//Nested Scope

// function first() {
//   const x = 100;

//   function second() {
//     const y = 200;
//     console.log(x + y);
//   }

//   //   console.log(y);

//   second();
// }
// first();
// if (true) {
//   const x = 100;
//   if (x === 100) {
//     const y = 200;
//     console.log(x + y);
//   }
// }
// console.log(y);

//// Function Declaration Vs Expression

//Function Declaration

// function addDollarSign(value) {
//   return "$" + value;
// }
// console.log(addDollarSign(100));

//Function Expression

// const addPlusSign = function (value) {
//   return "+" + value;
// };
// console.log(addPlusSign(200));

//Arrow Functions

// function add(a, b) {
//   return a + b;
// }

//Arrow function syntax
// const add = (a, b) => {
//   return a + b;
// };
//implicit Return
// const Subtract = (a, b) => a - b;
//can leave off () with a single param
// const double = (a) => a * 2;

//Retuning an object
// const createObj = () => ({
//   name: "Brad",
// });

// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(function (n) {
//   console.log(n);
// });

//Arow Function in a callback
// numbers.forEach((n) => console.log(n));

// console.log(add(1, 2));
// console.log(Subtract(10, 5));
// console.log(double(10));
// console.log(createObj());

//IIFE(immediately Invoked Function Expessions)

(function () {
  const user = "John";
  console.log(user);
  const hello = () => console.log("Hello from the IIFE");
  hello();
})();

(function (name) {
  console.log("Hello " + name);
})("Sarala");

(function hello() {
  console.log("Hello");
})();
