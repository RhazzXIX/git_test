// const h1 = document.createElement("h1");
// h1.textContent = "Hello Up-skilling World!";
// document.querySelector("body").appendChild(h1);
// h1.addEventListener("click", () => {
//   if (h1.textContent === "Hello Up-skilling World!") {
//     h1.textContent = "Up-skilling World says, Hi! back";
//   } else {
//     h1.textContent = "Hello Up-skilling World!";
//   }
// });

// class declaration

// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// }

//Expression; the class is anonymous but assigned to a variable

// const Square = class {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// }

// const Triangle = class Triangle2 {
//   constructor(altitude, vertex, side) {
//     this.altitude = altitude;
//     this.vertex = vertex;
//     this.side = side;
//   }
// }

//Constructors 

// class Polygon {
//   constructor () {
//     this.name = 'Polygon';
//   }
// }

// const poly1 = new Polygon();

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   instroduce() {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// }

// const otto = new Person('Otto');

// class Random {
//   add () {
//     let sum = this.a + this.b;
//     console.log (sum) 
//   }
// }

// let random = new Random(12, 25);

// class ValidationError extends Error {
//   constructor (message) {
//     super(message);
//     this.name = "validationError";
//     this.code = "42";
//   }

//   printCustomerMessage () {
//     return `Validation Failed :-( (details: ${this.message} , code: ${this.code})`;
//   }
// }

// try {
//   throw new ValidationError('Not a valid Phone number');
// } catch (error) {
//   if (error instanceof ValidationError) {
    // console.log(error.name);
    // console.log(error.printCustomerMessage());
//   } else {
//     console.log('Unknown error', error);
//     throw error;
//   }
// }

// class ParentClass {
//   constructor() {
//     return 1;
//   }
// }

// console.log(new ParentClass());

// class ChildClass extends ParentClass {
//   constructor() {
//     return 1;
//   }
// }

// console.log(new ChildClass());

// class Person {
//   constructor (name = 'Anonymous') {
//     this.name = name;
//   }
//   introduce () {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// }

// const person = new Person();


// class Foo {
//   ["constructor"] () {
//     console.log("called");
//     this.a = 1;
//   }
// }

// const foo = new Foo();


// class Polygon {
//   constructor(height, width) {
//     this.name = 'Polygon';
//     this.height = height;
//     this.width = width;
//   }

//   sayName() {
//     console.log('Hi, i am a ', this.name + '.');
//   }

//   sayHistory() {
//     console.log('"Polygon" is derived from the greek polus (many) ' + 'and gonia (angle).');
//   }
// }

// class Square extends Polygon {
//   constructor (length) {
//     super(length, length);
//   }

//   get area() {
//     return this.height * this.width;
//   }

//   set area(value) {
//     this.height = value ** 0.5;
//     this.width = value ** 0.5;
//   }
// }

// const square1 = new Square(25);

// class Rectangle {
//   constructor() {
//     this.name = "Rectangle";
//   }
// }

// Object.setPrototypeOf(Square, Rectangle);


// const newInstance = new Square();

//Static Blocks


// let y = 'Outer y ';

// class A {
//   static field = 'Inner y';

//   static {
//     let y = this.field;
//   }
// }

// class MyClass {
//   static field1 = console.log('field1 called');
  
//   static {
//     console.log('Class static block #1 called')
//   }

//   static field2 = console.log('field2 called');

//   static {
//     console.log('Class static block #2 called');
//   }
// }

// class A {
//   static field = 'A static field';

//   static fieldA = 'A.fieldA';
  
//   static {
//     console.log(this.field);
//   }
// }

// class B extends A { 
//   static{
//     console.log(super.fieldA);
//   }
// }


// let getDPrivateField;

// class D {
//   #privateField;

//   constructor(v) {
//     this.#privateField = v;
//   }

//   static {
//     getDPrivateField = (d) => d.#privateField;
//   }
// }

// console.log(getDPrivateField(new D('shown private')));

//Prototype Methods

// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }

//   get area() {
//     return this.calcArea ();
//   }

//   calcArea() {
//     return this.height * this.width;
//   }
// }


// const square = new Rectangle(10, 10);

//Generator methods

// class Polygon {
//   constructor (...sides) {
//     this.sides = sides;
//   }
  
//   *getSides() {
//     for (const side of this.sides) {
//       yield side;
//     };
//   }
// }

// const pentagon = new Polygon(1,2,3,4,5);
// console.log(Array.from(pentagon.getSides()));

//Static methods and fields

// class Point {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }

//   static displayName = 'Point';
  
//   static distance(a, b) {
//     const dx = a.x - b.x;
//     const dy = a.y - b.y;

//     return Math.hypot(dx, dy);
//   }
// }

// const p1 = new Point(5,5);

// const p2 = new Point(10, 10);

//Binding this with prototype and static methods

// class Animal {
//   speak() {
//     return this;
//   }

//   static eat () {
//     return this;
//   }
// }

// const obj = new Animal();
// const speak = obj.speak();

// const eat = Animal.eat();


// function Animal2 () {};

// Animal2.prototype.speak = function() {
//   return this;
// }

// Animal2.eat = function () {
//   return this;
// }

// const obj2 = new Animal2()
// const speak2 = obj2.speak;
// const eat2 = Animal2.eat;

//Field declarations

//Public field declarations

// class Rectangle {
//   height = 0;

//   width;

//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// }

//Private field declarations

// class PrivateRectangle {
//   #height = 0;

//   #width;

//   length;

//   constructor(height, width, length) {
//     this.#height = height;
//     this.#width = width;
//     this.length = length;
//   }

//   informDimentions () {
//     return `my height is ${this.#height} and my width is ${this.#width}`;
//   }

//   get height () {
//     return this.#height;
//   }

//   set height(value) {
//     this.#height = value;
//   }
// }

//Sub classing with extends

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

// }

// Animal.prototype.speak = function () {
//   console.log(`${this.name} makes a noise.`);
// }

// class Dog extends Animal {
//   speak() {
//     console.log(`${this.name} barks.`)
//   }
// }

// class Cat extends Animal {

// }

// const d = new Dog('Beka');

// const c = new Cat('Bubu');

// const Animal = {
//   speak () {
//     console.log(`${this.name} makes a noise.`);
//   }
// };

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// }

// Object.setPrototypeOf(Dog.prototype, Animal);

// const d = new Dog('Darky');

//Species

// class MyArray extends Array {
//   static get [Symbol.species]() { return Array; }
// }

// const a = new MyArray(1, 2, 3);
// const mapped = a.map((x) => x * x);

//Super class calls with super

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   speak () {
//     console.log(`${this.name} makes a noise.`);
//   }
// }

// class Lion extends Cat {
//   speak() {
//     super.speak();
//     console.log(`${this.name} roars.`);
//   }
// }

// const l = new Lion('Fuzzy');

//Mix-ins

// const calculatorMixin = (Base) => class extends Base {
//   calc() {
//     return this.num1 + this.num2;
//   }
// };

// const randomizerMixin = (Base) => class extends Base {
//   randomize() { 
//     return (this.num1 + this.num2) * Math.random();
//   }
// };

// class Foo {
//   constructor(num1, num2) {
//     this.num1 = num1;
//     this.num2 = num2;
//   }
// }
// class Bar extends calculatorMixin(randomizerMixin(Foo)) {

// };

