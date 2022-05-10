console.log('JS'); 
/*
let myName = 'Josh';
console.log('my name is', myName);

// let/const/var -- a keyword, we are about to declare a variable
//myName = the name of the variable
// myName --- the name of the variable
// = --- the assignment operator
// 'Josh' --- the value

let lastName = 'Snyder';
console.log('last name is', lastName);

// Other kinds of casing (don't use these):
// snake_case
let my_last_name = 'Snyder';
//kebob-case
// let my-last-name = 'Snyder';
// SCREAMING_SNAKE_CASE
let MY_LAST_NAME = 'Snyder';

/**
 *Expressions
 */
/*
 console.log('My name is ' + myName + ' ' + lastName);
 // console.log ('My name is Josh Snyder'); Result of expression

 function add(n1, n2) {
     return n1 + n2;
 }
 let result = add(5, 7);
 //let result = 12;

 if (8 > 7 ) {
 //if (false) {...}
    //...
 }

 let isJamesBond = myName +' ' + lastName === 'James Bond';
 // let isJamesBond = 'Josh Snyder' === 'James Bond';
 // let isJamesBond = false;
console.log('isJamesBond', isJamesBond);

// String() and Number() to convert between strings and numbers

// NaN "Not a Number". You did some bad math
// undefined --- the variable hasn't been defined
// ReferenceError --- the variable does not exist 
// null 

let artistFirstName = 'Prince';
let artistLastName = null; // nothing, ON PURPOSE

// CONDITIONALS
// let isSomethingTrue = tacos === 'Josh';
//let isSomethingTrue = tacos === 'Josh';
if(isSomethingTrue) {
    // Do this
}
else if (17/2 >7) {

}
else {

}

let dayOfTheWeek = 'Monday';
if (dayOfTheWeek === 'Monday') {
    console.log('JS review');
}
else if (dayOfTheWeek === 'Tuesday') {
    console.log('Objects')
}

//SWITCH STATEMENTS, ANOTHER WAY TO DO IF STATEMENTS WITH DIFFERENT
// CONDITIONALS (CASES)
switch (dayOfTheWeek) {
    case 'Monday':
        console.log('JSreview');
        break;
    case 'Tuesday':
        console.log('Objects');
        break;
    default:
        console.log('I dont know');
        break
}

// Ternary: if/else, and resolves to a value (string)
let height = 55;
let message = height > 50 ?
    'you can ride this ride'   // if
    :
    'keep growing, try later'   // else
// let message = 'you can ride this ride';

// can be embedded in string interpolation
let welcomeMessage = `
    Welcome to the amusement park, ${myName}!
    
    Check out the roller coaster:
        ${height > 50 ? 'you can ride it!' : 'too short, so sorry'}
`;


// FUNCTIONS

// INPUTS (arguments of parameters):
// yourHeight
// dangerLevel
/*
function isTallEnoughToRide(yourHeight, dangerLevel) {
    let minHeight;
    //
    if (dangerLevel === 'kiddie') {
        minHeight = 28;
    }
    else (dangerLevel === 'intense') {
        minHeight === 55;
    }

    return yourHeight > minHeight;
}
isTallEnoughToRide(50, 'kiddie');
*/
//FUNCTIONS DON'T NEED PARAMETERS OR HAVE TO RETURN VALUES
/*
function stressRelease() {
    console.log('YAAAAAA');
}

let stressLevel = 20;
while (stressLevel > 5){
    stressRelease();
    stressLevel--;
}

// Declaring a function
// function declaration
function makeASentence(words) {
    words.join(' ') + '.';
}

// ANONYMOUS FUNCTION
// function expression
let makeASentence = function(words) {
    return words.join(' ') + '.';
}

// ARROW FUNCTION
let makeAsentence3 = (words) => {
    return words.join(' ') + '.';
}
//SINGLE ARGUMENT DOES NOT NEED PARENTHESES
let makeASentence4 = words => {
    return words.join(' ') + '.';
}

// ONE LINER
let makeASentence5 = words => words.join(' ') + '.';

// Calling a function
makeASentence(['welcome', 'to', 'gaiman']);


// LOG IS A METHOD OF THE CONSOLE OBJECT
console.log('yolo');

let numbers = [1, 2, 3, 4 ,5];
// push() is a method of the numbers array
numbers.push(6);

*/
// ARRAYS

// .push() Add items to array
// .push('newt', 'lion', 'elephant') Can push multiple items at once

// .join

// .split separate by deliminator and put in array
;
// .pop

// .slice

// .upshift

// .splice Remove items, start point for insertion, add new items

// .filter

let animals = ['cat', 'dog', 'bunny'];

let firstAnimal = animals[0];
// cat

let lastAnimal = animals[animals.length - 1];
// bunny

for ( let animal of animals) {
    //animal = 'cat';
    console.log('animal is', animal);
    if (animal === 'bunny') {
        console.log('BUNNY');
    }
}

// WHILE LOOPS
/*
let bigNumber = 2**6;
while ( bigNumber > 1 ) {
    bigNumber = bigNumber / 2;
    console.log(bigNumber);
}
*/
//OBJECT

//'encapsulation'

let person = {
    // property: value
    // key: value
    firstName: 'Josh',
    lastName: 'Snyder',
    isAnInstructor: false
    hobbies: [
        {
            name: 'flying',
            yearsExperience: 2,
            moneySpent: 1000
        }
        {
            name: 'video games',
            yearsExperience: 20,
            moneySpent: 2000
        }
    ]
};

// dot-notation
console.log('firstName is, ', person.firstName);

if (person.isAnInstructor) {
    console.log( 'lecture time');
}

// CAN ADD PROPERTIES TO OBJECT
person.hobbies = [ 'flying', 'video games', 'canoeing'];
person.heightInInches = 69;
console.log('person with changes', person);

// CAN CHANGE EXISTING PROPERTIES OF OBJECT
person.firstName = 'Phil';
console.log('new name,', person.firstName);

function updatePerson( property, newValue ) {
    // [] alllows passing variable to change property of object
    person[property] = newValue;
    // person['heightInInchest'] = 70 
}

updatePerson( 'heightInInches', 70 );
console.log('updated Person', person);
