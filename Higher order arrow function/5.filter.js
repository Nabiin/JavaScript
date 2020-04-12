/* Filter() is used to filter the value from arrays 
the filteration process is done by the returning value
if the value is true and its return true then only the value will be place in new arrays

*/
const arr = [1,2,3,4,5]
const ans = arr.filter(arr => arr%3 == 0); //here 3 is divisible by 3 and remender will be 0 so only this gives true result and add in array
console.log(ans) //3
const another = arr.filter(arr => arr%2==0); //here 2 and 4 are divisable by 2 so the gives true and placed in new array called 'another ' in this line
console.log(another)
