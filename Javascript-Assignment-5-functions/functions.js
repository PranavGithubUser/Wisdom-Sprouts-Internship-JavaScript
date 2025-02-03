// 1 Factorial Number 
function Factorial(n) {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(Factorial(5));

//  2 Check Even or Odd
function isEven(n) {
    return n % 2 === 0 ? "Even" : "odd";
}
console.log(isEven(4));

// 3 Reverse a String 
function revString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(revString('level'));

// 4 Largest of 3  No
function Lgof3(a, b, c) {
    if (a > b && a > c) return a;
    if (b > a && b > c) return a;
    return c;

}
console.log(Lgof3(2, 4, 8));

// 5 sum of array ele
function sumofarr(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sumofarr([1, 2, 3, 80]));

// 6 Area & Peri of Rect
function RectProp(length, width) {
    const area = length * width;
    const perimeter = 2 * (length + width);
    return { area, perimeter };
}

// Check Leap Year 
function isLeapY(Year) {
    if ((Year % 4 == 0 && Year % 100 !== 0) || Year % 400 === 0) {
        return true;
    }
    return false;
}
console.log(isLeapY(2024));

// Multiplication Table
function multtab(num) {
    for (let i = 0; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);

    }
}

//9 Palindrome
function palindromeCheck(num) {
    let numStr = num.toString();
    let result = numStr.split('').reverse().join('');
    return numStr === result;
}

console.log(palindromeCheck(121)); // true

// 10 GCD 
function GCD(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp
    }
    return a;
}
console.log("gcd : ", GCD(12, 15));