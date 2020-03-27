//This is an example if Asynchronous JavaScript
//settime out is an exmple of asyn in js
//async means non - blocking

function fun1(){
    setTimeout(()=>
    console.log("World"),1500); //number in millisecond //this run on background somewhere in web apis where dom events and httprequest also sits
}



function fun2(){
console.log("Hello");
fun1();
console.log("!");
}

fun2();



//we know one function then other in synchronous way  is regular line by line execution in programming



/* The regular out be like Hello World !
but we have use settimeout function so  this function set in webapis content then others codes run side by side
when the timer is finish in settimeout  function it goes in message que ques then form message que its goes on execution context
then it prints the result */
