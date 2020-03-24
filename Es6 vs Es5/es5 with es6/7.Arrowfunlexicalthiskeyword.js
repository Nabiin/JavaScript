//With the help of arrow function we can access one step up surrounding object 

var person = function(Name , Address){

    this.Name = Name;
    this.Address = Address;
}

person.prototype.details = function(val , Address){
    //this keyword word here from where it call


   /* 

    var test = function(){
        console.log(this.Name , this.Address);  //this keyword target the window object value  so it result is undefined
    };
    test();
    -------------------   or    ---------------------------------- 
    (function(){
        console.log(this.Name , this.Address); //this keyword target the window object value  so it result is undefined
       }());

    --------------------------  NOte ----------------------------
  These example are brand new function in which this keyword denotes the global object so it show error because Name and Address are not defined in global object

*/



       /* 
       ES5 process 
     (function(){
        console.log(this.Name , this.Address);  //this keyword target the called object because we had use bind method
       }.bind(this)());   //this bind method is used to do bind this object to another function
   
       --------------------   or -------------------------

          var test1 = function(){
        console.log(this.Name , this.Address);   //this keyword target the called object because we had use bind method
                 }.bind(this);                   //this bind method is used to do bind this object to another function
   
        test1();  
       --------------------------  NOte ----------------------------
       These are the brand new function but in these function we bind this object to this function so that our object can be access from these brand new functions
  
       */

     var test2 = () => console.log(this.Name , this.Address)
      test2();
      //This arrow function also create an function  but these function takes object one step up  , means these functions takes object from its surrounding
      

}


var obj1 = new person("Nabin" , "Ghorahi");
var obj2 = new person("SAlan" , "Canada");
var obj3 = new person("Dalan" , "Italy");

obj2.details()





