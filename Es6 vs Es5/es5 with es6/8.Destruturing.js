//------------------------------------------destruturing in arrays
var arr=["Nabin", 56];
const [Name , Rollno] = arr;
console.log(Name);
console.log(Rollno);


//--------------------------------how to extract data from returing funcion of arrays
function fun(){
    var arr = [];
     for(var a = 0 ; a<2;a++)
         arr[a]= Math.floor(Math.random()*10);
      
   return arr;
}
const [a ,b ] = fun();
console.log(a,b);


//--------------------------------  destructuring in object
var obj={
    Name : "Nabin",
    Lname : "Bhandari",
    Class : 56,

}

var {Name:fname , Lname: ename , Class:ro } = obj;  //using new variable for destructuring
console.log(fname);
console.log(ename);
console.log(ro); 

// var{Name, Lname ,Class} = obj;    //destructuring using same name
// console.log(Name);
// console.log(Lname);
// console.log(Class)
//------------------------------------------------------------------------

var objnew={
    person1 :{
    Name : "Nabin Bhandari",
    Address : "Ghorahi"
    },
    person2: {
        
    Name : "Salan Bhattarai",
    Address : " Candada"
    }
}

const {person1 : { Name : unknown , Address : unknownadd} , person2:{Address : cadd}} = objnew;
console.log(unknown);
console.log(unknownadd)
console.log(cadd)

//---------------------------------------------------------------
//Extract object data in function decleration 
var People={
    one: {
        Name : "Jonas",
        Address : "United State",
    },
    two:{
        Name : "kayal",
        Address :"New work",
    },
    three:{
        Name  : "Web dev simplified",
        Address : "Canada",
    },
}



function showdata({one:{Address :int}}){ //Here we have extract address from the  People object
console.log(int);
}

showdata(People);



