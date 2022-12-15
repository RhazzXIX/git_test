function PrintStuff (myDocuments) {
  this.documents = myDocuments;
}

PrintStuff.prototype.print = function () {
  console.log(this.documents);
};

let newObj = new PrintStuff('I am a new object and I can print.');
newObj.print();

//Constructor

function Account() {
}

let userAccount = new Account();
let myObj= new Object();
console.log(myObj.constructor);
console.log(userAccount.constructor);


// Demonstration of inheritance

function Plant () {
  this.country = 'Mexico';
  this.isOrganic = true;
}

Plant.prototype.showNameAndColor = function () {
  return(`I am a ${this.name} and my color is ${this.color}`);
};

Plant.prototype.amIOrganic = function () {
  if (this.isOrganic) console.log('I am organic, Baby!');
};

function Fruit(fruitName, fruitColor) {
  this.name = fruitName;
  this.color = fruitColor;
}

Fruit.prototype = new Plant();

let aBanana = new Fruit ('Banana' , 'Yellow');

console.log(aBanana.name);
console.log(aBanana.showNameAndColor());

// Prototype Attribute: Accessing Properties on Objects

let myFriends = {
  name: 'Pete',
};
console.log(myFriends.name);
myFriends.toString();

// Object.prototype Properties Inherited by all Objects

function People () {
  this.superstar = 'Michael Jackson';
}

People.prototype.athlete = 'Tiger Woods';

let famousPerson = new People();
famousPerson.superstar = 'Steve Jobs';

console.log(famousPerson.superstar);

console.log(famousPerson.athlete);
console.log(famousPerson.toString());