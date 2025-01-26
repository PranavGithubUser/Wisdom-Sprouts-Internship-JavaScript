function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}
word = "dad"
if (isPalindrome(word)) {
    console.log(`It is palindrome...!`)
}
else {
    console.log(`It is not palindrome...!`)
}
