const accountId = 245367
let accountEmail = "prxf0rsaken69@gmail.com"
var accountPassword = "okcomputer"
accountCity = "Kanpur" // a variable can be declared without using any keyword in JS
let accountState; // value not declared

// accountId = 23 we can not change any constant value i.e. any identifier declared with const keyword
accountEmail = "abc@gmail.com"
accountPassword = "asgardianThor"
accountCity = "Lucknow"
/*

It is prefered not to use var in JS programs
because of the issues in block scope and functional scope

*/
console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);
 
//better way to print all variables at once

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);