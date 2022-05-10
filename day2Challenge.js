let person = {
    // property: value
    // key: value
    isAnInstructor: true,
    lastName: 'Schwartz',
    firstName: 'Edan',
    hobbies: [
        {
            name: 'guitar',
            yearsExperience: 2,
            moneySpent: 1000
        },
        {
            name: 'mushroom farm',
            yearsExperience: 0.9,
            moneySpent: 800
        },
        {
            name: 'harmonica',
            yearsExperience: 3,
            moneySpent: 400
        }
    ]
};


console.log('I have been doing', person.hobbies[0].name,'for', person.hobbies[0].yearsExperience, 'years');
console.log('I have been doing', person.hobbies[1].name,'for', person.hobbies[1].yearsExperience, 'years');
console.log('I have been doing', person.hobbies[2].name,'for', person.hobbies[2].yearsExperience, 'years');

let sumOfHobbies = person.hobbies[0].moneySpent + person.hobbies[1].moneySpent + person.hobbies[2].moneySpent;
console.log('I have spent a total of $' + sumOfHobbies,'on hobbies');

function listHobbies() {
    for ( let iterator of person.hobbies) {
        console.log( `Ive been doing ${iterator.name} for ${iterator.yearsExperience} years` );
    }
}

function sumHobbies () {
    let sum = 0;
    for ( let iterator of person.hobbies) {
        sum += iterator.moneySpent;
    }
    return sum;
}


/*
Challenge 1:

console.log
    I've been doing guitar for 2 years
    I've been doing mushroom farm for 0.9 years
    I've been doing harmonica for 3 years

Challenge 3:

console.log:
    I have spent a total of $2200 on hobbies
*/