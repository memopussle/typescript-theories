// TypeScript can interpret object implicitly
// or you can assign object explicitly with the key and values are types
//const person: {
//  name: string,
//    age: number
//}
var person = {
    name: "Thu",
    age: 30,
    hobbies: ["Sport", "Cooking"]
};
var favoriteActivities; // an array of string
//any[] : any types inside array
favoriteActivities = ["Sport"];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
