let expect = require('chai').expect;
let isOddOrEven = require('../even-or-odd').isOddOrEven;


describe('even-or-odd.js tests', function () {
    
    it('should return odd when the input is string with 3 characters', function () {
        let expectedOutput = 'odd';
        let input = 'abc';
        expect(isOddOrEven(input)).to.be.equal(expectedOutput, 'Function did not return correct output when the input is a string with 3 characters');
    });

    
    it('should return even when the input is a string with 4 characters', function () {
        let expectedOutput = 'even';
        let input = 'abcd';
        expect(isOddOrEven(input)).to.be.equal(expectedOutput, 'Function did not return correct output when the input is a string with 4 characters');     
    });

    it('should return undefined when the input is an object', function () {
        let expectedOutput = undefined;
        let input = { yani: 'jivotnoto' };
        expect(isOddOrEven(input)).to.be.equal(expectedOutput, 'Function did not return correct output when the input is an object');     
    });

    it('should return undefined when the input is a number', function () {
        let expectedOutput = undefined;
        let input = 5;
        expect(isOddOrEven(input)).to.be.equal(expectedOutput, 'Function did not return correct output when the input is a number');     
    });

    it('should return undefined when the input is an array', function () {
        let expectedOutput = undefined;
        let input = [1, 2, '123'];
        expect(isOddOrEven(input)).to.be.equal(expectedOutput, 'Function did not return correct output when the input is an array');     
    });
    
    it('should return undefined when the input is function', function () {
        let expectedOutput = undefined;
        let input = () => 'test';
        expect(isOddOrEven(input)).to.be.equal(expectedOutput, 'Function did not return correct output when the input is function');     
    });

    it('should return undefined when the arguments of the function are 0', function () {
        let expectedOutput = undefined;
        expect(isOddOrEven()).to.be.equal(expectedOutput, 'Function did not return correct output when there are no input arguments');     
    });

    it('should return undefined when the input is undefined', function () {
        let expectedOutput = undefined;
        let input = undefined;
        expect(isOddOrEven(input)).to.be.equal(expectedOutput, 'Function did not return correct output when the input is undefiend');     
    });

    it('should return correct output for more than one arguments passed to the function', function () {
        let input = 'ab';
        let input2 = 'abc';
        expect(isOddOrEven(input, input2)).to.be.equal('even', 'Function did not return correct output when more than 1 input arguments are passed to the function');     
        expect(isOddOrEven(input2, input)).to.be.equal('odd', 'Function did not return correct output when more than 1 input arguments are passed to the function');
    });
});
