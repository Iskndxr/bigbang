//import fs module to configure file system
const fs = require('fs');

//set an array to temporary store result
let result = [];

//iterate for loop
for (let i = 1; i <= 100; i++) {
    //check if the current number is divisible by 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
        result.push("BIGBANG");
    } 
    //check if the current number is divisible by 3
    else if (i % 3 === 0) {
        result.push("BIG");
    } 
    //check if the current number is divisible by 5
    else if (i % 5 === 0) {
        result.push("BANG");
    } 
    //if the number can't satisfy three of the condition then just push the current number
    else {
        result.push(`${i}`);
    }
}

//write result array into a file called output.json 
fs.writeFile('output.json', JSON.stringify(result, null), (err) => {
    if (err) throw err;
    console.log('Saved Successfully!');
});