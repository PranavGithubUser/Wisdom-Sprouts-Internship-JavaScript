const randomNumber = Math.floor(Math.random() * 10) + 1;

let userGuess = null;

console.log("Welcome to the Number Guessing Game!");
console.log("Guess a number between 1 and 10:");

while (userGuess !== randomNumber) {
    userGuess = parseInt(prompt("Enter your guess:"));

    if (userGuess === randomNumber) {
        alert("Congratulations! You guessed the correct number.");
    } else if (userGuess < randomNumber) {
        alert("Too low! Try again.");
    } else if (userGuess > randomNumber) {
        alert("Too high! Try again.");
    } else {
        alert("Invalid input. Please enter a number.");
    }
}