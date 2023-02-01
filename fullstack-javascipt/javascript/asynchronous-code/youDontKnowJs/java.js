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

// function fetchY () {
//   let yVal = new Promise (function(resolve, reject) {
//     setInterval(() => {
//       if (y) resolve(y)
//     }, 500);
//   })
//   return yVal
// };


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
//     if (i === 10000) console.log('loop')
//   }
// }

// loop();

// test();