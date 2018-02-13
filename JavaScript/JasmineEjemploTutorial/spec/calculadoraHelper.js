describe('calculatorSuite', function(){

	var calculator = new Calculator();

	 it('should add two numbers together', function(){
	 	expect(calculator.add(5,5).toEqual(10));
	 });
	 it('should substract two numbers', function(){
	 	expect(calculator.substract(10,5).toEqual(5));
	 });
	 it('should multiply two numbers together', function(){
	 	expect(calculator.multiply(5,5).toEqual(25));
	 });
	 it('should divide two numbers together', function(){
	 	expect(calculator.divide(15,5).toEqual(3));
	 });
});