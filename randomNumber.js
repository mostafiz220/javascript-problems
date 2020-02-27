// 2 = intiger number
// 2.3 = floating number
var num = 2.49999999;
var result = Math.floor(num); //go low
var result2 = Math.ceil(num); //go high
var result3 = Math.round(num); //go high if equel or higher than .5 OR go less
// console.log(result);
// console.log(result2);
// console.log(result3);

for (let i = 0; i < 10; i++) {
    var randomNumber = Math.random() * 6;
    var output = Math.round(randomNumber);
    console.log(output);
}