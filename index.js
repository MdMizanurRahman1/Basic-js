// 1

let x1 = { b: 1, c: 2 };
let y1 = Object.keys(x1);
console.log(y1.length);

// 2
let x = '{ "b": 1, "c": 2 }';
let y = JSON.parse(x);
console.log(typeof y);
console.log(y);

// 3
function func2() {
    for (var i = 0; i < 3; i++) {
        setTimeout(() => console.log(i), 1000);
    }
}
func2();

// variable type= variable is a box where we can storage things and can be changeable.
// number, string, boolean, undefined, null
// array and object
var num3 = 34;
var name = 'anisul islam';
var isOkay = true;


const fruits3 = ["Banana", "Orange", "Apple", "Mango", "kiwi"];
fruits3.shift();
console.log(fruits3);

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.unshift("Guava");

console.log(fruits2);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon", "Pineapple");
console.log(fruits);


const fruits23 = ["Banana", "Orange", "Apple", "Mango"];

fruits23.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits23);


let z = '{ "b": 1, "c": 2 }';
let c = JSON.parse(z);
console.log(typeof c);

const multilineCode = `
Backtick is used for multiline string 
and we can discuss about that thing
in es6 but before that there should be 
an elementary discusssion period
`;

console.log(multilineCode);

const a = 20;
const b = 30;

const summary = `Summary of ${a} and ${b} is ${a + b}`;
console.log(summary);

const add = (first, last) => {
    const sum = first + last;
    return sum
}

console.log(add(19, 23));


const numbers = [21, 12, 23, 34, 45];
const numbers2 = [87, 98, 343, ...numbers, 54, 55, 56];
numbers.push(98)

console.log(numbers);
console.log(numbers2);