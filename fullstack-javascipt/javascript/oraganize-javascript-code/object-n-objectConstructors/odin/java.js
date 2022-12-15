// example one
const playerOneName = 'tim';
const playerTwoName = 'jenn';
const playerOneMarker = 'X';
const playerTwoMarker = 'O';

// example two
const playerOne = {
  name: 'tim',
  marker: 'X',
};

const playerTwo = {
  name: 'jenn',
  marker: 'O',
};

function printName(player) {
  console.log(player.name);
}

console.log(playerOneName);
console.log(playerTwoName);

function announceWinner(winningPlayer) {
  console.log('Congratulations!');
  console.log(winningPlayer.name + ' is the winner!');
}

function Player(name, marker) {
  this.name = name;
  this.maker = marker;
  this.sayName = function () {
      console.log(name);
  }
}

const player1 = new Player('steve' , 'X')
console.log(player1.name);

const player2 = new Player('also steve', 'O');
player2.sayName();

// Exercise Book Constructor

function CreateBookInfo(bookTitle, author, pages, read) {
  this.title = bookTitle;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
   return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`;
  };
}

const theHobbit = new CreateBookInfo(
  'The Hobbit', 
  'J.R.R. Tolkien', 
  '295', 
  'unread'
);
console.log(theHobbit.info());

function Student(name, grade) {
  this.name = name;
  this.grade = grade;
}

Student.prototype.sayName = function() {
  console.log(this.name);
};

Student.prototype.goToProm = function() {
  console.log('Eh.. go to prom?');
};

function EightGrader(name) {
  this.name = name;
  this.grade = 8;
}

EightGrader.prototype = Student.prototype;

const carl = new EightGrader('carl');
carl.sayName();
carl.grade;

function NinthGrader(name) {
  this.name = name;
  this.grade = 9;
}

NinthGrader.prototype = Student.prototype;

NinthGrader.prototype.sayName = function () {console.log('hahahahaha')};

carl.sayName();

