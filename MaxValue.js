var buniness = 450;
var minister = 650;
var govOfficer = 850;
//find max value using Math.max function 
var max = Math.max(buniness,minister,govOfficer);
console.log(max);


//find max value using if else statment 
if (buniness > minister) {
    if (buniness > govOfficer) {
        console.log("Business is bigger");
    }
    else {
        console.log("govOfficer is bigger");
    }
}
else {
    if (minister > govOfficer) {
        console.log("Minister is bigger");
    }
    else {
        console.log("GovOfficer is bigger");
    }
}
