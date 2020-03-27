
var obj = new Promise((resolve,reject)=>{   //This is the 1st Promis we have created
  setTimeout(() => {                        //with settimeout we generated fake resolve responce 
    resolve([1,2,3,4,5])                    //here the first promis is resloved
  }, 1000);

})




var iget = (args) => {                   //this is the function   in which another Promise is created 
    return new Promise((resolve , reject)=>{   //from main .then method we called this funcion > Promis so we have to return this here
    setTimeout(args => {                         //here we again generated fake responce 
          var obj1 ={Food:"Mutton" , Cookman : "Shisher" };
         resolve(`${obj1.Cookman}`);           //here the second promis is success or resolved
    
    },1000, args);

  })
}




var lastget = args =>{                    //this is the function   in which another Promise is created 
return new Promise((resolve,reject)=>{        //from  .then method of iget() we called this funcion > Promis so we have to return this here
  setTimeout((args)=>{                             //here we again generated fake responce 
    var obj2 ={ Food : "Biryani"};
   resolve(`${args} : ${obj2.Food}`);               //here the 3rd promis is success or resolved
    },1000,args)
})
}
 





obj                           //this is the main function in which first promis happeen
.then((reso)=>{               //this is the method to show responce || resove 
  console.log(reso);          //This log show the responce from first promis
 return iget(reso[2]);        // [Nexted Promis] here the responce is passed as argument  //return keyword is used to handle the second Promis
})

.then((resoo)=>{           //the Promis is handled here
  console.log(resoo);      //the Promises returned from the iget function is display here . The responce from 2nd Promis
  return lastget(resoo);     //[Nexted Promis]here another function i.e lastget() is called , the lastget() has also promies so to handle this we have return anthor return keyword
})

.then((resooo)=>{           //the Promis from lastget() is handle here
  console.log(resooo);       //the resolve data is disply from this log . The responce from the third Promis is display
})



//When the data is reject instead of resolve then catch method is used tho handle that error
//As each Promies has diffent then method to handle the different Promices same ways there should be different 
//catch method to handle the error || reject events  but in here i have done nothing , gonna learn this is future

.catch(error=>{        
  console.log("error");
})




