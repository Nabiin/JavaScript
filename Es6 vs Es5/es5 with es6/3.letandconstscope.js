/* let and const are function and block scope */
//let should be used instead of var



//=========================================================================
//block scope
{
    let a =12;
    const b = 13;
    console.log(a, b);
}

//console.log(a, b); a and b cannot access from here because they are block scope



//==================================================================
//funtion scope
function fun(){
    let x = 12;
    const y = 13;
    console.log(x,y);
}

fun();
//console.log(x,y);         //x and y cannot access from here because they are function scope tooooo


//----------------------------------------------------------------------------------
let nabin  = 121 ;
 // let nabin = 14;  //redecleration of same variable using let is not possible
 console.log(nabin);
 nabin = "hello this is nabin variable from let ";
 console.log(nabin);


 const bhandari = 14;
 console.log(bhandari);
 //const bhandari = 15;  redecleration is not possible
 //bhandari = "re assignment in const is not possible";  //reassigning also not possible in const
 