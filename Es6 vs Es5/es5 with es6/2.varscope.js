//we have to know that var is function scope means when we declear variable inside the function then 
//this is called the function scope then we cann't call from the outside of the function 
function fun(){
    var a;   //this a is function scope
    a=12;
    console.log(a);
}
fun();
//console.log(a);   //a is function scope so a cannot be access here


var b;
function check(){
var b;
b=2;
console.log(b);
}

b=3;
console.log(b); //global b is printed
check();   //local b =2 is printed
console.log(b);  //global is printed
 

//var is not function scope
{
    var c= "i can be access";
}
console.log(c);