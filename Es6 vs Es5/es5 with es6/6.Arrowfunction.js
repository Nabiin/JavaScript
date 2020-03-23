//There are 3 ways of using arrow function


let arr= [1,2,3,4,5];


var a= arr.map(el => el+1);  //if there is one parameter so parenthesis is optional
var b= arr.map((el,index) => el+index);  //there are two parameter so parenthesis is needed
var c = arr.map(el=>{   //if we use curly braces then return keyword is necessary
    return el;
})


console.log(a);
console.log(b);
console.log(c);
