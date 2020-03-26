//Spread Operator is used in function call 

//ex1---------------------------------------------------------
var arr = [1,2,3,4,5];

function fun(a,b,c,d,e){
    return a+b+c+d+e;
}

//es5 method
var ans = fun.apply(null,arr);
console.log(ans)


//es6 method
var ans1 = fun(...arr);
console.log(ans1)



//ex 2------------------------------------------------------------

var family1=["Ram", "Shyam" ,"Hari"];
var family2=["Ramesh" , "Nikesh" ,"GurasNani"];


//es6
var combine =[...family1 , ...family2]; //we cam merge two arrays in this way
var addcombine =[...family1 , "Sajin Maharjan"  , ...family2];  // we can merge and add too in arrays
console.log(combine);
console.log(addcombine)
 
//es5
var newf = family1.concat(family2);
console.log(newf);
