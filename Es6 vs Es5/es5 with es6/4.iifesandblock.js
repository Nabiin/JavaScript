//es5

///this function is used to make data hidden because var is function scope
 ( function(){
     console.log("hello world");
     var a = 1;
     let b =2;
     const c =3;
     console.log(a,b,c);
 }());

 //console.log(a,b,c); // every thing ( a,b ,c) cannot be access from here


 ///es6
 //in es6 there is let and const which are block scope
 //every thing between {} this bracket is block scope
 {
     console.log('Hello this is block scope');
     var x = 12;
     let y =13;
     const z = 14;
     console.log(x,y,z);
 }

 //console.log(y,z);  //y and z are declear from let and cons so they are block scope which cannt be access
 console.log(x); // x is declear with var which is function scope so we declear in block so this is accessable

 