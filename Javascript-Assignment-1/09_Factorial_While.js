function factorial(num) {
    let result = 1;
    
    while (num > 1) {
      result *= num;
      num--;
    }
    
    return result;
  }
  num=5
  console.log(`Factorial of ${num} is ${factorial(num)}`);
  