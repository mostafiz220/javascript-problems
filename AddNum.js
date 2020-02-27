//function to add value in a array
function getSumOfArray(numbers) {
    var sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
//calling function by passing arry
var numbers = [45, 81, 64, 98, 35, 100];
var result = getSumOfArray(numbers);
console.log("Total of the numbers: ", result);

//calling function by passing value of a array
var total = getSumOfArray([34, 54, 34, 64, 34, 43]);
console.log("Total of the numbers: ", total);