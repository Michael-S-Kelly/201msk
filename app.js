'use strict';

// checks in the console log that no values for each intended variables exist

console.log('birthState should return an undefined value ', birthState);
console.log('visiting should return an undefined value ', visiting);
console.log('sax should return an undefined value ', sax);
console.log('car should return an undefined value ', car);
console.log('dog should return an undefined value ', dog);

// asks a yes or no question question, gives the related variable a stored value, and then checks the consol log to see if the variable stored the input


var birthState = prompt('Welcome to the site. Do you know if I was born in Washington State? (y/Y/yes/Yes or no...').toLowerCase();
console.log('birthState should return inputed value ' + birthState);

if (birthState === 'y' || birthState === 'yes'){
  alert('You guessed correctly');
} else {
  alert('No I was born in Washington State');
}

var visiting = prompt('Did I live in Japan for 3 years?(y/Y/yes/Yes or no...').toLowerCase();
console.log('visiting should return inputed value ' + visiting);

if (birthState === 'y' || birthState === 'yes'){
  alert('No I lived in South Korea for 3 years');
} else {
  alert('You are correct, I lived in South Korea for 3 years');
}

var sax = prompt('Is my favorite Sax player Kenny G?(y/Y/yes/Yes or no...').toLowerCase();
console.log('sax should return inputed value ' + sax);

if (sax === 'y' || sax === 'yes'){
  alert('No, Charlie \"the Bird\" Parker');
} else {
  alert('You are correct, my favorite sax player is Charlie \"the Bird\" Parker');
}

var car = prompt('My first car was a Volvo?(y/Y/yes/Yes or no...').toLowerCase();
console.log('car should return inputed value ' + car);

if (car === 'y' || car === 'yes'){
  alert('Yes, you are correct, my first car was a 1975 Volvo 244GL.');
} else {
  alert('You are wrong, my first car was a 1975 Volvo 244GL');
}

var dog = prompt('Was my first dog\'s name, Fido?(y/Y/yes/Yes or no...').toLowerCase();


if (dog === 'y' || dog === 'yes'){
  alert('You are wrong, my first dog was named Sarah');
} else {
  alert('You are right, my first dog was named Sarah');
}

console.log('dog should return inputed value ' + dog);