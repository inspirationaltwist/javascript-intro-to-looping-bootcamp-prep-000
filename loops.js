function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop.");
    } else {
      array.push("I am ${i} strange loops.");
    }
  }
  return array;
}

// count down from n to 0
function whileLoop(n) {
  while (n > 0) {
    console.log(n);
    n--;
  }
  return "done";
}

function maybeTrue() {
  return Math.random() >= 0.5
}

// removes elements from `array` until `array` is empty or until `maybeTrue()` returns `false`
function doWhileLoop(arr) {
  do {
    arr.pop();
  } while (maybeTrue() && arr.length > 0);
  return arr;
}
