// Q1 Create a program to reverse an array manually.
let fruit = ["Apple", "Banana", "JackFruit", "Oranage", "WaterMaleon"]
leg = fruit.length - 1
for (let i = leg; i >= 0; i--) {
    console.log(fruit[i]);
}


// Q2 Write a program to find the second largest number in an array.
function secondLargest(arr) {
    let largest = -Infinity;
    let second = -Infinity;
    for (let num of arr) {
        if (num > largest) {
            second = largest;
            largest = num;
        }
        else if (num > second && num < largest) {
            second = num;
        }
    }
    return second;
}
console.log(`second largest number in an array : ${secondLargest([10, 20, 30, 40])}`);



// Q3 create function to merge two array without duplicates

function mergeWithoutDuplicates(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}

a1 = [1, 2, 3, 5, 46, 8]
a2 = [12, 4, 53, 58, 9, 6]
console.log(`Merged array is :[${mergeWithoutDuplicates(a1, a2)}]`);


// Q4 Find the frequency of each element in an array
array = ['a', 'a', 'c', 'd', 'e', 'd', 'a']
ele = 'a'
fre = 0
for (let i = 0; i < array.length; i++) {
    if (ele === array[i]) {
        fre++
    }
}
console.log(`frequency of a :${fre}`);

// Q5 Implement a manual  version of the includes method

function manualIncludes(array, ele) {
    for (let i = 0; i < array.length; i++) {
        if (ele === array[i]) {
            console.log(`It include:${ele}`);
            break
        }
        else {
            console.log(`It not include:${ele}`);
            break
        }
    }
}
manualIncludes([10, 20, 30, 44, 87], 120);


//Q6 Shift elements in an array to the left by one position
function shiftLeft(arr) {
    if (arr.length === 0)
        return arr;
    let first = arr.shift();
    arr.push(first);
    return arr;
}
console.log(`An array to the left by one position is : ${shiftLeft([1, 2, 3, 4])}`);

//Q7 Rotate an array to the right 
function rotateRight(arr, k) {
    k %= arr.length;
    return arr.slice(-k).concat(arr.slice(0, -k));
}
console.log(rotateRight([1, 2, 3, 4, 5], 2));

// Q8 Remove all duplicate elements in an array

function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 3, 4]));

//Q9 Create a 2D array representing a multiplication table for numbers 1 to 10
function multiplicationTable() {
    let table = [];
    for (let i = 1; i <= 10; i++) {
        let row = [];
        for (let j = 1; j <= 10; j++) {
            row.push(i * j);
        }
        table.push(row)
    }
    return table;
}
console.table(multiplicationTable())

//Q10 Find the intersection of two arrays
function intersection(arr1, arr2) {
    return arr1.filter(item => arr2.includes(item));
}
console.log(`Intersection of two arrays:${intersection([1, 2, 3], [2, 3, 4])}`);
