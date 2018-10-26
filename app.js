'use strict';

// checks in the console log that no values for each intended variables exist

console.log('birthState should return an undefined value ', birthState);
console.log('visiting should return an undefined value ', visiting);
console.log('sax should return an undefined value ', sax);
console.log('car should return an undefined value ', car);
console.log('dog should return an undefined value ', dog);
console.log('numberGuess should return an undefined value ', numberGuess);
console.log('country should return an undefined value ', countries);
console.log('score should return an undefined value ', score);

var birthState;
var visiting;
var sax;
var car;
var dog;
var numberGuess;
var countries;
var arrayIndex;
var tCountries;
var guessCount;
var guessLeft;
var correct;




// asks a yes or no question question, gives the related variable a stored value, and then checks the consol log to see if the variable stored the input




var score = 0;

//****Question 1*****

function question1(){

  birthState = prompt('Welcome to the site. Do you know if I was born in Washington State? (y/Y/yes/Yes or no...').toLowerCase();
  console.log('birthState should return inputed value ' + birthState);

  if (birthState === 'y' || birthState === 'yes'){
    alert('You guessed correctly');
    score++;
    console.log('score should return a value 1 more than the previous value ', score);
  } else {
    alert('No I was born in Washington State');
    console.log('score should return an 0 value ', score);
  }
}

question1();

//****Question 2*****

function question2(){

  var visiting = prompt('Did I live in Japan for 3 years?(y/Y/yes/Yes or no...').toLowerCase();
  console.log('visiting should return inputed value ' + visiting);

  if (visiting === 'y' || visiting === 'yes'){
    alert('No I lived in South Korea for 3 years');
    console.log('score should return the previous value ', score);
  } else {
    alert('You are correct, I lived in South Korea for 3 years');
    score++;
    console.log('score should return a value 1 more than the previous value ', score);
  }
}

question2();

//****Question 3*****

function question3(){
  var sax = prompt('Is my favorite Sax player Kenny G?(y/Y/yes/Yes or no...').toLowerCase();
  console.log('sax should return inputed value ' + sax);

  if (sax === 'y' || sax === 'yes'){
    alert('No, Charlie \"the Bird\" Parker');
    console.log('score should return the previous value ', score);
  } else {
    alert('You are correct, my favorite sax player is Charlie \"the Bird\" Parker');
    score++;
    console.log('score should return a value 1 more than the previous value ', score);
  }
}

question3();

//****Question 4*****

function question4(){
  var car = prompt('My first car was a Volvo?(y/Y/yes/Yes or no...').toLowerCase();
  console.log('car should return inputed value ' + car);

  if (car === 'y' || car === 'yes'){
    alert('Yes, you are correct, my first car was a 1975 Volvo 244GL.');
    score++;
    console.log('score should return a value 1 more than the previous value ', score);
  } else {
    alert('You are wrong, my first car was a 1975 Volvo 244GL');
    console.log('score should return the previous value ', score);
  }
}
question4();

//****Question 5*****

function question5(){
  var dog = prompt('Was my first dog\'s name, Fido?(y/Y/yes/Yes or no...').toLowerCase();


  if (dog === 'y' || dog === 'yes'){
    alert('You are wrong, my first dog was named Sarah');
    console.log('score should return the previous value ', score);
  } else {
    alert('You are right, my first dog was named Sarah');
    score++;
    console.log('score should return a value 1 more than the previous value ', score);
  }
}

console.log('dog should return inputed value ' + dog);
question5();

//****Question 6*****

function question6(){
  var randNumb = 42;
  var numberGuess = parseInt(prompt('I\'m thinking of a number between 1 and 100.  You have 4 guesses to get this one right.'));


  console.log('numberGuess should return inputed value ' + numberGuess);
  console.log('randNumb should return the value 42 ' + randNumb);
  console.log('i should return the current value ' + i);

  var j = 4;
  var i = 1;

  while(numberGuess !== randNumb && i < 4){

    if (numberGuess > randNumb){
      j--;
      numberGuess = parseInt(prompt('That number is a little high.  Try again, you have ' + j + ' chances.'));
      console.log('numberGuess should return inputed value ' + numberGuess);
      console.log('randNumb should return the value 42 ' + randNumb);
      console.log('i should return the current value ' + i);
      i++;
    } else {
      j--;
      numberGuess = parseInt(prompt('That number is a little low.  Try again, you have ' + j + ' chances.'));
      console.log('numberGuess should return inputed value ' + numberGuess);
      console.log('randNumb should return the value 42 ' + randNumb);
      console.log('i should return the current value ' + i);
      i++;
    }
  }

  if (numberGuess === randNumb){
    alert('Congratz, you have guessed the number.');
    console.log('numberGuess should return inputed value ' + numberGuess);
    console.log('randNumb should return the value 42 ' + randNumb);
    console.log('i should return the current value ' + i);
    score++;
    console.log('score should return a value 1 more than the previous value ', score);

  } else {
    alert('Sorry, you are out of guesses.  The number was ' + randNumb + '.');
    console.log('numberGuess should return inputed value ' + numberGuess);
    console.log('randNumb should return the value 42 ' + randNumb);
    console.log('i should return the current value ' + i);
    console.log('score should return the previous value ', score);
  }
}
question6();


// ****Question 7*****

function question7(){
  correct = false;
  arrayIndex = 0;
  tCountries = ['CANADA', 'NORTH KOREA', 'HONG KONG', 'CHINA', 'JAPAN', 'QATAR', 'PHILIPPINES', 'TAIWAN', 'GERMANY', 'KUWAIT', 'IRELAND'];
  guessCount = 1;
  guessLeft = 6;

  countries = prompt('Can you name a country that I\'ve been to besides the United States and South Korea?').toUpperCase();

while(guessLeft) {
  for (arrayIndex = 0; arrayIndex < tCountries.length; arrayIndex++)  {
    if (tcountries[arrayIndex] === countries) {
      correct = true;
    }
  }
  if (correct) {
    alert('Correct');
    score++;
    break;
  } else {
    countries = prompt('Incorrect. Try again').toUpperCase();
    guessLeft--;
  }
}
/*
  while(countries != tCountries[tCountries] && guessCount < 6){
    var countries = prompt('Can you name a country that I\'ve been to besides the United States and South Korea? You have ' + guessLeft + ' tries left.').toUpperCase();
    for(arrayIndex = 0; arrayIndex < tCountries.length; arrayIndex++){
      guessCount++;
      guessLeft--;
      break;
    }
    if (countries == tCountries[tCountries]){
      alert('Yes, I\'ve been to the Philipines, Qatar, Canada, and Kuwait.  I\'ve had lay-overs in Hong Kong (China), Japan, Taiwan, German, and Kuwait.  In addition, I\'ve stepped about 20ft accross the North Korean border during a tour of the DMZ.');
      score++;
      console.log('score should return a value 1 more than the previous value ', score);
      //alert('You have gotten ' + score + ' correct out of 7.');
      break;
    } 
    if (countries != tCountries[tCountries]) {
      alert('No, but I\'ve been to the Philipines, Qatar, Canada, and Kuwait.  I\'ve had a lay-over in Hong Kong (China), Japan, Taiwan, German, and Kuwait.  In addition, I\'ve stepped about 20ft accross the North Korean border during a tour of the DMZ.');
      console.log('score should return the previous value ', score);
      //alert('You have gotten ' + score + ' correct out of 7.');
      break;
    }
  }
}*/

question7();

alert('You have gotten ' + score + ' correct out of 7.');