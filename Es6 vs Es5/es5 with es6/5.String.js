var name = "Nabin";
var mname = "kumar";
var lname = "Bhandari";

//es5
console.log("HI my name is " + name + mname + lname );

//es6
console.log(`HI my name is  ${name}  ${mname} ${lname}`);


//some basic tips to manupulate string
/*
startsWith(); 
endsWith();
includes();
repeat(5); //its repeat 5 time

*/

console.log(name.startsWith('N'));
console.log(name.endsWith('bin'));
console.log(name.includes('abni'));
console.log(name.repeat(6));
console.log(`${name} `.repeat(5));

