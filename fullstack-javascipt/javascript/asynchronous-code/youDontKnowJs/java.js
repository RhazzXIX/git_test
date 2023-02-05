// Chater 2: Callbacks
// setTimeout(() =>{ console.log('test'); }, 3000);

// function triggered(err, data) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
//   console.log(this);
// }

// function checkSent (fn, delay) {
//   let intv = setTimeout( function() {
//     intv = null;
//     fn (new Error ('Timeout!'));
//   }, delay);

//   return function () {
//     if (intv) {
//       clearTimeout (intv);
//       fn.apply(this, [null].concat([].slice.call(arguments)));
//     }
//   }
// }

// ajax("http://some.url.1", checkSent(triggered, 500))

// function syngcify(fn) {
//   let orig_fn = fn;
//   let intv = setTimeout (function () {
//     intv = null;
//     if (fn) fn();
//   }, 0);

//   fn = null;
//   return function () {
//     if (intv) {
//       fn = orig_fn.bind.apply(
//         orig_fn,
//         [this].concat([].slice.call(arguments))
//       );
//     } else {
//       orig_fn.apply(this, arguments);
//     };
//   }
// }

// function logA() {
//   console.log(a);
// }

// a = 0

// setTimeout(syngcify(logA)
// , 0);

// setTimeout(logA, 1000);

// a++;

// Chapter 3: Promises

// let x;
// let y = 2;

// const addXNY = setInterval (() => {
//   if (x) {
//     console.log ( x + y );
//     clearInterval(addXNY);
//   }
// }, 500)

// setInterval(() => {
//   x = 10;
// }, 5000)

// function add(getX, getY, cb) {
//   let a, b;
//     getX ( function(xVal) {
//       a = xVal;
//       if ( b != undefined) {
//         cb (a + b);
//       };
//     });
//     getY ( function(yVal) {
//       b = yVal;
//       if (a != undefined) {
//         cb (a + b);
//       }
//     });
// }

// function fetchX () {
//   let xVal = new Promise (function (resolve, reject) {
//     setInterval(() => {
//       if (x) resolve(x);
//     }, 500);
//   })
//   return xVal
// }

// function fetchY() {
//   let yVal = new Promise(function (resolve, reject) {
//     setInterval(() => {
//       if (y) resolve(y);
//     }, 500);
//   });
//   return yVal;
// }

// add(fetchX, fetchY, function(sum) {
//   console.log(sum)
// });

// function addPromises (xPromise , yPromise) {
//   return Promise.all([xPromise, yPromise]).then(function (values) {
//     return values[0] + values[1];
//   })
// }

// addPromises(fetchX(), fetchY()).then(function(sum){
//   console.log(sum);
// })

// function test () {
//   console.log('test')
// }

// function loop () {
//   for (let i = 0 ; i <= 10000; i += 1) {
//     console.log(i);
//     if (i === 10000) console.log('loop')
//   }
// }


// test();

// function testErr () {
//   return new Promise(function (resolve, reject) {
//     reject(Error('test'))
//   })
// };

// testErr().then(
//   function(a) {
//     console.log(a)
//   },
//   function(err) {
//     test();
//     console.log(err);
//   }
// ).catch(err => console.log(err))

// const a = 1;
// const b = 2;

// function add(num1, num2) {
//   let sum = num1 + num2;
//   return sum;
// }

// Promise.resolve(add(a,b))
//   .then(sum => console.log(sum));

// const p = Promise.resolve(21);

// const p2 = p.then(function (v) {
//   console.log(v);

//   return v * 2;
// });


// p2.then ( function (v) {
//   console.log(v)
// })

// const a = Promise.resolve(22);

// a.then ( function (v) {
//   console.log(v)

//   return new Promise (function (resolve, reject) {
//     setTimeout( function () {
//       resolve( v * 2 );
//     }, 1000
//     )
//   })
// })
// .then ( function (v) {
//   console.log(v);
// })

// function Timer (fn) {
//   const testFn = new Promise(function (resolve) {
//     const start = new Date();
//     fn();
//     resolve(start);
//   })
//   return testFn;
// }

// Timer(loop).then(function(start){
//   const end = new Date();
//   console.log(start, end)
//   console.log(end - start);
// })


let x;

setTimeout(() => {
  x = 2
}, 5000);

function checkX () {
  return new Promise(function X(test, reject) {
    const check = setInterval(() => {
      if (x) {
        clearInterval(check) 
        // reject(x);
        test(x)
      }
    }, 100)
  });
}

checkX().then(
  function fulfilled(xVal) {return {xVal}}, 
  function rejected(err) { console.log (err) }
)
.then(
  function(test) {
    console.log(test)
  }, 
  function(err) {
    console.log(err)
  }
)
// .catch((err) => console.log(err))


// function greet() {
//   setTimeout ( function () {
//     baz.bar();
//   }, 100);
// };

// try {
//   greet();
// }
// catch(err) {
//   console.log(err);
// }

// function foo(cb) {
//   setTimeout( () => {
//     try{
//       const x = baz.bar();
//       cb (null, x);
//     }
//     catch (err) {
//       cb (err);
//     }
//   }, 100)
// }

// foo( function (err, val) {
//   if (err) {
//     console.error(err);
//   }
//   else {
//     console.log(val)
//   }
// });

// const p = Promise.reject('oops');

// p.then(
//   function fulfilled(msg) {
//     console.log(msg.toLowerCase());
//   },
//   function rejected (err) {
//     console.log(err);
//   }
// ).catch (err => console.log(err))

// let p = prompt('rock,paper, scissors? ')

function playerSelect() {

  let playerSelection = prompt("Rock, Paper, or Scissors?");
  playerSelection = playerSelection.toLowerCase();
  console.log(playerSelection);
  console.log(playerSelection == 'rock');

  if (playerSelection != "rock"  || playerSelection != "paper"  || playerSelection!= "scissors") {
      alert("Only Choose Rock, Paper or Scissors!")
      playerSelect()
  } else {
      return playerSelection
  }
}