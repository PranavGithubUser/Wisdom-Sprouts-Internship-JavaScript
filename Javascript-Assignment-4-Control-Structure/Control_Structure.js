// 15 Average of N numbers.
var nums = [15, 25, 40, 200];
let numslen = nums.length;
let sum = 0;
for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
}
let avg = Math.round(sum / numslen);
console.log(avg);

// 17 Divisor of a Number
var number = 12;
let divisors = [];
for (let i = 1; i <= number; i++) {
    if (number % i == 0) {
        divisors.push(i);
    }
}
console.log(divisors);


// program to check an Armstrong number of three digits
function checkArmstrong() {

    let sum = 0;
    const number = 153;

    let temp = number;
    while (temp > 0) {
        let remainder = temp % 10;
        sum += remainder * remainder * remainder;
        temp = parseInt(temp / 10);
    }
    if (sum == number) {
        console.log(`${number} is an Armstrong number`);
    }
    else {
        console.log(`${number} is not an Armstrong number.`);
    }
}
checkArmstrong();

//  Pyramid Numbers 
function PyramidPattern() {

    let n = 5;
    for (let i = 1; i <= n; i++) {
        let str = '';
        let count = 1;
        for (let j = 1; j <= 2 * n; ++j) {
            if (i + j >= n + 1 && (i >= j - n + 1)) {
                // Add a space after each number
                str += count.toString() + ' ';
                count++;
            } else {
                // Add two spaces for the gap
                str += ' ';
            }
        }

        console.log(str);
    }
}
PyramidPattern();