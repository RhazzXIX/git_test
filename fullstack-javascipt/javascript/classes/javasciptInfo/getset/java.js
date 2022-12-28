let user = {
  name: "john",
  surname: "smith",
};

Object.defineProperty(user, "fullName", {
  get() {
    return `${this.name} ${this.surname}`;
  },

  set(value) {
    [this.name, this.surname] = value.split(" ");
  },
});

// alert(user.fullName);

user.fullName = "this Name";


let user2 = {
  get name() {
    return this._name;
  },
  set name(value) {
    if (value.length < 4) {
      // alert ('Name is too short, need at least 4 characters');
      return;
    }
    this._name = value;
  }
};

// alert(user2.name);

user2.name = '';

function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  Object.defineProperty(this, 'age', {
    get() {
      return this._age;
    },
    set(value) {
      this._age = value;

    }
  })
}


let john = new User('john', new Date(1992, 6 , 1));
alert(john.birthday);
alert(john.age);

