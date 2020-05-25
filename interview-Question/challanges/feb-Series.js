function fibonacci(num){
    var a = 1, b = 0, temp;
  
    while (num >= 0){
      temp = a;
      a = a + b;
      b = temp;
      console.log(temp , a, b)
      num--;
    }
  
    return b;
  }

  console.log(fibonacci(14))