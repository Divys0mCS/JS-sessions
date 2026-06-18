// conversion 

// Number()

let marks = "67"

console.log(typeof marks)
console.log(typeof(marks))

let valueInMarks = Number(marks)
console.log(valueInMarks)
console.log(typeof valueInMarks)

let notANumber = "345abc"
let valueInNan = Number(notANumber)
console.log(typeof valueInNan)
console.log(valueInNan)


/*

1. "67" => 67
2. "345abc" => NaN (not a number) type : number
3. true => 1 and false => 0

*/

// Boolean()

let a = 787
let booleanA = Boolean(a)
console.log(booleanA)

// 1 => true and 0 => false
// non 0 numbers => true
// "" => false and "Shubh" => true

// String()

let someNumber = 123
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)