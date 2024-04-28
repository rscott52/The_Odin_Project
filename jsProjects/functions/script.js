function add7 (num) {
return num + 7;
};

console.log(add7(5));

function multiply (a, b) {
    return a * b;
}

console.log(multiply(7, 6));

function capitalize (cap) {
let string = cap;
return string.charAt(0).toUpperCase() + string.slice(1);
};

console.log(capitalize("how are you doing today?"));

function lastLetter (y) {
    return y.slice(-2, -1);
};

console.log(lastLetter("I hope the weather is nice today!"));