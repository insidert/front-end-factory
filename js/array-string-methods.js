var names = ['ravi', 'teja', 'asus', true, false, null];

displayArray();

names.push('hemanth');

displayArray();

names.push(2);

displayArray();

names.pop();

displayArray();

names.shift();

displayArray();

names.splice(1, 1,);

displayArray();

names.splice(1, 2,);

displayArray();

names.splice(1, 0, 'ravi');

displayArray();

names.splice(1, 0, 'dell', 'hp', ' UPPERCASE ');

displayArray();

names.splice(2, 0, ['new array']);

displayArray();

var sentence = 'The quick brown fox jumps over the lazy dog';

var arraySentence = sentence.split(' ');

displaySplitSentenceAndArray(sentence, arraySentence);

var sentence = 'Javascript is great. Let us keep it safe.';

var arraySentence = sentence.split('.');

displaySplitSentenceAndArray(sentence, arraySentence);

let phoneNumber = '+919876543210';

displaySentence(phoneNumber);

let formattePhoneNumber = phoneNumber.substring(3, 13);

displaySentence(formattePhoneNumber);

function displaySentence(theSentence) {
  console.log(theSentence);
}

function displaySplitSentenceAndArray(theSentence, theArray) {
  console.log(theSentence);
  console.log(theArray);
}

names.forEach(function (value, index) {
  if (typeof value === 'string') {
    console.log(value.toLowerCase().trim());
  }
});

function displayArray() {
  console.log(names);

  console.log('Total names inside the array are ', names.length);
}
