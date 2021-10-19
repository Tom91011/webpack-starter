import { wizard } from "./wizard"
import { barbarian } from "./barbarian"

console.log("Ran from index.js");
console.log(wizard);
console.log(barbarian);

const obj = { a: "alpha", b: "bravo"}
const newObj = { ...obj, c: "charlie"}
console.log(newObj);
