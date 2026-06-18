let v1 = "Hello"
let v2 = " Shubh"
let v3 = v1 + v2 // concatenation
console.log(v3)

// console.log( 3 + "hello")    3hello
// console.log( 3 + 2 + "hii")  5hii
// console.log("1" + 2 + 3)     123


// these kind of conversions are not prefered in real world problems and production work

console.log(true) // prints true
console.log(+true) // prints 1 which is kind of ok for "true" value but we see boolean to number conversion
// console.log(true+) throws an error
console.log(+"") // "" is false i.e. 0 therefore prints 0 string to number conversion