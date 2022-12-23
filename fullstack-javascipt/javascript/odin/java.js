// // Factory

// const personFactory = (name, age) => {
//   const sayHello = () => console.log('hello');
//   return {name, age , sayHello};
// //  return {name: name, age: age, sayHello: sayHello} not Object shorthand
// }

// const jeff = personFactory('jeff', 27);

// console.log(jeff.name);

// jeff.sayHello();

// // Constructor

// const Person = function(name, age) {
//   this.sayHello = () => {
//     console.log('hello!')
//   };
//   this.name = name;
//   this.age = age;
// };

// const sally = new Person('sally', 27);

// const name = 'Maynard';
// const color = 'red';
// const number = 34;
// const food = 'rice';

// console.log(name, color, number, food);

// console.log({name, color, number, food});

// let a = 17;

// const func = x => {
//   a = x;
// };

// func(99);

// console.log(a);

// var b = 27;

// let sayHi = function(name) {
//   let text = 'Hi ' + name;
//   return function () {
//     console.log(text);
//   }
// }

// var age = 100;
// if (age > 12) {
//   let dogYears = age * 7;
//   console.log(`You are ${dogYears} dog years old!`);
// }

// // console.log(dogYears);

// const bravo = 'string test';
// let charlie = 'string test';
// let delta = 2;

// const FactoryFunction = string => {
//   const capitalizeString = () => string.toUpperCase();
//   const printString = () => console.log(`----${capitalizeString()}----`);
//   return { string, printString };
// };

// const taco = FactoryFunction('taco');

// // printString();
// // capitalizeString();
// // taco.capitalizeString();
// taco.printString();

// const numberCreator = () => {
//   let num = 0;
//   return () => {
//     console.log(num);
//     num++;
//   };
// };

// const num2 = numberCreator();

// const Player = (name, level) => {
//   let health = level *2;
//   const getLevel = () => level;
//   const getName = () => name;
//   const die = () => {
//     console.log('uh oh');
//   };
//   const damage = x => {
//     health -= x;
//     if (health <= 0) {
//       die();
//     }
//   };
//   const attack = enemy => {
//     if (level < enemy.getLevel()) {
//       damage(1);
//       console.log(`${enemy.getName()} has damaged ${name}`);
//     }
//     if ( level >= enemy.getLevel()) {
//       enemy.damage(1);
//       console.log(`${name} has damaged ${enemy.getName()}`)
//     }
//   };
//   return {attack, damage, getLevel, getName};
// };

// const jimmie = Player('jim', 10);
// const badGuy = Player('jeff', 5);
// jimmie.attack(badGuy);

// const Person = (name) => {
//   const sayName = () => console.log(`My name is ${name}`);
//   return {sayName};
// }

// const Nerd = (name) => {
//   const {sayName} = Person(name);
//   const doSomethingNerdy = () => console.log('nerd stuff');
//   return {sayName, doSomethingNerdy};
// }

// const jeff = Nerd('jeff');

// jeff.sayName();
// jeff.doSomethingNerdy();

// const o1 = { a: 1, b: 1, c: 1 };
// const o2 = { b: 2, c: 2 };
// const o3 = { c: 3 };

// const obj = Object.assign({}, o1, o2, o3);
// console.log(obj); // { a: 1, b: 2, c: 3 }

// const v1 = 'abc';
// const v2 = true;
// const v3 = 10;
// const v4 = Symbol('foo');

// const obj = Object.assign({}, v1, null, v2, undefined, v3, v4);
// // Primitives will be wrapped, null and undefined will be ignored.
// // Note, only string wrappers can have own enumerable properties.
// console.log(obj); // { "0": "a", "1": "b", "2": "c" }

// function Book(name, author, page) {
//   this.name = name;
//   this.author = author;
//   this.page = page;
// }

// Book.prototype.changeName = function (name) {
//   this.name = name;
//   return this.name;
// };

// const newBook = new Book("test", "test", 213);

// const myLibrary = [];

// myLibrary.push(newBook);

/// //////////////////

// const proto = {
//   hello: function hello() {
//     return `Hello, my name is ${ this.name }`;
//   }
// };

// const george = { ...proto, name: 'George', age: "26"};

// const msg = george.hello();

// console.log(msg); // Hello, my name is George

// import Events from 'eventemitter3';

// const rawMixin = function () {
//   const attrs = {};

//   return Object.assign(this, {
//     set(name, value) {
//       attrs[name] = value;

//       this.emit("change", {
//         prop: name,
//         value,
//       });
//     },

//     get(name) {
//       return attrs[name];
//     },
//   });
// };

// const mixinModel = (target) => rawMixin.call(target);

// const george = { name: "george" };
// const model = mixinModel(george);

// model.on('change', data => console.log(data));

// model.set('name', 'Sam');

// const greeting = (function sayHello() {
//   const text = "world";
//   const public2 = "I am public";

//   function _privateMethod() {
//     console.log(`Hello Up-skilling ${text}`);
//   }

//   function publicMethod() {
//     _privateMethod();
//   }
//   return {
//     public2,
//     publicMethod,
//   };
// })();
// greeting.publicMethod();

// const Formatter = (() => {
//   const log = (message) =>  `[${Date.now()}] Logger: ${message}`;

//   const makeUppercase = (text) => {
//     log("Making uppercase");
//     return text.toUpperCase();
//   };
//   // const setTimeRun = () => {
//   //   log("Setting times run");
//   //   ++timesRun;
//   // };

//   const writeTODOM = (selector, message) => {
//     document.querySelector(selector).innerHTML = log(message);
//   }
//   return {
//     makeUppercase,
//     writeTODOM,
//   };
// })();

// console.log(Formatter.makeUppercase("hello"));
// console.log(Formatter.timesRun);

// console.log(Formatter.timesRun);
// console.log(Formatter.makeUppercase("hello"));

// console.log(Formatter.timesRun.length);

// Formatter.writeTODOM('#target', 'Hi Up-skilling World!');

// const Player = (() => {
//   const nickName = name;
//   const myAge = age;
//   const myPet = pet;
//   intro = function () {
//     return `My name is ${nickName} and I\'m ${myAge} Years old. I have a pet ${myPet}`;
//   }
//   return {intro}
// }) ();

const reporter = ((user, car, location, situation) => {
  const report = () =>
    `Hi im ${user}, my car is a ${car}. I'm at ${location} and the traffic here is ${situation}.`;
  return {report};
}) ();

const traffic = (user, car, location, situation) => {
 const report = reporter(user, car, location, situation);
  return { user, car, location, situation, ...report}
};
