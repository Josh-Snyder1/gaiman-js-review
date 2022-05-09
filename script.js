console.log('JS'); 

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