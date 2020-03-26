class Person{
    constructor(Name,mname , lname){
        this.Name = Name;
        this.lname =lname;
        this.mname = mname;
    }
    show(){
        console.log(`Your full name is ..   ${this.Name} ,${this.lname}, ${this.mname}`)
    }
}
class hobby extends Person{
    constructor(Name,mname , lname , game){
        super(Name,mname , lname);
        this.game =game;
    }
    showchild(){
        console.log(`Your full name is ${this.Name} ,${this.lname}, ${this.mname} , ${this.game}`)
    }
}
var Nabin = new Person("Nabin" , "Kumar" , "Bhandari");
console.log(Nabin);


var salan = new hobby("Salan", "raj" , "bhattarai","carrom");
console.log(salan);


Nabin.show();  //it can be access 
//--Nabin.showchild();  //it can't be access because it is showchild is the subclass method
salan.show();   //show() is the parent class method so as salan is inherite from parent so we can call this function
salan.showchild(); //it can be access as usual  
