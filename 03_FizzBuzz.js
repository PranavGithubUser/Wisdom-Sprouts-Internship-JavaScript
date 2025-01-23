function FizzBuzz() {
    console.log("Number 1 to 50:");
    for (i = 1; i <= 50; i++) {

        if (i % 3 == 0) {
            console.log("Fizz");
            continue
        }
        else if (i % 5 == 0) {
            console.log("Buzz")
            continue
        }
        else if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz")
            continue
        } 
        else {
            console.log(`${i}`)
        }
    }

}
FizzBuzz()