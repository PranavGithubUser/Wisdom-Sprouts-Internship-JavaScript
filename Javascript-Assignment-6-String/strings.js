// Q1.Write a program to count the number of vowels in a given string 
function countVowels(str) {
    let count = 0;
    let vowels = "aeiouAEIOU";
    for (let i = 0; i <= str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}

console.log(`Number of vowels in a given string:${countVowels("Hello, World!")}`);

//Q2 Check if a string is a Palindrome
function isPalindrome(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return str == reversed;
}
console.log(`String is a Palindrome:${isPalindrome("madam") ? 'Yes!' : 'No!'}`);
console.log(`String is a Palindrome:${isPalindrome("Hello") ? 'Yes!' : 'No!'}`);

//Q3 Extract the First Word of a Sentence

function getFirstWord(sentence) {
    let firstWord = "";
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === " ")
            break;
        firstWord += sentence[i];
    }
    return firstWord;
}
console.log(`First Word of a Sentence :${(getFirstWord("Hello!, World!"))}`);

// Q4 Replace All Spaces in a String with Hyphens
function replaceSpaces(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        result += str[i] === " " ? "-" : str[i];
    }
    return result;
}
console.log((replaceSpaces("Hello World from JavaScript")));

// Q5 Split a string into an Array of Words
function splitIntoWords(sentence) {
    let words = [];
    let currentWord = "";
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === " ") {
            words.push(currentWord);
            currentWord = "";
        }
        else {
            currentWord += sentence[i];
        }
    }
    if (currentWord) words.push(currentWord);
    return words;
}
console.log(splitIntoWords("This is JavaScript"));
//Q6 Convert the First letter of Each word to Uppercase

function captilizeWords(str) {
    let result = "";
    let captilizeNext = true;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            result += " ";
            captilizeNext = true;
        }
        else if (captilizeNext) {
            result += str[i].toUpperCase();
            captilizeNext = false;
        }
        else {
            result += str[i];
        }
    }
    return result;
}
console.log(captilizeWords("hello world from javascript"));
//Q7 Reverse the Characters in a String

function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseString("JavaScript"));
//Q8 Count the Number of Occurrences of a Specific Character
function countCharacter(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}
console.log(countCharacter("hello world", "o"));
// Q9 Remove All Non-Alphanumeric Characters
function removeNonAlphanumeric(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if ((str[i] >= "a" && str[i] <= "z") ||
            (str[i] >= "A" && str[i] <= "Z") ||
            (str[i] >= "0" && str[i] <= "9")) {
            result += str[i];
        } []
    }
    return result;
}
console.log(removeNonAlphanumeric("Hello, World! 123."));
//Q10 Check if a String Starts and Ends with the Same Character
function startAndEndsSame(str) {
    if (str.length === 0)
        return false;
    return str[0] === str[str.length - 1];
}

console.log(startAndEndsSame("radar"));
console.log(startAndEndsSame("hello"));




