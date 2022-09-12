// TypeScript can interpret object implicitly
// or you can assign object explicitly with the key and values are types
//const person: {
//  name: string,
//    age: number
//}

const person = {
  name: "Thu",
  age: 30,
  hobbies: ["Sport", "hello"],
};

let favoriteActivities: string[]; // an array of string

//any[] : any types inside array
favoriteActivities = ["Sport"];


for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
    //console.log(hobby.map()) //-> Errors
}