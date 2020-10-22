'use strict';

// Task 1
function splitAndMerge(str, sp) {
    var array = str.split(" ").map(function (elem) {
        return elem.split("").join(sp);
    })
    return array.join(" ");
}

// console.log(splitAndMerge("My name is John"," "));


// Task 2
function convert(hash) {
    var arr = [];
    for (var key in hash) {
        var propArr = [];
        propArr.push(key);
        propArr.push(hash[key]);
        arr.push(propArr);
    }
    return arr;
}

// console.log(convert({name: 'Jeremy', age: 24, role: 'Software Engineer'}));


//Task 3
function toCamelCase(str) {
    var separator;

    if (str.indexOf("-") !== -1) {
        separator = "-";
    } else if (str.indexOf("_") !== -1) {
        separator = "_";
    }

    var arr = str.split(separator).map(function (word, index) {
        return index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1);
    });

    return arr.join("");
}

// console.log(toCamelCase("The_stealth_warrior"));


// Task 4
function reverseWords(str) {
    return str.split(" ")
        .map(function (word) {
            return word.split("").reverse().join("");
        })
        .join(" ");
}

// console.log(reverseWords(" A fun little challenge! "));


//Task 5
function stringExpansion(str) {
    var count = 1;

    function charExpansion(count, char) {
        var arr = [];
        for (var i = 0; i < count; i++) {
            arr.push(char);
        }
        return arr.join("");
    }

    if (str == "") {
        return str;
    } else {
        return str.split("")
            .map(function (char) {
                if (!+char && +char !== 0) {
                    return charExpansion(count, char);
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
function largest() {
    return Math.max.apply(null, arguments);
}

function smallest() {
    return Math.min.apply(null, arguments);
}

// console.log(largest(2, 0.1, -5, 100, 3));
// console.log(smallest(2, 0.1, -5, 100, 3));


// Task 7
function transform(baseArray) {
    var newArray = baseArray.map(function (item) {
        return function () {
            return item;
        }
    });
    return newArray;
}

// var baseArray = [10, 20, 30, 40, 50];
// var newArray = transform(baseArray);
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