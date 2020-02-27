function reverseString(str) {
    var reverse = "";
    for (let i = 0; i < str.length; i++) {
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}

var statement = "i am muhammas mustafizur Rahman zillu";
var forAlien = reverseString(statement);
console.log(forAlien);
