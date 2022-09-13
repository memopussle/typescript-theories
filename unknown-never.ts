let userInput: unknown; // different to any
let userName: string;

userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
  userName = userInput; // unknown is not a string
}

// an error function
//never: say that this function never return anything, # from void
function generateError(message: string, code: number): never { 
  throw { message: message, errorCode: code };
}
const result = generateError("An error occured!", 500);
console.log(result);


