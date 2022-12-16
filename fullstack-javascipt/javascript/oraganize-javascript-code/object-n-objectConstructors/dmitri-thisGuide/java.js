// function hello(name) {
//   return `hello Up-skilling ${name}!`;
// }

// let message = hello("World");

// message = (function (name) {
//   return `Hello Up-skilling ${name}!`;
// })("World");

// console.log(window.myNumber);

// function sum(a, b) {
//   console.log(this === window);
//   this.myNumber = 20;
//   return a + b;
// }

// console.log(sum(15, 16));
// console.log(window.myNumber);

// console.log(this === window);
// this.myString = "Hello Up-skilling World!";
// console.log(window.myString);

// function multiply(a, b) {
//   "use strict";

//   console.log(this === undefined);
//   return a * b;
// }

// multiply(2, 5);

// function execute() {
//   "use strict";

//   function concat(str1, str2) {
//     console.log(this === undefined);
//     return str1 + str2;
//   }
//   concat("Hello", "Upskilling World!");
// }

// execute();

// const numbers = {
//   numberA: 5,
//   numberB: 10,

//   sum() {
//     console.log(this);

//     const calculate = () => {
//       console.log(this);
//       return this.numberA + this.numberB;
//     };

//     return calculate();
//   },
// };

// const myObject = {
//   helloMethod() {
//     return "Hello Up-skilling World!";
//   },
// };

// const message = myObject.helloMethod();

// const words = ["Hello", "Upskilling World"];
// words.join(",");

// const obj = {
//   myMethod() {
//     return new Date().toString();
//   },
// };
// obj.myMethod();

// const func = obj.myMethod;
// func();
// parseFloat("16.6");
// Number.isNaN(0);

// const calc = {
//   num: 0,
//   increment() {
//     console.log(this);
//     this.num += 1;
//     return this.num;
//   },
// };

// const calcu = {
//   what: "isthis?",
//   __proto__: calc,
// };

// const myDog = Object.create({
//   sayName() {
//     console.log(this);
//     return this.name;
//   },
// });

// myDog.name = "Milo";

// function Pet(type, legs) {
//   this.type = type;
//   this.legs = legs;

//   this.logInfo = function () {
//     console.log(this);
//     console.log(`The ${this.type} has ${this.legs} legs`);
//   };
// }

// const myCat = new Pet("Cat", 4);
// const boundLogInfo = myCat.logInfo.bind(myCat);

// setTimeout(myCat.logInfo, 1000);
// setTimeout(boundLogInfo, 1000);

// function Country(name, traveled) {
//   this.name = name || "United Kingdom";
//   this.traveled = Boolean(traveled);
// }

// Country.prototype.travel = function () {
//   console.log(this);
//   this.traveled = true;
// };

// const france = new Country("France", false);

// const unitedKingdom = new Country();

// france.travel();

// function Foo() {
//   console.log(this);
//   this.property = "Default Value";
// }

// const fooInstance = new Foo();

// function Vehicle(type, wheelsCount) {
//   if (!(this instanceof Vehicle)) {
//     throw Error("Error: Incorrent invocation");
//   }

//   this.type = type;
//   this.wheelsCount = wheelsCount;
//   console.log(this);
//   return this;
// }

// const car = new Vehicle("Car", 4);

// const brokenCar = Vehicle("Broken Car", 3);

// function sum(number1, number2) {
//   console.log(number1);
//   console.log(number2);
//   console.log(this);
//   return number1 + number2;
// }

// console.log(sum.call("what", 10, 2));
// console.log(sum.apply("is this?", [10, 2]));

// const rabbit = { name: "White Rabbit" };

// function concatName(string) {
//   console.log(this);
//   return console.log(string + this.name);
// }

// concatName.call(rabbit, "Hello ");
// concatName.apply(rabbit, ["Bye "]);

// function Runner(name) {
//   console.log(this instanceof Rabbit);
//   console.log(this);
//   this.name = name;
// }

// function Rabbit(name, countLegs) {
//   console.log(this instanceof Rabbit);
//   console.log(name);
//   Runner.call(this, name);
//   this.countLegs = countLegs;
// }

// const myRabbit = new Rabbit("White Rabbit", 4);

// function multiply(number) {
//   "use strict";

//   console.log(this);
//   return this * number;
// }

// const double = multiply.bind(2);

// const numbers = {
//   array: [3, 5, 10],

//   getNumbers() {
//     return console.log(this.array);
//   },
// };

// const boundGetNumbers = numbers.getNumbers.bind(numbers);

// const simpleGetNumbers = numbers.getNumbers;

// function getThis() {
//   "use strict";

//   return this;
// }

// const one = getThis.bind(1);

const hello = (name) => `Hello ${name}`;

hello("Up-skilling World");

[1, 2, 5, 6].filter((item) => item % 2 === 0);

const sumArguments = (...args) => {
  console.log(typeof arguments);
  return args.reduce((result, item) => result + item);
};

function Point(x, y) {
  this.x = x;
  this.y = y;

  this.log = () => {
    console.log(this);
    setTimeout(() => {
      console.log(this);
      console.log(`${this.x}:${this.y}`);
    }, 5000);
  };
}

const myPoint = new Point(95, 165);

const getContext = () => console.log(this);

const numbers = [1, 2];

(function () {
  const get = () => {
    console.log(this);
    return this;
  };

  console.log(this);
  get();
  get.call([0]);
  get.apply([0]);
}.call(numbers));

function createStudentId(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

const sally = new createStudentId("Sally", "19", "Female");

function Period(hours, minutes) {
  this.hours = hours;
  this.minutes = minutes;
}

Period.prototype.format = function () {
  console.log(this);
  return `${this.hours} hours and ${this.minutes} minutes`;
};

const walkPeriod = new Period(2, 30);
