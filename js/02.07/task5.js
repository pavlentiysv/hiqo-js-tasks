function debounce(fn, timeOut) {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(fn, timeOut);
}

let timer;

// Expected result

function dateNow() {
  console.log(Date.now());
}

// First case
// debounce(dateNow, 1000); // => would be called in 1 second

// ...

// Second case
// debounce(dateNow, 100); // => canceled
// debounce(dateNow, 150); // => canceled
// debounce(dateNow, 170); // => would be called only last, previous would be canceled
