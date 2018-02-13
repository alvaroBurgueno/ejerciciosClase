// https://jasmine.github.io/2.0/introduction.html#section-Spies:_%3Ccode%3Eand.throwError%3C/code%3E

describe("Functional module", function() {

    it("calculates Fibonacci iteratively", function() {
        expect(fibonacciIterativo(10)).toEqual(34);

    });

    it("calculates Fibonacci recursively", function() {
        expect(fibonacciRecursivo(10)).toEqual(34);
            
    });

});