// Challenge 1:  Reverse a String
// Return a string in reveres
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {

let revString = '';
for(let i = str.length - 1; i >= 0; i--){
    revString = revString + str[i];
    }
    return revString;
}

// const output = reverseString('hello');

// console.log(output);

////////////////////////////////////////////////////////////////////

function reverseString(str) {

    let revString = '';
    for(let i = str.length - 1; i >= 0; i--){
        revString = revString + str[i];
    }

    return revString;
}

// const output = reverseString('hello');

// console.log(output);

///////////////////////////////////////////////////////////////////

function reverseString(str){

    let revString = '';
    for(let i = str.length - 1; i >= 0; i--){
        revString = revString + str[i];
    }
    return revString;
}

// const output = reverseString('nancy');

// console.log(output);

///////////////////////////////////////////////////////////////////

function reverseString(str){

    let revSTring = '';
    for(let i = str.length - 1; i >= 0; i--){
        revString = revString + str[i];
    }

    return revString;
}

const output = reverseString('ameer');

console.log(output);

////////////////////////////////////////////////////////////////////

function reverseString(str) {
    
    let revString = '';
    for(let i = str.length - 1; i >= 0; i--){
        revString = revString + str[i];
    }
    return revString;
}

// const output = reverseString('hello');

// console.log(output);

//////////////////////////////////////////////////////////////////

function reverseString(str){

    let revString = '';
    for(let i = str.length - 1; i >= 0; i--){
        revString = revString + str[i];
    }
    return revString;
}

// const output = reverseString('hello');

// console.log(output);

////////////////////////////////////////////////////////////////////

function revereseString(str){

    let revString = '';
    for(let i = str.length - 1; i >= 0; i--){
        revString - revString + str[i];
    }
    return revString;
}

// const output = reverseString('hello')

// console.log(output);

///////////////////////////////////////////////////////////////////

function revereseString(str) {

    let revString = '';
    for(let i = str.length - 1; i >= 0; i--) {
        revString = revString + str[i];
    }
    return revString;
}

// const output = revereseString('hello');

// console.log (output);

//////////////////////////////////////////////////////////////////

function reverseString(str){

    let revString = '';
    for(let i = str.length - 1; i >= 0; i--){
        revString = revString + str[i];
    }
    return revString;
}

// const output = reverseString('hello');

// console.log(output);

///////////////////////////////////////////////////////////////

function reverseString(str) {

    let reverseString = '';
    for(let i = str.length - 1; i >= 0; i--){
        reverseString = reverseString + str[i];
    }
    return reverseString;
}

// const output = reverseString('hello');

// console.log(output);

//////////////////////////////////////////////////////////////

function reverseString(str) {

    let reverseString = '';
    for(let i = str.length - 1; i >= 0; i--){
        reverseString = reverseString + str[i];
    }
    return reverseString;
}

// const output = reverseString('hello');

// console.log(output);

/////////////////////////////////////////////////////////////

// Challenge 2: Validate a Palindrome
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome ('hello') == false

function isPalindrome(str) {
    const revString = str.split('').reverse().join('');

    return revString === str;
}

// const output = isPalindrome('madam');

// console.log(output);

////////////////////////////////////////////////////////////

function isPalindrome(str){
    const revString = str.split('').reverse().join('');

    return revString === str;
}

// const output = isPalindrome('racecar');

// console.log(output);

////////////////////////////////////////////////////////////

function isPalindrome(str){
    const revString = str.split('').reverse().join('');

    return revString === str;
}

// const output = isPalindrome('racecar');

// console.log(output);

/////////////////////////////////////////////////////////////

// Challenge 3: Reverse an Integer
// Return an integer in reverse
// ex. reverseInt(521) == 125

function reverseInt(int) {
    const revString = int.toString().split('').reverse().join('');

    return parseInt(revString);
}

// const output = reverseInt(12345);

// console.log(output);

////////////////////////////////////////////////////////////

function reverseInt(int) {
    const revString = int.toString().split('').reverse().join('');

    return parseInt(revString);
}

// const output = reverseInt(98765);

// console.log(output);

/////////////////////////////////////////////////////////////

function reverseInt(int) {
    const revString = int.toString().split('').reverse().join('');

    return parseInt(revString);
}

// const output = reverseInt(98763388);

// console.log(output);

////////////////////////////////////////////////////////////////

function reverseInt(int) {
    const revString = int.toString().split('').reverse().join('');

    return parseInt(revString);
}

// const output = reverseInt(54321);

// console.log(output);

///////////////////////////////////////////////////////////////////

function reverseInt(int){
    const revString = int.toString().split('').reverse().join('');

    return parseInt(revString) * Math.sign(int);
}

// const output = reverseInt(-12345);

// console.log(output);

///////////////////////////////////////////////////////////////////

// Challenge 4: Capitalize Letters
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetter('i love javascript') === 'I Love JavaScript'

function capitalizeLetters(str){
    const strArr = str.toLowerCase().split(' ');

    for(let i = 0; i < strArr.length; i++) {
        strArr[i] = strArr[i].substring(0,1).toUpperCase() + strArr[i].substring(1);
    }

    return strArr.join(' ');
}

// const output = capitalizeLetters('i love javascript');

// console.log(output);

///////////////////////////////////////////////////////////////////

function capitalizeLetters(str){
    const strArr = str.toLowerCase().split(' ');

    for(let i = 0; i < strArr.length; i++){
        strArr[i] = strArr[i].substring(0,1).toUpperCase() + strArr[i].substring(1);
    }

    return strArr.join(' ');
}

// const output = capitalizeLetters('i love javascript');

// console.log(output);

///////////////////////////////////////////////////////////////////

function capitalizeLetters(str){
    const strArr = str.toLowerCase().split(' ');

    for(let i = 0; i < strArr.length; i++){
        strArr[i] = strArr[i].substring(0,1).toUpperCase() + strArr[i].substring(1);
    }

    return strArr.join(' ');
}

// const output = capitalizeLetters('i love to code all day long');

// console.log(output);

///////////////////////////////////////////////////////////////////

function capitalizeLetters(str){
    const strArr = str.toLowerCase().split(' ');

    for(let i = 0; i < strArr.length; i++){
        strArr[i] = strArr[i].substring(0,1).toUpperCase() + strArr[i].substring(1);
    }

    return strArr.join(' ');
}

// const output = capitalizeLetters('i love to work at ncs');

// console.log(output);


///////////////////////////////////////////////////////////////////

// Challenge 5: Max Character
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'

