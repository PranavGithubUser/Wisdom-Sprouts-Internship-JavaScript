arr = [-3, -56, -87, -25, -7]
largestNumber = -Infinity
secondLargest = -Infinity
console.log(largestNumber, secondLargest, "Before");
for (let n of arr) {
    if (n > largestNumber) {
        secondLargest = largestNumber//-Infinity
        largestNumber = n //-3
    }
    else if (largestNumber != secondLargest && largestNumber > n) {
        secondLargest = n;
    }
}
console.log(largestNumber, secondLargest, "After");

// arr1 =[-3, -56,-87, -25, -7]
// largestNumber = -Infinity;
// secondLargest = -Infinity;
// console.log(largestNumber,secondLargest,"Before")
// for(let n of arr1){
//     if(n>largestNumber){
//         secondLargest = largestNumber
//         largestNumber = n

//     }
//     else if(n > secondLargest && n != largestNumber)
//     {
//         secondLargest = n;
//     }

// }
// console.log(largestNumber,secondLargest,"after")