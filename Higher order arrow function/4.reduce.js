 let arr = [1,2,3,4,5]

/* function oldmethod( args , args2){
    console.log(args , args2)
    return args+args2
}

//var oldvar = arr.reduce(oldmethod) //args take 1 and args2 take 2
var oldvar = arr.reduce(oldmethod , 15) //args take 15 and args2 take 1
console.log(oldvar)
 */


 //es6
 let ans = arr.reduce((a,b)=> a+b); //it will just  add all the arrays
 let ans1 = arr.reduce((a,b)=> a+b , 15); //it will just add the value of arrays  starting from 15
 
 console.log(ans) //15 
 console.log(ans1) //30
