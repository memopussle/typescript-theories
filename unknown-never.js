"use strict";
let userInput; // different to any
let userName;
userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
    userName = userInput; // unknown is not a string
}
// an error function
//never: say that this function never return anything, # from void
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
const result = generateError("An error occured!", 500);
console.log(result);
