console.log('Hello!, Degubbing started!');

// our program should decide/fix on a number.
var programNumber = Math.floor((Math.random() * 100) + 1);

console.log(Math.floor((Math.random() * 100) + 1));

var userTries = 0;

// when the submit button is clicked, we need to fetch the user input value.
// click event
// Querying using the selector
var submitButtonElement = document.getElementById('submitButton');

console.log(submitButtonElement);

submitButtonElement.addEventListener("click", processUserGuess);

function nameOfTheFunction() {
  console.log('This is the name displayed from the name of the function.');
}

function processUserGuess() {
  // call name function
  nameOfTheFunction();

  
  // update user tries
  userTries = userTries + 1;
  console.log('user tries', userTries);

  if (userTries > 10) {
    alert('Cannot try for more than 10 times.');
    return;
  }

  // we need to fetch the user input value.
  console.log('Submit button has been clicked.');

  var userFormInput = document.getElementById('userInputNumber');

  console.log(userFormInput);

  var userFormInputValue = userFormInput.value;

  if (userFormInputValue == '') {
    alert('Input cannot be empty. Give a value.');
    return;
  }

  // convert string to intergers
  // userFormInputValue = parseInt(userFormInputValue);
  // console.log('Type of the input is: ', typeof userFormInputValue);

  if (userFormInputValue > 100 || userFormInputValue < 0) {
    alert('Number should be between 1 and 100');
    return;
  }

  // if (userFormInputValue < 1) {
  //   alert('Number cannot be less than 1.');
  //   return;
  // }

  console.log('User from input value: ', userFormInputValue);

  // Update user input value on the list
  var userInputListElement = document.getElementById('userInputListElement');

  console.log(userInputListElement);

  var newListItem = document.createElement("LI"); // Create a <li> node
  // adding two string is done with + sign
  var textnode = document.createTextNode("Try " + userTries + " - " + userFormInputValue);
  newListItem.classList.add("list-group-item"); // Create a text node
  newListItem.appendChild(textnode);
  userInputListElement.appendChild(newListItem);

  // check whether the user input is equal to our program's number
  // if the number guessed is correct, show the message that the user wins.

  var resultElement = document.getElementById('result');

  if (userFormInputValue == programNumber) {
    console.log('You have guessed correctly.');

    var successMessageElement = document.getElementById('successMessageBlock');

    console.log(successMessageElement);

    successMessageElement.style.display = "block";

    resultElement.innerText = '';

    var inputFormElement = document.getElementById('inputForm');

    inputFormElement.style.display = "none";
  }

  // The user did not guess the number right, so we need to give some hints.
  // if the number gusessed is wrong and is less than program's number, give a hint
  if (userFormInputValue < programNumber) {
    console.log('Wrong guess. You number is less than the program number.');
    resultElement.innerText = 'Your guess is wrong. Your number is low.';
  }

  // if the number gusessed is wrong and is greater than program's number, give a hint
  if (userFormInputValue > programNumber) {
    console.log('Wrong guess. You number is greater than the program number.');
    resultElement.innerText = 'Your guess is wrong. Your number is high.';
  }
}