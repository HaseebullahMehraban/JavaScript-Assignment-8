// Task 2: Modules (Export & Import)

// module1.js

export function greet(name) {
    console.log(`Hello, ${name}!`);
}

export const age = 25;

// module2.js

import { greet, age } from './module1.js';

greet("John");
console.log(`My age is ${age}.`);