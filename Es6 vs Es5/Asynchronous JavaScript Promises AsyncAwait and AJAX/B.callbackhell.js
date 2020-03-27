//This is a old way async js with call back

function getfood(){
setTimeout(()=>{
const arr = [1,2,3,4,5];
console.log(arr)


            setTimeout((id)=>{
            var obj1 ={Food:"Mutton" , Cookman : "Shisher" };
            console.log( `${id} : ${obj1.Food}` );
                       
            
                        setTimeout((Person)=>{
                        var obj2 ={ Food : "Biryani"};
                        console.log(`${Person} : ${obj2.Food}`)
                        },1000,obj1.Cookman)


            },1000, arr[2])

},1000)
}
+

getfood();

/*
> The above code seems like triangular shape

>This look like 3 chaied ajax call  to get an data from ther server

>imagin there is more and more chaining then we would have all of these call back here inside of one another
so that this is called call back helled in javascript and the tiangular shape of nexted call back is seems like hell
i.e we have callback inside of callback inside of call back then after sometime this is goon be unmanaged so its gets Messy 
 so to avoid this there is and promises in es6
 in promises we can avoid all of thes call back hell  and have a nicer and clear Syntax 
 */