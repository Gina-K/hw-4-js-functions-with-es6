'use strict';

const splitAndMerge = (str, sp) => str.split(" ").map(elem => elem.split("").join(sp)).join(" ");

const convert = hash => Object.entries(hash);

const toCamelCase = str => str.replace(/(-|_)(.)/g, (all, separator, char) => char.toUpperCase());

const reverseWords = str => str.split(" ").map(word => word.split("").reverse().join("")).join(" ");

const stringExpansion = str => {
    let count = 1;

    if (str === "") {
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

const largest = (...args) => Math.max.apply(null, args);

const smallest = (...args) => Math.min.apply(null, args);

const transform = baseArray => baseArray.map((item) => ( () => item) );

const sum = (...arg) => {
    const recursiveSum = arg => arg.length === 1 ? arg[0] : arg[0] + recursiveSum(arg.slice(1, arg.length));

    return arg.length === 0 ? 0 : recursiveSum(arg);
}

const countDown = num => {
    const count = num => {
        if (num >= 0) {
            console.log(num);
            setTimeout(count, 1000, num - 1);
        }
    };

    setTimeout(count, 1000, num);
}