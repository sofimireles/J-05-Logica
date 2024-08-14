/* User profile 
Write a program that prompts a user for their data: username, age, and a list of their favorite movies. Store the information and then showcase it in the console. Take note that the output for the films should add a small message like: 'The film {film} is one of my favorites'.*/

let username = prompt("Enter your username:");
let age = parseInt(prompt("Enter your age:"));
let numberOfMovies = parseInt(prompt("How many favorite movies do you have?"));

let favoriteMovies = [];

for (let i = 0; i < numberOfMovies; i++) {
    let movie = prompt("Enter the title of one of your favorite movies:");
    favoriteMovies.push(movie);
}

console.log("User Profile:");
console.log("Username:", username);
console.log("Age:", age);
console.log("Favorite Movies:");

favoriteMovies.forEach(function(movie) {
    console.log(`The film ${movie} is one of my favorites.`);
});


/* Highest number 
Write a program that asks for 10 numbers. Using logical operators and any other javascript functions/structures you've seen before, determine and output the highest of those numbers.*/ 
let numbers = [];
for (let i = 0; i < 10; i++) {
    let num = parseInt(prompt("Enter a number: "));
    numbers.push(num);
}

let highest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > highest) {
        highest = numbers[i];
    }
}

console.log("The highest number is:", highest);


/*Alarm 
Write a program that asks a user for the amount of seconds needed until an alarm (message) is executed alongside a text to show once those seconds have passed in real time.
Result example: "Time for bed after 10 seconds".*/
let seconds = parseInt(prompt("Enter the number of seconds until the alarm: "));
let message = prompt("Enter a message to show once the time has passed: ");

setTimeout(function() {
    console.log(message + " after " + seconds + " seconds");
}, seconds * 1000);


/*Palindrome 
Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters.*/ 
function isPalindrome(text) {
    // Convert to lower case and remove non-alphanumeric characters
    let cleanedText = text.toLowerCase().replace(/[^a-z0-9]/g, "");
    // Compare cleaned text to its reverse
    return cleanedText === cleanedText.split("").reverse().join("");
}

let inputText = prompt("Enter a word or sentence to check if it's a palindrome:");
if (isPalindrome(inputText)) {
    console.log("The text is a palindrome.");
} else {
    console.log("The text is not a palindrome.");
}


/*Factorial 
Write a program that prompts for an intenger number n. Where  1 <= n. Solve this using recursion.*/ 
function factorial(n) {
    if (n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

let number = parseInt(prompt("Enter a number to calculate its factorial: "));
if (number >= 1) {
    console.log("The factorial of", number, "is:", factorial(number));
} else {
    console.log("Please enter a number greater than or equal to 1.");
}

/*Flat array
Write a program that takes the following nested matrix and flattens it (makes it a 1D array). Use any type of algorithm you want like callbacks, recursion, etc...*/ 
function flattenArray(arr) {
    let flatArr = [];

    arr.forEach(function(element) {
        if (Array.isArray(element)) {
            flatArr = flatArr.concat(flattenArray(element));
        } else {
            flatArr.push(element);
        }
    });

    return flatArr;
}

let nestedMatrix = [[1, 2, 3], [4, 5], [6, [7, 8], 9], 10];
let flatMatrix = flattenArray(nestedMatrix);
console.log("The flattened array is:", flatMatrix);
