// Combine Union: merge complex types 


function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: string
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "helllooo"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
    return result;
}

const combinedAges = combine(30, 26, "helllooo");
console.log(combinedAges);

const combinedStringAges = combine('12', '45', "meh")
console.log(combinedStringAges);

const combinedNames = combine("Max", "Anna", "hello kity");
console.log(combinedNames);

// Literal Type
