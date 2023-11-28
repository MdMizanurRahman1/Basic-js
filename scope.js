var x;

function myFunc() {
    var x = 30;
    console.log(`My variable is ${x}`);
}

myFunc()
console.log('global', x);

// 5. Problem: Overriding Variable in the Same Scope
// Explanation: Declaring the same variable name in the same scope can lead to unexpected behavior.

var z = 1;
var z = 2;
console.log(z); // Output: 2

// 4. Problem: Block Scope with let and const
// Explanation: let and const introduce block scope, which can be confusing if not understood properly.


if (true) {
    var a = 5;
    let b = 10;
}

console.log(a); // Output: 5
// console.log(b); // ReferenceError: b is not defined


// 1. Problem: Variable Hoisting
// Explanation: In JavaScript, variable declarations are hoisted to the top of their scope, which means they are moved to the top during the compilation phase.


console.log(x); // Output: undefined
var x = 5;
// Solution: Always declare variables at the top of their scope to avoid unexpected behavior.

// 2. Problem: Global Scope Pollution
// Explanation: Declaring variables without the var, let, or const keyword inside a function can lead to global scope pollution.


function addToGlobal() {
    y = 10;
}
addToGlobal();
console.log(y); // Output: 10
// Solution: Use var, let, or const to declare variables and avoid polluting the global scope.

function ty() {
    t = 10;
    console.log(`t from inside ${t}`);
}
ty();
console.log(t);

var math = true;
var biology = true;
var bangla = false;

if (math == true) {
    if (biology == true) {
        if (bangla == true) {

        } else {
            console.log('Bangla baloo paro na');
        }
    } else {
        console.log('bio balo paro na');
    }

} else {

}