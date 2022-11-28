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

// function createPerson(name) {
//     const obj = {};
//     obj.name = name;
//     obj.introduceSelf = function () {
//         console.log (`Hi! I'm ${this.name}`)
//     };
//     return obj;
// }

// const salva = createPerson('Salva');
// const frankie = createPerson('Frankie');

// function Person(name) {
//     this.name = name;
//     this.introduceSelf = function () {
//         console.log(`Hi! I'm ${this.name}.`);
//     };
// }

// const salva = new Person ('Salva');
// const frankie = new Person ('frankie')

//YOU'VE BEEN USING OBJECTS ALL ALONG#####


// myString.split(",");

// const myDiv = document.createElement("div");
// const myVideo = document.querySelector("video");

// const myNotification = new Notification("Hello!");


//TEST YOUR SKILLS: OBJECT BASICS####

//Object basics 1


// const cat = {
//     name : 'Bertie',
//     breed : 'Cymric',
//     color : 'white',
//     greeting: function() {
//       console.log('Meow!');
//     }
// }

// const catName = cat['name'];
// cat.greeting();
// cat.color = 'black';

//Object basics 2

// let bandInfo;

// const band = {
//     name: 'Panic at the Disco!',
//     nationality: 'American',
//     genre: 'Pop',
//     members: ['Brendon Urie', 'Ryan Ross', 'Spencer Smith'],
//     formed: '2005',
//     split: '2009',
//     albums: {
//         name: ['High Hopes', 'A Fever You Can\'t Sweat Out'],
//         released: ['2018', '2005']
//     }
// }

// bandInfo = `The ${band.name} is an all ${band.nationality} ${band.genre} group. Their members ${band.members[0]}, ${band.members[1]},
// and ${band.members[2]}, formed their group last ${band.formed} and release their album named "${band.albums.name[1]}". They split up last ${band.split} and
// ${band.members[0]} was the only one left. At ${band.albums.released[0]} he released a solo album named "${band.albums.name[0]}" which became a hit!`;

//Object basics 3

// const cat = {
//     name : 'Bertie',
//     breed : 'Cymric',
//     color : 'white',
//     greeting: function() {
//       console.log(`Hello, said ${this.name} the ${this.breed}`);
//     }
// };

// const cat2 = {
//     name : 'Miming',
//     breed : 'Catpin',
//     color : 'Zebra',
//     greeting: function() {
//       console.log(`Hello, said ${this.name} the ${this.breed}`);
//     }
// };

//Object basics 4

const cat = {
    name : 'Bertie',
    breed : 'Cymric',
    color : 'white',
}
  
  const cat2 = {
    name : 'Elfie',
    breed : 'Aphrodite Giant',
    color : 'ginger',
}

function addGreeting (obj) {
    obj.greeting = function() {console.log(`Hello, said ${this.name} the ${this.breed}`)};
}
  
addGreeting(cat);
addGreeting(cat2);
      