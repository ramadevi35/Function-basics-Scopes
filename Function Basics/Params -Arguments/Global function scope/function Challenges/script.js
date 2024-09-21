//challenge 1

// function getCelsius(f) {
//   const celsius = ((f - 32) * 5) / 9;
//   return celsius;
// }

// const getCelsius = (f) => ((f - 32) * 5) / 9;

// console.log(`The temp is ${getCelsius(50)} \xB0C`);

// //These are Importent
// const list = ["Rama", "Potti", "hanumthwaka", "akhil", "nikhil"];
// function greeting(person1, p2, ...rest) {
//   console.log(person1, p2);
// }

// greeting(...list);

// const list = ["Rama", "Potti", "akhil", "nikhil"];

// const [p1, rama, ...rest] = list;

// console.log(rama, rest);

// const person = {
//   name: "rama",
//   character: "Geera",
//   age: 20,
// };
// var { name, ...rest } = person;

// console.log(name, rest);

// const person = {
//   name: "rama",
//   character: "Geera",
//   age: 20,
// };

// const professional = { gender: "female", ...person, age: 10 };
// console.log(professional);

// const list = [
//   {
//     name: "rama",
//     age: 31,
//   },
//   {
//     name: "potti",
//     age: 41,
//   },
//   {
//     name: "akhil",
//     age: 17,
//   },
//   {
//     name: "nikhil",
//     age: 15,
//   },
// ];

// list.forEach(({ name, age, gender = "male" }) => {
//   console.log(name, age, gender);
// });

//challenge 2

// function minMax(arr) {
//   const min = Math.min(...arr);
//   const max = Math.max(...arr);

//   return {
//     min,
//     max,
//   };
// }
// console.log(minMax([31, 2, 3, 4, 5, 6]));

// //challenge 3
// ((length, width) => {
//   const area = length * width;
//   const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`;
//   console.log(output);
// })(20, 10);

// const x = 100;
// const y = 50;

// function getSum(n1, n2) {
//   const sum = n1 + n2;
//   return sum;
// }
// const sum1 = getSum(x, y);
// const sum2 = getSum(10, 5);

// console.log(sum1, sum2);

// x = 5;
// y = 10;
// if (x >= y) console.log(`${x} is greater than or equal to ${y} `);
// else console.log("This is false");

//Ternery operator

// const age = 13;
//usine an if statement

// if (age >= 18) {
//   console.log("You can Vote!");
// } else {
//   console.log("You can not Vote");
// }

//using a ternary operator
// age >= 18 ? console.log("You can Vote!") : console.log("You can not Vote");
//Assigning a condational value to a variable
// const canVote = age >= 18 ? true : false;
// const canVote2 = age >= 18 ? "You can Vote!" : "You can not Vote";
// console.log(canVote);
// console.log(canVote2);

// const auth = true;
// let redirect;

// if (auth) {
//   alert("Welcome to the dashboard");
//   redirect = "/dashboard";
// } else {
//   alert("Access Denied");
//   redirect = "/login";
// }

// const redirect = auth
//   ? (alert("Welcome to the dashboard"), "/dashboard")
//   : (alert("Access Denied"), "/login");
// console.log(redirect);

//using shorthand

// auth ? console.log("Welcome to the dashboard") : null;
// auth && console.log("Welcome to the dashboard");

//Fo Loop

// for (let i = 0; i <= 10; i++) {
//   if (i === 7) {
//     console.log("7 is my lucky number");
//   } else {
//     console.log("Number " + i);
//   }
// }

//nest loops
// for (let i = 1; i <= 100; i++) {
//   console.log("Number" + i);

//   for (let j = 1; j <= 5; j++) {
//     console.log(`${i}*${j}=${i * j}`);
//   }
// }

//Loop through an array

// const names = ["Brad", "sam", "Sara", "John", "Tim"];

// for (let i = 0; i < names.length; i++) {
//   if (i === 3) {
//     console.log(names[i] + " is the best");
//   } else {
//     console.log(names[i]);
//   }
// }

//Break & continue

//Break
// for (let i = 0; i <= 20; i++) {
//   if (i === 15) {
//     console.log("Breaking..");
//     break;
//   }
//   console.log(i);
// }

//continue

// for (let i = 0; i <= 20; i++) {
//   if (i === 13) {
//     console.log("Skipping...");
//     continue;
//   }
//   console.log(i);
// }

//FizzBuzz Challenge
//for Loop
// for (let i = 1; i <= 100; i++) {
//   if (i % 15 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }
//while loop

// let i = 1;
// while (i <= 100) {
//   if (i % 15 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
//   i++;
// }

//For of Loop
//Loop Through array

// const items = ["books", "table", "chair", "kite"];
// const users = [{ name: "Brad" }, { name: "kate" }, { name: "steve" }];

// for (const item of items) {
//   console.log(item);
// }
// for (const user of users) {
//   console.log(user.name);
// }

//Loop over strings
// const str = "Hello World";
// for (const letter of str) {
//   console.log(letter);
// }
// //Loop over Maps
// const map = new Map();

// map.set("name", "John");
// map.set("age", 30);
// for (const [key, value] of map) {
//   console.log(key, value);
// }

//For In Loop
// const colorObj = {
//   color1: "red",
//   color2: "blue",
//   color3: "orange",
//   color4: "green",
// };
// for (const key in colorObj) {
//   console.log(key, colorObj[key]);
// }

// const colorArr = ["red", "green", "orange", "blue", "yellow"];

// for (const key in colorArr) {
//   console.log(colorArr[key]);
// }

////forEach

// const socials = ["Twitter", "LinkedIn", "Facebook", "Instagram"];

// console.log(socials.__proto__);
// socials.forEach(function (item) {
//   console.log(item);
// });

// socials.forEach((item, index, arr) => console.log(`${index}-${item}`, arr));

// function logSocials(social) {
//   console.log(social);
// }
// socials.forEach(logSocials);

// const socialObjs = [
//   { name: "Twitter", url: "https://twitter.com" },
//   { name: "Facebook", url: "https://facebook.com" },
//   { name: "Linkdin", url: "https://linkdin.com" },
//   { name: "Instagram", url: "https://instagram.com" },
// ];

// socialObjs.forEach((item) => console.log(item.name, item.url));

////Filter methods

// const numbers = [1, 2, 3, 4, 5, 6, 78, 9, 10, 11, 12, 13, 14];

// const evenNumbers = numbers.filter(function (number) {
//   return number % 2 === 0;
// });

//short verson
// const evenNumbers = numbers.filter((number) => number % 2 === 0);
// console.log(evenNumbers);
// const oddNumbers = numbers.filter((number) => number % 2 === 1);
// console.log(oddNumbers);

//same with forEach

// const evenNumbers = [];

// numbers.forEach((number) => {
//   if (number % 2 === 0) {
//     evenNumbers.push(number);
//   }
// });
// console.log(evenNumbers);

// const companies = [
//   { name: "Company One", Category: "Finance", Start: 1981, end: 2004 },
//   { name: "Company Two", Category: "Retail", Start: 1992, end: 2008 },
//   { name: "Company Three", Category: "Auto", Start: 1999, end: 2007 },
//   { name: "Company Four", Category: "Retail", Start: 1989, end: 2010 },
//   { name: "Company Five", Category: "technology", Start: 2009, end: 2014 },
//   { name: "Company Six", Category: "Finance", Start: 1987, end: 2010 },
//   { name: "Company Seven", Category: "Auto", Start: 1986, end: 2010 },
//   { name: "Company Eight", Category: "Finance", Start: 1981, end: 2004 },
//   { name: "Company Nine", Category: "Retail", Start: 1981, end: 1989 },
// ];
//get only retail companies

// const retailCompanies = companies.filter(
//   (company) => company.Category === "Retail"
// );
// console.log(retailCompanies);

//Get Companies that started in or after 1980 and ended in or before 2005

// const earlyCompanies = companies.filter(
//   (company) => company.Start >= 1980 && company.end <= 2005
// );
// console.log(earlyCompanies);

//Get companies that lasted 10 years or more

// const longCompanies = companies.filter(
//   (company) => company.end - company.Start >= 10
// );
// console.log(longCompanies);

//Map Methods

// const numbers = [1, 2, 3, 4, 5];

// const doubledNumbers = numbers.map((number) => number * 2);
// console.log(doubledNumbers);

// //same with forEach

// const doubledNumbers2 = [];
// numbers.forEach((number) => {
//   doubledNumbers2.push(number * 2);
// });
// console.log(doubledNumbers2);

const companies = [
  { name: "Company One", Category: "Finance", Start: 1981, end: 2004 },
  { name: "Company Two", Category: "Retail", Start: 1992, end: 2008 },
  { name: "Company Three", Category: "Auto", Start: 1999, end: 2007 },
  { name: "Company Four", Category: "Retail", Start: 1989, end: 2010 },
  { name: "Company Five", Category: "technology", Start: 2009, end: 2014 },
  { name: "Company Six", Category: "Finance", Start: 1987, end: 2010 },
  { name: "Company Seven", Category: "Auto", Start: 1986, end: 2010 },
  { name: "Company Eight", Category: "Finance", Start: 1981, end: 2004 },
  { name: "Company Nine", Category: "Retail", Start: 1981, end: 1989 },
];

//create an array of company names
const companyNames = companies.map((company) => company.name);
// console.log(companyNames);
///use forEach
const companyNames2 = [];
companies.forEach((company) => {
  companyNames2.push(company.name);
});
// console.log(companyNames2);

//create an array with company and category
const companyInfo = companies.map((company) => {
  return {
    name: company.name,
    Category: company.Category,
  };
});
// console.log(companyInfo);

//create an array of abjects with the name and the length of each company in years

// const companyYears = companies.map((company) => {
//   return {
//     name: company.name,
//     length: company.end - company.Start + " Years",
//   };
// });
// console.log(companyYears);

//same with forEach
// const companyYears = [];
// companies.forEach((company) => {
//   companyYears.push({
//     name: company.name,
//     length: company.end - company.Start + " Years",
//   });
// });
// console.log(companyYears);

//chain map Methods
// const numbers = [1, 2, 3, 4, 5];
// const squareAndDouble = numbers
//   .map((number) => Math.sqrt(number))
//   .map((sqrt) => sqrt * 2);

// const squareAndDouble2 = numbers
//   .map(function (number) {
//     return Math.sqrt(number);
//   })
//   .map(function (sqrt) {
//     return sqrt * 2;
//   })
//   .map(function (sqrtDoubled) {
//     return sqrtDoubled * 3;
//   });
// console.log(squareAndDouble2);

//chaining different Methods
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenDouble = numbers
//   .filter((number) => number % 2 === 0)
//   .map((number) => number * 2)
//   .map((number) => number * 3);

// console.log(evenDouble);

//Reduce Methods

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const sum = numbers.reduce(function (accumulator, currentvalue) {
//   return accumulator + currentvalue;
// }, 0);

// const sum2 = numbers.reduce((acc, cur) => acc + cur, 0);
// console.log(sum2);

//using a for loop

// const sum3 = () => {
//   let acc = 0;
//   for (const cur of numbers) {
//     acc += cur;
//   }
//   return acc;
// };
// console.log(sum3());

// const cart = [
//   { id: 1, name: "Product 1", price: 130 },
//   { id: 2, name: "Product 2", price: 150 },
//   { id: 3, name: "Product 3", price: 200 },
// ];
// const total = cart.reduce(function (acc, product) {
//   return acc + product.price;
// }, 0);
// console.log(total);

// Array Method Challenges

// first Challenge
// const people = [
//   {
//     firstName: "John",
//     lastName: "Doe",
//     email: "john@gmail.com",
//     phone: "111-111-111",
//     age: 30,
//   },
//   {
//     firstName: "Jane",
//     lastName: "Doe",
//     email: "jane@gmail.com",
//     phone: "111-222-111",
//     age: 25,
//   },
//   {
//     firstName: "kate",
//     lastName: "Doe",
//     email: "kate@gmail.com",
//     phone: "111-111-333",
//     age: 19,
//   },
//   {
//     firstName: "Soe",
//     lastName: "Doe",
//     email: "soe@gmail.com",
//     phone: "111-444-111",
//     age: 23,
//   },
//   {
//     firstName: "Josh",
//     lastName: "Doe",
//     email: "joshn@gmail.com",
//     phone: "111-555-111",
//     age: 45,
//   },
//   {
//     firstName: "Bob",
//     lastName: "Doe",
//     email: "bob@gmail.com",
//     phone: "111-111-666",
//     age: 22,
//   },
// ];
// const youngPeople = people
//   .filter((person) => person.age <= 25)
//   .map((person) => ({
//     name: person.firstName + " " + person.lastName,
//     email: person.email,
//   }));
// console.log(youngPeople);

// // Challenge 2
// const numbers = [2, -30, 50, 20, -12, -9, 7];

// const positiveSum = numbers
//   .filter((number) => number > 0)
//   .reduce((acc, cur) => acc + cur, 0);
// console.log(positiveSum);

// // challenge 3

// const words = ["coder", "programmer", "developer"];
// const cWords = words.map((word) => {
//   return word[0].toUpperCase() + word.slice(1, word.length);
// });
// console.log(cWords);
