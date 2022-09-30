// Exercise 2
// Given the variable


// Define a function called reverse with one parameter. This function will reverse the string. You cannot use any built in methods to do this. Use a loop.
let sentence = "My name is John!";
function reverse(str) {
  let newStr = "";
  for (let i = str.length -1; i >= 0; --i) {
    newStr = newStr.concat(str[i]);
  }
  return newStr;
}

console.log(reverse(sentence)); // "!nhoJ si eman yM"
