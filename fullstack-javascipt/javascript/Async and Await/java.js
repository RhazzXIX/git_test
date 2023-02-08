const body = document.querySelector("body");
// body.textContent = 'Hello Up-skilling World!'
const img = body.querySelector("img");

async function getGifs(theme) {
  const url = `https://api.giphy.com/v1/gifs/translate?api_key=bb2006d9d3454578be1a99cfad65913d&s=${theme}`;
  const response = await fetch(url);
  const json = await response.json();
  img.src = json.data.images.original.webp;
}

setInterval(() => {
  getGifs("anime");
}, 30000);
getGifs("random");

// async function test() {
//   return foo();
// }

// test().catch(err => console.log(err));

// api_key=bb2006d9d3454578be1a99cfad65913d

// async function loadJson(url) {
//   const response = await fetch(url)
//   if (response.status === 200) {
//     const json = await response.json();
//     return json
//   } else {
//     throw new Error(response.status);
//   };
// }

// loadJson('https://javascript.info/no-such-user.json')
//   .catch(err => console.log(err));

function doubleAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x * 2);
    }, 2000);
  });
}

doubleAfter2Seconds(10).then((r) => console.log(r));

let sum =
  doubleAfter2Seconds(10) + doubleAfter2Seconds(20) + doubleAfter2Seconds(30);

console.log(sum);

async function addAsync(x) {
  const a = await doubleAfter2Seconds(10);
  const b = await doubleAfter2Seconds(20);
  const c = await doubleAfter2Seconds(30);
  return x + a + b + c;
}

addAsync(10).then((sum) => console.log(sum));

const docs = [{}, {}, {}];

Promise.all(docs.map(function(doc) {
  return doc
})).then(doc => console.log(doc));