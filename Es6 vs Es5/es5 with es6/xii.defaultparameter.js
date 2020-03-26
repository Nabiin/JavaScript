function fun(Name, mname , lname , address ="Bhaktapur" ){ //here we assign bhaktapur as the default parameter
    this.Name = Name;
    this.mname =mname;
    this.lname = lname;
    this.address =address;
}

var Person1 = new fun("Nabin" , "Kumar" , "Bhandari" , "ambapur"); //All the values are given
console.log(Person1);


var Person2 = new fun("Nabina" , "Kumari" , "khusu");
console.log(Person2);


/*In person one the in address ambpur is passed so its replace the default parameter 
but in person two there is no address so default parameter is used to assign value as 
itself denote default parameter*/