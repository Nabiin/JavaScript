//how to use arrow function lexical this keyword
 
var obj ={
    Name : "Nabin Bhandari",
    Class : 13,
    total : function(){
    
            console.log(`Hello my name is ${this.Name} and i read in class ${this.Class}`);
       
    }
}

obj.total();


var obj1 ={
    Name1 : "Nabin Bhandari",
    Class1 : 13,
    total :  () => { 
        (function(){
            console.log(`Hello my name is ${this.Name1} and i read in class ${this.Class1}`);
        }());
    }
}

obj1.total();