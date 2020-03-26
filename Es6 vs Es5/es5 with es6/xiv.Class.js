/*In es6 we use class for inheritance 
in class there is constructor function for parameters
and other many methods that can be inherite
but static method cann't be inherite 
*/


class Person{
   constructor(Name , Address , Rollno){
       this.Name = Name;
       this.Address =Address;
       this.Rollno =Rollno;
   }
   show(){    //This method  can be inherite
 console.log(`Hello there, MY name is ${this.Name} and i lived in ${this.Address} and last my roll number is ${this.Rollno}`)
   }
   static showme(){   //since there is static keyword before showme() so that it can't be inherite
       console.log("Hello bro i am static");
   }
}

var one = new Person("Nabin Bhandari" , "Ghorahi" , 56);  
var two = new Person("Bibhu KIju" , "katuni" , 41);

console.log(one)  //to show the one object
console.log(two)  //to show the two object

//to call method we use objects.metho();
one.show();
two.show();



/*we cann't call the static method because static method cann't inherite
one.showme();
two.showme();
*/

//Onle static function can be called by Class name.method();
Person.showme();  //here person is class and shome() is static method 
//one.showme();
//two.showme();
//we cann't do object.showme() because showme is static method so this method can't be inherite