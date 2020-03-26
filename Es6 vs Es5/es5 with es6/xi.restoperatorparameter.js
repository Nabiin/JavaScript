//Rest operator is used in function decleration , its accepts arbitrary number


//---------------------------------------------------------------------
function fun(){
    console.log(arguments);  //This is a way to show the passed arguments  in funciton calling
    //This console.log show the all values but in object of arguments
    
}
  fun(1,2,3,4,5);
//----------------------------------------------------------------------

function lol(...arr){
    console.log(arr);
}

lol(1,2,3,4,5,6);



  