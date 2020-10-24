'use strict';

// Task 1
const splitAndMerge = (str, sp) => str.split(" ").map(elem => elem.split("").join(sp)).join(" ");

// console.log(splitAndMerge("My name is John"," "));


// Task 2
const convert = hash => Object.entries(hash);

// console.log(convert({name: 'Jeremy', age: 24, role: 'Software Engineer'}));


//Task 3
const toCamelCase = str => {
    let separator;

    if (str.indexOf("-") !== -1) {
        separator = "-";
    } else if (str.indexOf("_") !== -1) {
        separator = "_";
    }

    return str.split(separator).map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)).join("");
}

// console.log(toCamelCase("The_stealth_warrior"));


// Task 4
const reverseWords = str => str.split(" ").map(word => word.split("").reverse().join("")).join(" ");

// console.log(reverseWords(" A fun little challenge! "));


//Task 5
const stringExpansion = str => {
    let count = 1;

    if (str == "") {
        return str;
    } else {
        return str.split("")
            .map(char => {
                if (!+char && +char !== 0) {
                    return char.repeat(count);
                } else {
                    count = +char;
                    return "";
                }
            })
            .join("");
    }
}

// console.log(stringExpansion("3D2a1d2f"));


// Task 6
const largest = (...args) => Math.max.apply(null, args);

const smallest = (...args) => Math.min.apply(null, args);

// console.log(largest(2, 0.1, -5, 100, 3));
// console.log(smallest(2, 0.1, -5, 100, 3));


// Task 7
const transform = baseArray => baseArray.map((item) => ( () => item) );

// const baseArray = [10, 20, 30, 40, 50];
// const newArray = transform(baseArray);
//
// console.log(newArray[3]()); // should return 40
// console.log(newArray[4]()); // should return 50
// console.log(newArray);


//Task 8
function sum() {
    var arg = [].slice.call(arguments);

    function recursiveSum(arg) {
        if (arg.length === 1) {
            return arg[0];
        } else {
            return arg[0] + recursiveSum(arg.slice(1, arg.length));
        }
    }

    return arguments.length === 0 ? 0 : recursiveSum(arg);
}

// console.log(sum(1, 2, 3, 4, 7));


// Task 9
function countDown(num) {
    setTimeout(function count(num) {
        if (num >= 0) {
            console.log(num);
            setTimeout(count, 1000, num - 1);
        }
    }, 1000, num);
}

// countDown(3);


// Task 10
Function.prototype.myBind = function (context) {
    var func = this;
    return function () {
        return func.apply(context, arguments);
    };
}

// function addPropToNumber(number) {
//     return this.prop + number;
// }
//
// var bound = addPropToNumber.myBind({prop: 9});
// console.log(bound(1)); // 10