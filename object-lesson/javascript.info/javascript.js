//OBJECTS#########
// let user = {
//     name: 'John',
//     age: 30,
//     'like birds': true,
// };

// let key = 'like birds';


//SQUARE BRAKETS####
// let user = {};

// // set
// user["likes birds"] = true;

// // get
// alert(user["likes birds"]); // true

// // delete
// delete user["likes birds"];

// let user = {
//     name: "John",
//     age: 30
//   };
  
//   let key = prompt("What do you want to know about the user?", "name");
  
//   // access by variable
//   alert( user[key] ); // John (if enter "name")


// let fruit = prompt('Which fruit to buy?', 'apple');

// let bag = {
// [fruit]: 5,
// };

//COMPUTED PROPERTIES#######

// bag[fruit] = 5;

// let fruit = 'apple';

// let bag = {
//     [fruit + 'Computers']: 5,
// };


//PROPERTY VALUE SHORTHAND#####

// function makeUser(name, age) {
//     return {
//         name,
//         age,
//     };
// }

// let user = makeUser('John', 30);
// alert(user.name);

// let user = {
//     name,
//     age: 30,
// };

//PROPERTY NAMES LIMITATION#########

// let obj = {
//     for: 1,
//     let: 2,
//     return: 3,
// };

// alert( obj.for + obj.let + obj.return );

// let obj = {
//     0: 'test',
// };

// alert( obj[0] );
// alert( obj['0'] );

// let obj = {};
// obj[_proto_] = 5;
// alert(obj[_proto_]); // limitation on _proto_

//PROPERTY EXISTENCE TEST, 'IN' OPERATOR########

// let user = {};

// alert( user.noSuchProperty === undefined );


// let user = {
//     name: 'John',
//     age: 30,
// };

// alert( 'age' in user );
// alert( 'blabla' in user );

// let key = 'age';

// alert( key in user );

// let obj = {
//     test: undefined,
// };

// alert( obj.test );
// alert( 'test' in obj );

//THE 'FOR..IN' LOOP########

// for (key in object) {
//     syntax
// }

// let user = {
//     name: 'John',
//     age: 30,
//     inAdmin: true,
// };

// for (let key in user) {
//     alert( key );
//     alert( user[key] );
// };



//ORDERED LIKE AN OBJECT

//integer properties
// let codes = {
//     '49': 'Germany',
//     '41': 'Switzerland',
//     '44': 'Great Britain',
//     '1': 'USA',
// };

// for (let code in codes) {
//     console.log(code);
// }

// let user = {
//     name: 'John',
//     surname: 'Smith',
// };

// for(let prop in user) {
//     console.log(user[prop]);
// }

// let codes = {
//     '+49': 'Germany',
//     '+41': 'Switzerland',
//     '+44': 'Great Britain',
//     '+01': 'USA',
// };

// for (let code in codes) {
//     console.log(+code);
// };

//TASKS##########

//hello object

// let user = {
//     name: 'John',
//     surname: 'Smith',
// };

// user.name = 'Pete';

// delete user.name;

//check for emptiness
//I've checked the solution for this
// let schedule = {};

// function isEmpty (schedule) {
//     for(let sched in schedule) {
//         return false;
//     }
//     return true;
// };

//sum object properties
//made 2 solutions

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// };

// sum = 0

// for (let pay in salaries) {
//     sum += salaries[pay];
// }

// // function sum () {
//     let total = 0;
//     for (let pay in salaries) {
//         total += salaries[pay];
//     };
//     return total;
// }

//multiply numeric property values by 2

let menu = {
    width: 200,
    height: 300,
    title: 'My menu'
};

function multiplyNumeric() {
    let num = 1;
    for(let key in menu) {
        if(typeof(menu[key]) == 'number') {
            menu[key] *= 2;
        };
    };
}



