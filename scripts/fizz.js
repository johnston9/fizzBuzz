function fizzBuzz(numOne) {
    if (typeof(numOne) !== "number") {
    alert("Error")}
    else if(numOne % 5 === 0 && numOne % 3 === 0)
    {return "FizzBuzz"}
    else if(numOne % 3 === 0)
    {return "Fizz"}
    else if(numOne % 5 === 0)
    {return "Buzz"}
 else {
    return numOne}   
}