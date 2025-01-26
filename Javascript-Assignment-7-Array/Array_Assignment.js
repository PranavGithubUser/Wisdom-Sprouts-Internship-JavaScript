// Q1 Reverse Array
// let fruit = ["Apple", "Banana", "JackFruit", "Oranage", "WaterMaleon"]
// leg = fruit.length - 1
// for (let i = leg; i >= 0; i--) {
//     console.log(fruit[i]);
// }
// Q2 Second Largest
// arr1 = [-3, -56, -87, -25, -7]
// largestNumber = -Infinity;
// secondLargest = -Infinity;
// console.log(largestNumber, secondLargest, "Before")
// for (let n of arr1) {
//     if (n > largestNumber) {
//         secondLargest = largestNumber
//         largestNumber = n

//     }
//     else if (n > secondLargest && n != largestNumber) {
//         secondLargest = n;
//     }

// }
// console.log(largestNumber, secondLargest, "after")
// Q3
// a1 = [1, 2, 3, 5, 46, 8]
// a2 = [1, 4, 53, 8, 9, 6]

// // a3=a1+a2
// // console.log(a3);
// console.log(arr1.concat(a2))

// Q4
array = ['a', 'a', 'c', 'd', 'e', 'd', 'a']
ele = 'a'
fre = 0
for (let i = 0; i < array.length; i++) {
    if (ele === array[i]) {
        fre++
    }
}
console.log(`frequency of a :${fre}`);

// Q5
for (let i = 0; i < array.length; i++) {
    if (ele === array[i]) {
        console.log(`It include ${ele}`);
        break
    }
    else{
        console.log(`It not include ${ele}`);
        break
    }
}