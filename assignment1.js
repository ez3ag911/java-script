
 Coding Questions


// 1
const question1 = Number("123") + 7;
console.log(question1);


// 2
function checkFalsy(value) {
    if (!value) {
        return "Invalid";
    } else {
        return value;
    }
}
console.log(checkFalsy(0));


// 3
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}


// 4
let numArray = [1, 2, 3, 4, 5];
let evenNum = numArray.filter(function (num) {
    return num % 2 === 0;
});
console.log(evenNum);


// 5
function mergeArrays(firstArray, secondArray) {
    let merged = [...firstArray, ...secondArray];
    return merged;
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));


// 6
function getDayName(dayNumber) {
    switch (dayNumber) {
        case 1:
            return "Sunday";
        case 2:
            return "Monday";
        case 3:
            return "Tuesday";
        case 4:
            return "Wednesday";
        case 5:
            return "Thursday";
        case 6:
            return "Friday";
        case 7:
            return "Saturday";
        default:
            return "Invalid number";
    }
}
console.log(getDayName(2));


// 7
let wordsArray = ["a", "ab", "abc"];
let wordLengths = wordsArray.map(function (word) {
    return word.length;
});
console.log(wordLengths);


// 8
function checkDivisible(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "Divisible by both";
    } else {
        return "Not divisible by both";
    }
}
console.log(checkDivisible(15));


// 9
const getSquare = (num) => {
    return num * num;
};
console.log(getSquare(5));


// 10
function formatPerson(personObj) {
    const { name, age } = personObj;
    return `${name} is ${age} years old`;
}
const person = { name: "John", age: 25 };
console.log(formatPerson(person));


// 11
function sumNumbers(...nums) {
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        total = total + nums[i];
    }
    return total;
}
console.log(sumNumbers(1, 2, 3, 4, 5));


// 12
function waitThreeSeconds() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Success");
        }, 3000);
    });
}
waitThreeSeconds().then(function (message) {
    console.log(message);
});


// 13
function getLargestNumber(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(getLargestNumber([1, 3, 7, 2, 4]));


// 14
function getKeys(obj) {
    return Object.keys(obj);
}
console.log(getKeys({ name: "John", age: 30 }));


// 15
function splitSentence(sentence) {
    return sentence.split(" ");
}
console.log(splitSentence("The quick brown fox"));



 Essay questions

/*
// 1. What is the difference between forEach and for...of? When would you use each?
- forEach: It is a built-in array method that loops over every item in an array and runs a function on it. It only works on arrays, and you cannot stop it early using break or skip items using continue.
  When to use it: When I want to do something simple on all elements of an array from start to end without stopping.

- for...of: It is a normal loop that works on arrays, strings, and other iterable things. With for...of, I can stop the loop early using break or skip an item using continue, and it works well with async/await.
  When to use it: When I need to stop the loop early if a certain condition happens, when I am looping over a string, or when using async/await.


// 2. What is hoisting and what is the Temporal Dead Zone (TDZ)? Explain with examples.
- Hoisting: It means JavaScript moves variable and function declarations to the top of their scope before running the code. Because of this, normal functions can be called before the line they are written on, and var variables are hoisted with a default value of undefined.

- Temporal Dead Zone (TDZ): It is the space between the start of the scope and the line where a let or const variable is declared. If I try to access the variable inside this zone before declaring it, JavaScript gives a ReferenceError.

Example:
console.log(age); // prints undefined because var is hoisted
var age = 20;

console.log(score); // ReferenceError because score is in the TDZ
let score = 50;


// 3. What are the main differences between == and ===?
- == (Loose Equality): It only checks if the values are equal, and if they have different types, JavaScript converts one of them automatically (type coercion) before comparing. For example, 10 == "10" gives true.

- === (Strict Equality): It checks both the value and the data type without doing any automatic conversion. If the types are different, it returns false right away. For example, 10 === "10" gives false.


// 4. Explain how try-catch works and why it is important in async operations.
- How try-catch works: We put the code that might cause an error inside the try block. If everything runs fine, the catch block is ignored. If an error happens, the code stops in the try block and jumps to the catch block so we can handle the error instead of crashing the whole program.

- Why it is important in async operations: Async operations (like getting data from a server or API) can fail anytime because of internet problems or server errors. Using try-catch helps us catch those failed requests safely and show a message or handle the issue instead of breaking the app.


// 5. What's the difference between type conversion and coercion? Provide examples of each.
- Type Conversion: It is when I manually convert a value from one data type to another using functions like Number() or String().
  Example: Number("25") converts the string "25" into the number 25.

- Type Coercion: It is when JavaScript automatically converts a data type on its own when doing an operation between two different types.
  Example: "10" + 5 converts 5 into a string and gives "105", while "10" - 5 converts "10" into a number and gives 5.
*/