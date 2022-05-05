/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

console.log("/n----------------Exr.1 Answer---------------/n")

function areaOfRectangle(l1,l2){
    areaSum = l1*l2
    return areaSum
}

console.log(areaOfRectangle(3,4))


/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

console.log("/n----------------Exr.2 Answer---------------/n")

function crazySum(number1,number2){
    let sumValue = number1 + number2
    if (number1 === number2){
        return sumValue*3
    }
    return sumValue
}

let sum = crazySum(3,7)

console.log(sum)


/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

console.log("/n----------------Exr.3 Answer---------------/n")

function crazyDiff(num1,num2){
    let sumDifference = num1 - num2
    if (num1 > num2) {
        return (sumDifference*3)
    }
  
}

let sumD = crazyDiff(21,19)

console.log(sumD)


console.log("/n----------------OR---------------/n")

function crazyDiff(num1,num2){
    let sumDifference = num1 - num2
    if (num1 > num2) {
        return (sumDifference)
    }
    return sumDifference*-1
}

let sumDiff = crazyDiff(18,19)

console.log(sumDiff)


/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

console.log("/n----------------Exr.4 Answer---------------/n")



/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

console.log("/n----------------Exr.5 Answer---------------/n")


/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

console.log("/n----------------Exr.6 Answer---------------/n")

function check3and7(x){
    
    if (x % 3 === 0) {
     console.log("Multiple of 3")
    }
    if (x % 7 === 0){
    console.log("Multiple of 7")
    }
    if ((x % 3 !== 0) && (x % 7 !== 0)) {
        console.log("Not multiple of 3 or 7")
    }

}

check3and7(21)


/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

console.log("/n----------------Exr.7 Answer---------------/n")



/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

console.log("/n----------------Exr.8 Answer---------------/n")



/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

console.log("/n----------------Exr.9 Answer---------------/n")




/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

console.log("/n----------------Exr.10 Answer---------------/n")




console.log("/n----------------END OF EXERCISE ANSWERS---------------/n")
