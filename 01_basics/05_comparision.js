console.log("00002" > 1)    // string "00002" converted to number automatically and then compared with 1
console.log(null > 0)   // false
console.log(null == 0)  // false
console.log(null >= 0)  // true

// comparision : > , < , >= , <= converts null to a number , treating it as 0.

console.log(undefined == 0)
console.log(undefined > 0)
console.log(undefined < 0)