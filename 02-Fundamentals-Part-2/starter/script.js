'use strict';

/*

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true; // s in drivers is ommited
if (hasDriversLicense) console.log("I can drive! :D");


// Functions

function logger(stringval) {
    console.log(stringval);
}

// Calling / Running / Invoking the function
logger("My");
logger("name");
logger("is");
logger("Jordan");

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

let AppleJuice = fruitProcessor(3, 0);

console.log(AppleJuice);

const appleOrangeJuice = fruitProcessor(2,4);

console.log(appleOrangeJuice);

// function declarations vs expressions

// function declaration
function calcAge1(BirthYear){
    return 2022 - BirthYear;
}

console.log(calcAge1(2001));

// function expression
const calcAge2 = function (BirthYear){
    return 2022 - BirthYear;
}

console.log(calcAge2(2001));

console.log(calcAge1(2001),calcAge2(2001));

// Arrow Functions

const calcAge3 = birthYear => 2022 - birthYear;
console.log(calcAge3(2001));

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(2001, "Jordan"));
console.log(yearsUntilRetirement(1990, "Bob"));


const firstName = fN => {
    return fN;
}

const secondName = sN => {
    return sN;
}

const fullName = (fN,sN) => {
    return `Your full name is ${fN} ${sN}`;
}

console.log(fullName(firstName("Jordan"), secondName("Timberlake")));

function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice made with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
    return juice;
}

console.log(fruitProcessor(2,3));

const calcAge = function(birthYear){
    return 2022 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    
    if(retirement > 0){
        return `${firstName} retires in ${retirement} years.`;
    }else {
        return `${firstName} has already retired.`;
    }
    
}

console.log(yearsUntilRetirement(2001, "Jordan"));
console.log(yearsUntilRetirement(1950, "Mike"));

// Coding challenge 1

const calcAverage = (s1, s2, s3) => Math.trunc((s1 + s2 + s3) / 3);

const checkWinner = (avgt1, t1, avgt2, t2) => {
    if (avgt1 >= 2 * avgt2) {
        return `${t1} win (${avgt1} vs ${avgt2}).`;
    } else if (avgt2 >= 2 * avgt1) {
        return `${t2} win (${avgt2} vs ${avgt1}).`;
    } else {
        return `No team wins.`;
    }
}

const d = "Dolphins";
const k = "Koalas";

console.log(calcAverage(44, 23, 71));
console.log(calcAverage(85, 54, 41));
console.log(checkWinner(calcAverage(44, 23, 71), d, calcAverage(85, 54, 41), k));

console.log(calcAverage(85, 52, 41));
console.log(calcAverage(23, 34, 27));
console.log(checkWinner(calcAverage(85, 52, 41), d, calcAverage(23, 34, 27), k));

// Arrays

const friend1 = 'Micheal';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Micheal','Steven','Peter'];
console.log(friends);
console.log(friends[0]);
const years = new Array(1991,1984,2001,2020);
console.log(years);
years.push(2022);
console.log(years);
console.log(years[0]);

for (let i = 0; i < friends.length; i=i+1){
    console.log(friends[i]);
}

// Coding challenge 2

const bills = new Array(125, 555, 44);
const total = new Array();
const total1 = new Array();

const calcTip = billAmount => {
    if (billAmount >= 50 && billAmount <= 300) {
        return billAmount * 1.15;
    } else {
        return billAmount * 1.2;
    }
}

const calcTip1 = bill => bill >= 50 && bill <= 300 ? bill*1.15 : bill*1.2;

for (let i = 0; i < bills.length; i = i + 1) {
    total.push(calcTip(bills[i]));
    console.log(total[i]);
}

for (let i = 0; i < bills.length; i = i + 1) {
    total1.push(calcTip1(bills[i]));
    console.log(total1[i]);
}

// OBJECTS in javascript

const jordan = {
    firstName: 'Jordan',
    lastName: 'Timberlake',
    age: 2022 - 2001,
    job: 'Student',
    friends: ['Imtiyaaz', 'Connor', 'Cals', 'Dwayne', 'Ruan', 'Kevin']
};

jordan.location = 'South Africa'
console.log(jordan);

console.log(jordan.lastName);
console.log(jordan['lastName']); // bracket notation

const namekey = 'Name';

console.log(jordan['first' + namekey]);
console.log(jordan['last' + namekey]);

const interestedIn = prompt('What do you want to know about Jordan? Choose between firstName, lastName, age, job and friends?');

if(jordan[interestedIn]){
    alert(jordan[interestedIn]);
}else {
    prompt('Wrong request. Choose between firstName, lastName, age, job and friends?');
}

console.log(`${jordan.firstName} has ${jordan.friends.length} friends, and his best 
friend is called ${jordan.friends[0]}`);

*/

const jordan = {
    firstName: 'Jordan',
    lastName: 'Timberlake',
    birthYear: 2001,
    job: 'Student',
    location: 'South Africa',
    friends: ['Imtiyaaz', 'Connor', 'Cals', 'Dwayne', 'Ruan', 'Kevin'],
    hasDriversLicence: true,
    // calcAge: function(birthYear){
    //     return 2022 - birthYear;
    // }
    // calcAge: function(){
    //     return 2022 - this.birthYear;
    // }
    calcAge: function(){
        jordan.age = 2022 - this.birthYear;
        return this.age;
    },
    summary: function(){
        return `${this.firstName} ${this.lastName} is a ${this.calcAge()}-year-old
        ${this.job} and has ${this.hasDriversLicence ? 'a' : 'no'} drivers license.`
    },
    addFriend: function(newFriend){
        if(this.friends.indexOf(newFriend) == -1){
            // need to add the friend into the array
            this.friends.push(newFriend);
        }else{
            console.log(`${newFriend} is already in ${jordan.firstName}'s friend list`);
        }
    }
};

console.log(jordan.calcAge());
console.log(jordan.age);
console.log(jordan.summary());

jordan.addFriend('Jake');
for (let i = 0; i < jordan.friends.length; i = i + 1) {
    console.log(jordan.friends[i]);
}

jordan.addFriend('Ruan');
for (let i = 0; i < jordan.friends.length; i = i + 1) {
    console.log(jordan.friends[i]);
}