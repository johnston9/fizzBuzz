 fizzBuzz = function(numOne) {
    
    if(typeof(numOne) == "number" && numOne % 5 === 0 && numOne % 3 === 0)
    {return "FizzBuzz"}
    else if(typeof(numOne) == "number" &&  numOne % 3 === 0)
    {return "Fizz"}
    else if(typeof(numOne) == "number" &&  numOne % 5 === 0)
    {return "Buzz"}
    else if (typeof(numOne) == "number" &&  numOne % 3 !== 0 &&  numOne % 5 !== 0)
    {return numOne} 
    else  {
    alert("Error")}
    
       
 
}