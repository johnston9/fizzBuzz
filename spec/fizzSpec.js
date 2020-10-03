describe("fizzBuzz", function() {
    
    /*beforeEach(function() {
        fizzbuzz = new fizzBuzz();
    });*/
   
    describe("Fizz Tests", function() {
        it("should return 'Fizz'", function() {
            expect(fizzBuzz(3)).toBe("Fizz");
        })
        it("should return 'Fizz'", function() {
            expect(fizzBuzz(9)).toBe("Fizz");
        })
        it("should return 'Buzz'", function() {
            expect(fizzBuzz(5)).toBe("Buzz");
        })
        it("should return 'FizzBuzz'", function() {
            expect(fizzBuzz(30)).toBe("FizzBuzz");
        })
        it("should return '8'", function() {
            expect(fizzBuzz(8)).toBe(8);
        })
        it ("should return 'Error", function() {
            spyOn(window, "alert")
            fizzBuzz("dog")
            expect(window.alert).toHaveBeenCalledWith("Error");
        })
    })
})