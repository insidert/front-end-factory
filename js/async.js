console.log('Hello from async.');

setTimeout(function () {
  console.log('Hello from timeout - 3.');
  console.log('Interval 1');
}, 3000);

console.log('Interval 1  - a');

setTimeout(function () {
  console.log('Hello from timeout - 4.')
  console.log('Interval 2');
}, 4000);

//  Callback
setTimeout(logTheText, 5000);

function logTheText() {
  console.log('Hello from timeout - 5.')
}


var i = 0;

var displayIntervalTime = setInterval(displayInterval, 1000);

function displayInterval() {
  console.log('Hello from interval ' + i);
  i++;

  if (i == 5) {
    clearInterval(displayIntervalTime);
  }

}

let dataPromise = new Promise(function (resolve, reject) {
  let x = 0;

  if (x == 1) {
    resolve('take items.');
  }

  reject('not coming');
});

dataPromise
  .then(function (item) {
    console.log(item);
    console.log('Call friend.');
  })
  .catch(function (message) {
    console.log(message);
    console.log('Message friend');
  });
