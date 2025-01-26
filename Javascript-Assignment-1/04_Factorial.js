function factorial(n)
{
    let result = 1;
    for (let i = 2; i <= n; i++)
        result *= i;
    return result;
}

let num = 5;
console.log(`Factorial of ${num} is ${factorial(5)}`);