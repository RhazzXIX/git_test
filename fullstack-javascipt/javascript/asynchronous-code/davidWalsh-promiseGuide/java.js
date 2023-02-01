
// const getData = function () {
//   return data;
// };

// const myData = getData();


// myData.then(function(data){
//   const peiceOfData = myData["whatever"];  
// })

// const p = new Promise(function(resolve, reject) {
//   if (good) {
//     resolve('Success');
//   }
//   else {
//     reject('Failure');
//   };
// });

// p.then(function(result){

// }).catch(function() {

// }).finally(function() {

// });


// function get(url) {
//   return new Promise (function(resolve, reject) {

//     var req = new XMLHttpRequest();
//     req.open('GET', url);

//     req.onload = function () {
//       if (req.status === 200) {
//       resolve(req.response);
//       } else {
//         reject(Error(req.status.Text));
//       }
//     };
//     req.onerror = function () {
//       reject(Error("network Error"));
//     };
//     req.send();
//   });
// }

// get('story.json').then(function(response) {
//   console.log("Success!", response);
// }, function(error) {
//   console.error("Failed!", error);
// });

// var userCache = {};

// function getUserDetail(username) {
//   if (userCache[username]) {
//     return Promise.resolve(userCache[username]);
//   }

//   return fetch('users/', + username + '.json')
//     .then(function(result) {
//       userCache[username] = result;
//       return result
//     })
//     .catch(function() {
//       throw new Error('Could not find user: ' + username);
//     })
// }

// const p = new Promise(function(resolve, reject) {
//   if (good) {
//     resolve('Success');
//   }
//   else {
//     reject('Failure');
//   };
// });

// p.then(function(result){

// }).catch(function() {

// }).finally(function() {

// });


// function get(url) {
//   return new Promise (function(resolve, reject) {

//     var req = new XMLHttpRequest();
//     req.open('GET', url);

//     req.onload = function () {
//       if (req.status === 200) {
//       resolve(req.response);
//       } else {
//         reject(Error(req.status.Text));
//       }
//     };
//     req.onerror = function () {
//       reject(Error("network Error"));
//     };
//     req.send();
//   });
// }

// get('story.json').then(function(response) {
//   console.log("Success!", response);
// }, function(error) {
//   console.error("Failed!", error);
// });

// var userCache = {};

// function getUserDetail(username) {
//   if (userCache[username]) {
//     return Promise.resolve(userCache[username]);
//   }

//   return fetch('users/', + username + '.json')
//     .then(function(result) {
//       userCache[username] = result;
//       return result
//     })
//     .catch(function() {
//       throw new Error('Could not find user: ' + username);
//     })
// }

// const test = new Promise(function(resolve, reject) {
//   setTimeout(function() {resolve(10); }, 5000);
// });


// new Promise(function(resolve, reject) { 
// 	// A mock async action using setTimeout
// 	setTimeout(function() { resolve(10); }, 3000);
// })
// .then(function(num) { console.log('first then: ', num); return num * 2; })
// .then(function(num) { console.log('second then: ', num); return num * 2; })
// .then(function(num) { console.log('last then: ', num);});

// console.log('test');

// new Promise(function(resolve,reject) {
//   setTimeout(function() {reject(Error('Test reject')); }, 3000);
// })
// .then(function(e) { console.log('done', e); })
// .catch(function(e) {console.log('catch: ', e); });

// test.then(function(result) {
//   console.log(result)
// });

// const number = 0

// const addNum = function(num) {
//   return num + 2;
// };

// const testPromise = new Promise(function(resolve, reject){
//   setTimeout(() => {
//     resolve(addNum(number));
//   }, 10000)
// }) 

// testPromise.then((result) => console.log(result));

// new Promise ((resolve, reject) => { reject(Error("error")); })
//   .then((e) => { console.log('success', e); })
//   .catch((e) => { console.log('fail', e); })
//   .finally(e => { console.log("finally", e); });

const promise1 = new Promise(function(resolve, reject) {
  // setTimeout(() => { resolve('promise1') }, 1000);
  setTimeout(() => { resolve('promise1') }, 2000)
});

const promise2 = new Promise(function(resolve, reject) {
  // setTimeout(() => { resolve('promise2') }, 5000);
  setTimeout(() => { reject(Error('promise2')) }, 5000)
})

// Promise.all([promise1, promise2]).then(function(results) {
//   results.forEach((result) => console.log(result));
// }).catch((e) => {
//   console.log(e);
// })

const promise3 = new Promise( function (resolve, reject) {
  setTimeout(() => { reject(Error('promise3')) }, 1000);
});

const promise4 = new Promise( function (resolve, reject) {
  setTimeout(() => { resolve('promise3') }, 3000);
});

Promise.race([promise1, promise2, promise3, promise4]).then(function(one) {
  console.log('then', one);
}).catch(function(one,two) {
  console.log('catch', one, two);
})

let name1;

setTimeout(() => {
  name1 = 'Skill'
}, 5000)

new Promise(function(resolve,reject) {
  setInterval(() => {
    if (!name1) reject(Error('still undefined'));
    if (name1 !== undefined) resolve(name1)
  }, 6000)
}).then(name1 => console.log(name1))
.catch(error => console.log(error))


console.log(name1)