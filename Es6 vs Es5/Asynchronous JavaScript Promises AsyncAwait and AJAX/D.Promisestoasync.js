var obj = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({
            Name : "Nabin Bhandari",
            Class : 14,
            Address : "Ghorahi Dang",
        })
    },1000)
})



var obj1= args1 =>{
    return new Promise((resolve ,reject)=>{
         setTimeout(arg =>{
            arg.Contact = 9812870225;
            resolve(`Contact is added`);
         },1000,args1)

    })
}



var obj2 = ({Name , Contact}) =>{

    return new Promise((resolve , reject)=>{
        setTimeout((User,contact)=>{
            var c  =  `Hello my name is ${User} and My contact number is ${contact}`;
            resolve(c); 
        },1000,Name , Contact)
    })
}


async function fun(){

    var a = await obj;    //when an responce is resolve is pending it wait for that responce using await keywoerd when responce is resolve then it store in the variable a
    console.log(a);


    var b = await obj1(a);   //same a above a responce is pending , when response is resolve the it store in vairable b
    console.log(b);
   


    var c = await obj2(a);  
    console.log(c);
    console.log(a);
    console.log("Now we have going to add description Property")
    a.desc = c;
    console.log(a);



    //this is the function if we want to return somthin from here we simply use return keyword as usual 
    return `Hello this is return string from async function fun()`
}


 // fun();  //if there is no return keyword from async function  fun() , we simply call it by fun();
 //but there is something returning from that fun() so we have to use then method to access that return value
 fun().then(val=>{
     console.log(val)
 })


//IN this code wehaven't learn how to catch error we will learn it later