# Higher Order arrays method
---
There are Follow types of array method

1. fill()
1. map()
1. short()
1. reduce()
1. filter()
1. find()

---
 
 ## fill()

 Fill() function works on original arrays,
 it is used to fill the array with similar data type provided as we provided 'val' in the below example
 ```javascript
> new array method is used to create 10 empty space of an array 

        let arr = new Array(10); 
        console.log(arr)

>in arr there will be 10 empty space

    arr.fill('val')
    console.log(arr)

```

---
## Map()

Map() is used to manage or modify data on the array . We can manupulate , change  each and every data on the array by this method
```javascript
let arr= ['a',2,3,4,5];
arr.map((one , two , theree) =>console.log(one , two , theree));

let anotherarr= arr.map(data=> data+'a')
console.log(anotherarr)
```

---
## Reduce()

Reduce  is used reduce the arrays by different arithmetic calculation



    ```javascript
    let arr = [1,2,3,4,5]
    let ans = arr.reduce((a,b)=> a+b); //it will just  add all the arrays
    let ans1 = arr.reduce((a,b)=> a+b , 15); //it will just add the value of arrays  starting from 15
    console.log(ans) //15 
    console.log(ans1) //30
     ```

---

## find()

find() method is used to find the the specific item from the array 

```javascript
let arr = [1,2,3,4,5];

console.log(arr.find(arr => arr===3)) // 3 
let ans = arr.find(args => args === 5);
console.log(ans)  //5
```

---
## Short()
short is used to short the array item in ascending or descending order


```javascript

const arr = [2,4,1,3,7,9,8];

console.log(arr.sort()) //it short the  data iteam automatically in ascending order

console.log(arr.sort((a,b)=>a-b))    //it also short the data iteam in ascending order

console.log(arr.sort((a,b)=>b-a))   //it will short the array in descending order
```
---

## Filter()
Filter() is used to filter the value from arrays 
the filteration process is done by the returning value
if the value is true and its return true then only the value will be place in new arrays

```javascript

const arr = [1,2,3,4,5]

const ans = arr.filter(arr => arr%3 == 0); 
//here 3 is divisible by 3 and remender will be 0 so only this gives true result and add in array


console.log(ans) //3


const another = arr.filter(arr => arr%2==0); 
//here 2 and 4 are divisable by 2 so the gives true and placed in new array called 'another ' in this line

console.log(another) //2 ,4
```