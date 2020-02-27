
//find the Max value in array
var marks = [45, 81, 64, 98, 35, 100];
var max = marks[0];
for (let i = 0; i < marks.length; i++) {
    var element = marks[i];
    if (element > max) {
        max = element;
    }
}
console.log("Highest value is: ", max);