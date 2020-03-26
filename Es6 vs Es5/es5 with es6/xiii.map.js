/*
Maps are the brand new technique in es6 
Maps are same as object but maps allowed to add booleans number or any primitives in key values
whre objects only allow string in key value  so we can find maps are somehow better

In maps there are Some method to manupulate this type of maps object some of them are:-
1.obj.Set(key , values)
2.obj.get(key)
3.obj.size
4.obj.delete(key)
5.obj.clear();
6.has(key)
7.obj.entries();

*/



//creating new object
var Person = new Map();
//console.log(Person);





//putting value in object obj.set(key,value);
Person.set ('Name', 'What is your Name');
Person.set(1 , 'Nabin Bhandari');
Person.set(2 , 'sabin Bhattarai');
Person.set(4 , "Raaama Khanal");
//console.log(Person);






//obj.size method to see the size of map object this.size method is same as arr.length  in arrays
console.log(Person.size);







//Getting value
console.log(Person.get('Name'));
console.log(Person.get(1))







//For deleting the property of an Map object we can do obj.delet(key)
/*
Person.delete('Name');
Person.delete('Name');
this is also right but we have write twice the same line of code and havn't get an error so we have .has property to find and delete the value
*/

if(Person.has('Name')){
    Person.delete('Name');  //delete the property which key value is Name
}
if(Person.has(4)){
    Person.delete(4);  //delete the property which key value is 4
}

//To delte all the property once we can use obj.clear() method 
// >   Person.clear();









//WE can iterate all the property of this object by using forEach Metho
Person.forEach((value , key)  =>  console.log(`${key} -is- ${value}`));



//Some tips to know
//console.log(Person) its show all property of  the object
console.log(Person.entries())    //its show all the property of object in array from which we can destructuring its



//another way to loop throug object
for(let [value , key ] of Person.entries()){
    console.log(`  ${value}  ${key} `);
}

 
