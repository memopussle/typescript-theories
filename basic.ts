console.log("hello world me learn typescript!");

//expliciitly declare core types after :
function add(n1: number, n2: number, showResult: boolean, resultPhrase: string) {
    console.log(typeof number1);  
    // in vanilla -> if (typeof n1== 'number' || typeof n2 !=='number') {
    // throw new Error('Incorrect Input!')
    //} 

    let result = n1 + n2;
    if (showResult) {
        console.log(resultPhrase + result); //tring + number = string
    } else {
       return n1 + n2;
    }
   
}

let number1 = 5;
const number2 = 2.8;
const printResult = true;
let resultPhrase = 'Result is: ';

const result = add(number1, number2, printResult, resultPhrase)

// TypeScript only helps to compile to JS. it adds a sanity check, create a file that check for errors
// -> avoid. ex:'5' -> it will have red squiggle