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

//constructors 

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


class Polygon {
  constructor(height, width) {
    this.name = 'Polygon';
    this.height = height;
    this.width = width;
  }

  sayName() {
    console.log('Hi, i am a ', this.name + '.');
  }

  sayHistory() {
    console.log('"Polygon" is derived from the greek polus (many) ' + 'and gonia (angle).');
  }
}

class Square extends Polygon {
  constructor (length) {
    super(length, length);
  }

  get area() {
    return this.height * this.width;
  }

  set area(value) {
    this.height = value ** 0.5;
    this.width = value ** 0.5;
  }
}

const square1 = new Square(25);

class Rectangle {
  constructor() {
    this.name = "Rectangle";
  }
}

Object.setPrototypeOf(Square, Rectangle);


const newInstance = new Square();
