// 1

let x1 = { b: 1, c: 2 };
let y1 = Object.keys(x1);
console.log(y1.length);

// 2
let x = '{ "b": 1, "c": 2 }';
let y = JSON.parse(x);
console.log(typeof y);
console.log(y);

