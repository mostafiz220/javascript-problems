var myWord = "i am muhammas mustafizur Rahman zillu and my wife is shahida jerin";
var count = 0;
for (let i = 0; i < myWord.length; i++) {
    var char = myWord[i];
    if (char == " " && myWord[i - 1] != " ") {
        count++;
    }
}
count++;
console.log(count);