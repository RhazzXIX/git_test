
setTimeout(() =>{ console.log('test'); }, 3000);

function triggered(err, data) {
  if(err) {
    console.log(err);
  } else {
    console.log(data);
  }
  console.log(this);
}

function checkSent (fn, delay) {
  let intv = setTimeout( function() {
    intv = null;
    fn (new Error ('Timeout!'));
  }, delay);

  return function () {
    if (intv) {
      clearTimeout (intv);
      fn.apply(this, [null].concat([].slice.call(arguments)));
    }
  }
}

// ajax("http://some.url.1", checkSent(triggered, 500))

function syngcify(fn) {
  let orig_fn = fn;
  let intv = setTimeout (function () {
    intv = null;
    if (fn) fn();
  }, 0);

  fn = null;
  return function () {
    if (intv) {
      fn = orig_fn.bind.apply(
        orig_fn,
        [this].concat([].slice.call(arguments))
      );
    } else {
      orig_fn.apply(this, arguments);
    };
  }
}

function logA() {
  console.log(a);
}

a = 0

setTimeout(syngcify(logA)
, 0);

setTimeout(logA, 1000);

a++;

