const div = document.createElement("div");
div.textContent = "Hello Up-skilling world!";
document.querySelector("body").appendChild(div);

class Users {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    alert(`Hi! my name is ${this.name} and I'm ${this.age} years old`);
  }
}
const josh = new Users("josh", 25);

function User(name, age) {
  return Object.assign({}, { name, age }, { sayHi });
}

const sayHi = function () {
  alert(`Hi! my name is ${this.name} and I'm ${this.age} years old`);
};

let john = User("John", 25);

let class1 = class Myclass {
  sayHi() {
    alert(Myclass);
  }
};

function makeClass(phrase) {
  return class {
    sayHi() {
      alert(phrase);
    }
  };
}

let mimi = makeClass("hello");

class Player {
  constructor(name) {
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      alert("name is too short.");
      return;
    }
    this._name = value;
  }
}

// let mike = new Player('Mike');
// mike = new Player('mik')

class Walker {
  ["say" + "Hi"]() {
    alert("hello");
  }
}

// new Walker().sayHi();

class Runner {
  name = prompt("Enter name:", "John");

  sayHi() {
    alert(`Hello, I'm ${this.name}`);
  }
}

// new Runner().sayHi();

class Button {
  constructor(value) {
    this.value = value;
  }

  click = () => {
    alert(this.value);
  };
}

let button = new Button("hello");

setTimeout(button.click, 1000);
