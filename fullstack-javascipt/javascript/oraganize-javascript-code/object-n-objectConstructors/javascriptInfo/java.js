// let animal = {
//   eats: true,
//   walk() {
//     if (!this.isSleeping) {
//       alert('I walk');
//       return 'I walk';
//     };
//   },

//   sleep() {
//     this.isSleeping = true;
//   },
    
//   runs: true
// };

// let rabbit = {
//   name: 'White Rabbit',
//   jumps: true,
//   __proto__: animal
// };

// let longEar = {
//     earLength: 10,
//     __proto__: rabbit
// };

// rabbit.sleep();

// console.log(rabbit.eats)
// console.log(rabbit.walk());

// rabbit.walk = function() {
//   return 'Rabbit! Bounce-bounce';
// };


// console.log(longEar.walk());
// console.log(longEar.jumps);

// let user = {
//   name: 'John',
//   surname: 'Smith',
  
//   set fullName(value) {
//     [this.name, this.surname] = value.split(' ');
//   },
  
//   get fullName() {
//     return `${this.name} ${this.surname}`
//   },
// };

// let admin = {
//   __proto__: user,
//   isAdmin: true
// };

// console.log(admin.fullName);

// admin.fullName = "Alice Cooper";

// console.log(admin.fullName);
// console.log(user.fullName);

// console.log(rabbit.isSleeping);
// console.log(animal.isSleeping);

// console.log(Object.keys(rabbit));

// for(let prop in rabbit) console.log(prop);

// for (let prop in rabbit) {
//   let isOwn = rabbit.hasOwnProperty(prop);
  
//   if (isOwn) {
//     console.log (`Our : ${prop}`);
//   } else {
//     console.log(`Inherited: ${prop}`);
//   }
// };

// Tasks

let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__: head
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table
};

let pockets = {
  money: 2000,
  __proto__: bed
};


let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};


let hamster = {
  

  eat(food) {
    this.stomach = [food];
  }
};

let speedy = {
  stomach: [],
  __proto__: hamster
};

let lazy = {
  stomach: [],
  __proto__: hamster
};

speedy.eat('apple');
console.log(speedy.stomach);
console.log(lazy.stomach);