// Random Number Generator.
// Generates a random floating point number, then * by 100
// Converts the number to a string so if the number is less than 10 '0' will be preprended
// The string is stored in a variabl: numberAsString, and is displayed to the user
// Original nuber generated is stored in variable: getRandomNumber

export function randomNumberGenerator() {
    // Grab the element to menipulate, then Generate a number between 0 and 100
    var numberElement = document.getElementById('number-test');
    var getRandomNumber = Math.floor(Math.random() * 100);
    var numberAsString = getRandomNumber.toString();
    var numberZero = '0';

    // Checks if the number is equal to 100, if so then reduce the number by 1
    // This is to keep semantically to a double-digit number
    if (getRandomNumber === 100) {
        getRandomNumber = 99;
    }

    // Checks if number is less than 10 then preprends '0' to the numberAsString
    // Ensures a double-digit number if less than 10 e.g. 01, 02, 03 etc
    if (getRandomNumber < 10) {
        numberAsString = numberZero + numberAsString;
    }

    if (numberElement != null) {
        // Set the HTML element content as the generated number
        numberElement.innerHTML += numberAsString;

        // Exeption for if the element is null
    } else {
        console.log('number is null')
    }

};