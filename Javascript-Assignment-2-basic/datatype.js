let age = 10;
var temperature = -5;

let name = "spiderman"
let message = "Hello, how are you?";

let isSunny = true;
let isTired = false;

let car = {
    color: "red",
    wheels: "4",
    isElectric: true
};

const scores = [10, 90, 80];

let toy;
let lostToy = null;

let stars = 123456795643131461334n;
let secret = Symbol("code");

console.log(`Number datatype : ${age} and ${temperature}`);
console.log(`String datatype :${name} and ${message}`);
console.log(`Boolean datatype:${isSunny} and ${isTired}`);
console.log(`Object datatype:${car.color}`)
console.log(`Array:`);

scores.forEach(element => {
     console.log(element);
});

console.log(`Undefined:${toy}`);
console.log(`Null:${lostToy}`);

console.log(`BigInt:${stars}`);
console.log(`Symbol:${typeof(secret)}`);






