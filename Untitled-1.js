"use strict";
const ps = require("prompt-sync");
const prompt = ps();
let name = prompt("Enter a single letter: ");
    
console.log(`Hello ${name}`);
