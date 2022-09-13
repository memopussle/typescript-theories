# Course Outline

![TypeScript definition](./img/course-outline.png)

# TypeScript

- A JS Superset
- A language building up on JavaScript
- Adds new features + advantages to JavaScript
- Browser CAN'T execute TypeScript :(
- Features are compiled to JS "workarounds", possible errors are thrown

![TypeScript definition](./img/typescript-definition.png)

## Why TypeScript?

![TypeScript definition](./img/why-typescript.png)

## TypeScript Overview

![TypeScript definition](./img/typescript-overview.png)

## Core Types

- number: All numbers, no differentiation between intergers or loats.
- string: All text values
- boolean: true, false. no "truthy, falsy" values

1. JavaScript uses "dynamic types" (resolved at runtime), TypeScript uses "static types" (set during development)

2. TypeScript perfectly can understand the types of input in const, let, therefore no need to clare :type... do it only when passing values as parameters

```js
let number1 = 5; //TypeScript understands the type straight away

let number1: number; // declare number1 type before it's defined
number1 = 5;
```

3. Tuple: Added by TypeScript: Fixed-length array.

- Useful when you need a x amount of values in array, and you know types of each values in advane, you can use tuple, get more strictness, clearness.

```js
const person: {
    name: string,
    age: number,
    hobbies: string[],
    role: [number, string]
  name: "Thu",
  age: 30,
  hobbies: ["Sport", "hello"],
  role: [2, "author"],
};

person.role = [0, 'admin'] // -> role: [0, 'admin']
// person.role = [0, 'admin', 'user']-> not acceptable because we already ddclare the number of values in array and the types. 
```

4. Enum ( added by Typescript) : Automatically enumerated global constant identifiers

```js
enum Roles {
  ADMIN = 5,
  READ_ONLY,
  AUTHOR = "singer",
}

const person = {
  roles: Roles.AUTHOR
};

console.log(person.roles) //singer
```

5. ```*``` : any types in array. This should be avoided. 

6. ```undefined```: is a vaid type in TypeScript

- void: use when you have a function that doesnt return a value

7. Function: use when you want to declare a variable a function


```js

let combineValues: Function; // whatever we store in combineValue, has to be a function
combineValues = add;
console.log(combineValues(8, 8));

```

8. ```unknown```: a unknown value. unknown is different fromany.
- unknown is a better choice than any if you don't know the exact value types

9. ```never``` type: 

```js
//never: say that this function never return anything, # from void
function generateError(message: string, code: number): never { 
  throw { message: message, errorCode: code };
}
const result = generateError("An error occured!", 500);
console.log(result);
```

## The TypeScript Compiler
Configuring & Using the TypeScript Compiler

## Watch a whole typescripe files

```js
tsc --init // initialize tsc

tsc // run all typescript files or

tsc --w
```


10. Exclude a file

```js
// go to tsconfig,json 
{...    
    "skipLibCheck": true                                
  }
"exclude": [
  "**/*.dev.ts" // any file has .dev.ts will be excluded
]
 } 

```