"use strict";
// TypeScript can interpret object implicitly
// or you can assign object explicitly with the key and values are types
//const person: {
//  name: string,
//    age: number
//}
var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = 5] = "ADMIN";
    Roles[Roles["READ_ONLY"] = 100] = "READ_ONLY";
    Roles["AUTHOR"] = "hello";
})(Roles || (Roles = {})); //enum usuallyy has all CAPTAIN or Capital first letter
const person = {
    name: "Thu",
    age: 30,
    hobbies: ["Sport", "hello"],
    role: [2, "author"],
    roles: Roles.AUTHOR
};
//person.role.push("admin"); //push allows in tuple
//person.role[1] = 10;
person.role = [0, "admin"];
console.log(person.role);
let favoriteActivities; // an array of string
//any[] : any types inside array
favoriteActivities = ["Sport"];
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    //console.log(hobby.map()) //-> Errors
}
if (person.roles === Roles.AUTHOR) {
    console.log("AUTHOR");
}
