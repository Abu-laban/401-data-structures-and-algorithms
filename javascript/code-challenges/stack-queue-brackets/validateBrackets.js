'use strict';

let validateBrackets = (string) => {
    let result = [];
    let result2 = [];
    let balanced;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === '(' || string[i] === '[' || string[i] === '{') {
            result.push(string[i]);
        }
        if (string[i] === ')' || string[i] === ']' || string[i] === '}') {
            result2.push(string[i]);
        }
    }

    if (result.length !== result2.length || result.length === 0) {
        return (balanced = false);
    }
    for (let j = 0; j < result.length; j++) {

        if (
            (result[j] === '(' && string.includes(')')) ||
            (result[j] === '{' && string.includes('}')) ||
            (result[j] === '[' && string.includes(']'))
        ) {
            balanced = true;
        } else {
            balanced = false;
        }
    }

    return balanced;


};

module.exports = validateBrackets;