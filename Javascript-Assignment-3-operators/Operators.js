let num1 = 100
let num2 = 2
console.log("\n.............Arithemetic Operator..........\n");

console.log(`Addition: ${num1 + num2}`);
console.log(`Substraction: ${num1 - num2}`);
console.log(`Multiplication: ${num1 * num2}`);
console.log(`Division: ${num1 / num2}`);
console.log(`Modulues: ${num1 % num2}`);

console.log("\n.............Comparision Operator..........\n");

console.log(`Is First number is greater than second :${num1 > num2}`);
console.log(`Is First number is equal to  second :${num1 === num2}`);
console.log(`Is First number is less than  second :${num1 < num2}`);

console.log("\n.............Logical Operator..........\n");
let mathScore = 95;
let scienceScore = 90;

let isEligible = (mathScore >= 90) && (scienceScore >= 85);
console.log(`Scholarship Eligibility:${isEligible}`);

console.log("\n.............Assignment Operator..........\n");

let x = 10;
console.log(`Intitial value of x:${x}`);
x += 5;
console.log(`After adding 5:${x}`);
x *= 3;
console.log(`After multiplying 3:${x}`);
x -= 10;
console.log(`After substractiong 10:${x}`);
x /= 2;
console.log(`After division 2:${x}`);
x %= 3;
console.log(`Modulus with 3:${x}`);


console.log("\n.............Operator Precedence..........\n");

let expr1 = 10 + 3 * 5;
let expr2 = (10 + 3) * 5;
console.log(`10+3*5=${expr1}`);
console.log(`(10+3)*5=${expr2}`);

console.log("\n.............Area of Rectangle..........\n");

let length = 100
let width = 50

let perimeter = 2 * (length + width);
let area = length * width;

console.log(`Perimeter:${perimeter}`);
console.log(`Area:${area}`);

console.log("Is perimeter greater than area?", perimeter > area);

console.log("\n.............BMI calculator..........\n");

let weight = 70
let height = 180

let bmi = weight / (height * weight);
console.log(`BMI:${bmi}`);

if (bmi < 18.5) {
    console.log("Category:Underweight");
}
else if (bmi >= 18.5 && bmi < 24.9) {
    console.log("Category:Normal weight");
}
else if (bmi >= 25 && bmi < 29.9) {
    console.log("Category :Overweight");
}
else {
    console.log("Category:Obesity");
}

console.log("\n.............Even or odd..........\n");

let num = 4;
if (num % 2 === 0) {
    console.log(`${num}:number is even`);
}
else {
    console.log(`${num}:number is odd`);
}

console.log("\n.............Shopping Discount..........\n");

let totalAmount = 1000;
if (totalAmount > 100) {
    totalAmount -= totalAmount * 0.1;
}
console.log(`Discounted total after 10% discount:${totalAmount}`);
