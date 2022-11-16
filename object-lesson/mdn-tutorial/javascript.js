//HELLO OJBJECT########
// const person = {
//     name: ['Bob', 'Smith'],
//     age: 32,
//     bio: function () {
//         console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
//     },
//     introduceSelf: function () {
//         console.log(`Hi! I'm ${this.name[0]}.`);
//     },
// };

//OBJECT AS OBJECT PROPERTIES

// const person = {
//     name: {
//         first: 'Bob',
//         last: 'Smith'
//     },
//         bio: function () {
//         console.log(`${this.name.first} ${this.name.last} is ${this.age} years old.`);
//     },
//     introduceSelf: function () {
//         console.log(`Hi! I'm ${this.name.first}.`);
//     },
// }

//BRACKET NOTATION#####

// const person = {
//     name:['Bob', 'Smith'],
//     age: 32,
// };

// function logProperty(propertyName) {
//     console.log(person[propertyName]);
// }

// logProperty('name');
// logProperty('age');


//SETTING OBJECT MEMBER

// const person = {
//     name:['Bob', 'Smith'],
//     age: 32,
// };

// person.age = 45;
// person["name"]["last"] = "Cratchit";

// const myDataName = 'height';
// const myDataValue = '1.75m';

// person[myDataName] = myDataValue;

//WHAT IS 'THIS'?#############

//The 'this' keyword refers to the current object the code is being written inside

// introduceSelf() {
//     console.log(`Hi! I'm ${this.name[0]}`);
// }


// const person1 = {
//     name: "Chris",
//     introduceSelf() {
//       console.log(`Hi! I'm ${this.name}.`);
//     },
//   };
  
//   const person2 = {
//     name: "Deepti",
//     introduceSelf() {
//       console.log(`Hi! I'm ${this.name}.`);
//     },
//   };

//INTRODUCING CONSTRUCTORS

function createPerson(name) {
    const obj = {};
    obj.name = name;
    obj.introduceSelf = function () {
        console.log (`Hi! I'm ${this.name}`)
    }
}