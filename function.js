"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result: " + num);
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
printResult(add(5, 12)); //17
//console.log(printResult(add(5, 12))) -> undefined
// void: use when you have a function that doesnt return a value
let combineValues; // whatever we store in combineValue, has to be a function
// combineValue is a function that takes 2 numbers and return a number
combineValues = add;
console.log(combineValues(8, 8));
addAndHandle(10, 20, (result) => {
    console.log(result);
});
// values from addAndHandle, pass to function addAndHandle up, where parameters matching with parameters declared.
//3rd parameter will be a function that take a number returns nothing
