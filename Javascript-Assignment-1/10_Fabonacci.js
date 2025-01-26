function fibonacci(n) {
    let FibonacciSeq = [0, 1]; 

    for (let i = 2; i < n; i++) {
        FibonacciSeq.push(FibonacciSeq[i - 1] + FibonacciSeq[i - 2]); 
    }

    return FibonacciSeq.slice(0, n); 
}
console.log("Fibonacci sequence up to N terms.....!");
console.log(fibonacci(5)); 
console.log(fibonacci(8)); 
