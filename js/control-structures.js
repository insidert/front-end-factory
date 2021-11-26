console.log('Control structure js');

let a = true;

console.log(a);

// function checkTheVariable() {
//   if (a == true) {
//     console.log('a is true');
//     return;
//   }

//   if (a == false) {
//     console.log('a is false');
//   }
// }

if (a == true) {
  console.log('a is true');
}

if (a == false) {
  console.log('a is false');
}

if (a == false) {
  console.log('A is not true')
} else {
  console.log('A is true')
}

if (a == false) {
  console.log('A is not true')
} else if (a == 2) {
  console.log('A is not 2')
} else {
  console.log('A is true')
}

let laptopName = 'lenovo';

switch (laptopName) {
  case 'asus':
    console.log('This is an asus laptop')
    break;

  case 'hp':
    console.log('This is an hp laptop')
    break;

  case 'dell':
    console.log('This is an dell laptop')
    break;

  default:
    console.log('The laptop is not defined')
    break;
}