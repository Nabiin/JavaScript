const arr = [2,4,1,3,7,9,8];

console.log(arr.sort()) //it short the  data iteam automatically in ascending order
console.log(arr.sort((a,b)=>a-b))    //it also short the data iteam in ascending order

console.log(arr.sort((a,b)=>b-a))   //it will short the array in descending order

