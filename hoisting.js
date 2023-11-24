// Hoisting

// Therefore, assigning a value to an undeclared variable implicitly creates it as a global variable when the assignment is executed. This means that all undeclared variables are global variables.

function hoistCode() {
    a = 30;
    let b = 20;
}
hoistCode();

console.log(a); // 30
// console.log(b); // ReferenceError : b is not defined

// Explanation: In the above code, we created a function called codeHoist() and in there we have a variable that we didn’t declare using let/var/const and a let variable b. The undeclared variable is assigned the global scope by javascript hence we are able to print it outside the function, but in case of the variable b the scope is confined and it is not available outside and we get a ReferenceError.

var a = 10;
function foo() {
    console.log(a);
    var a = 20;
}
foo();

console.log([] == false);
console.log([] == true);
console.log({} == true);
