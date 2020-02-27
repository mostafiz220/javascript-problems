//removed duplicate value in a array
var name = [ 3, 4, 5, 3, 5, 33, 23, 5]
var uniqueName = [];

for (let i = 0; i < name.length; i++) {
    var element = name[i];
    var index = uniqueName.indexOf(element);
    if(index == -1){
        uniqueName.push(element);
    }
}
console.log(uniqueName);

function add(a, b){
    return a + b;
}
 var n = add("adam" + "eve")
console.log(n);