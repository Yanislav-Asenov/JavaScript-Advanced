let expect = require('chai').expect;
let isSymmetric = require('../check-for-symmetry').isSymmetric;


describe('check-for-symmetry', function () {
    
    it('with not symmetric array', function () {
        let expectedOutput = false;
        let input = [1, 2, 3];
        
        expect(isSymmetric(input)).to.be.equal(expectedOutput, 'Function did not return correct output when the input is not symmetric array');
    });

    it('with symmetric array', function () {
        let expectedOutput = true;
        let input = [1, 2, 3, 2, 1];
        
        expect(isSymmetric(input)).to.be.equal(expectedOutput, 'Function did not return correct output when the input is symmetric array');
    });

    it('with an empty array', function () {
        let expectedOutput = true;
        let input = [];
        
        expect(isSymmetric(input)).to.be.equal(expectedOutput, 'Function did not return correct output when the input is an empty array');
    });

    it('with symmetric array containing odd number of elements', function () {
        let expectedOutput = true;
        let input = [1, 1, 1, 1, 2, 1, 1, 1, 1];
        
        expect(isSymmetric(input)).to.be.equal(expectedOutput, 'Function did not return correct output when the input is symmetric array with odd number of elements');
    });

    it('with not symmetric array containing odd number of elements', function () {
        let expectedOutput = false;
        let input = [1, 1, 1, 3, 2, 1, 1, 1, 1];
        
        expect(isSymmetric(input)).to.be.equal(expectedOutput, 'Function did not return correct output when the input is not symmetric array with odd number of elements');
    });

    it('with symmetric array containing even number of elements', function () {
        let expectedOutput = true;
        let input = [1, 1, 1, 2, 2, 1, 1, 1];
        
        expect(isSymmetric(input)).to.be.equal(expectedOutput, 'Function did not return correct output when the input is symmetric array with even number of elements');
    });

    it('with not symmetric array containing even number of elements', function () {
        let expectedOutput = false;
        let input = [1, 1, 1, 2, 3, 1, 1, 1];
        
        expect(isSymmetric(input)).to.be.equal(expectedOutput, 'Function did not return correct output when the input is not symmetric array with even number of elements');
    });

    it('with a number', function () {
        let expectedOutput = false;
        let input = 5;
        
        expect(isSymmetric(input)).to.be.equal(expectedOutput, 'Function did not return correct output when the input is not an array');
    });

    it('with an array with length of 1', function () {
        let expectedOutput = true;
        let input = [1];
        
        expect(isSymmetric(input)).to.be.equal(expectedOutput, 'Function did not return correct output when the input is an array with length 1');
    });

    it('with string', function () {
        let expectedOutput = false;
        let input = 'test string';
        
        expect(isSymmetric(input)).to.be.equal(expectedOutput, 'Function did not return correct output when the input is string');
    });

    it('with symmetric array of strings', function () {
        let expectedOutput = true;
        let input = ['1', '2', '3', '2', '1'];
        
        expect(isSymmetric(input)).to.be.equal(expectedOutput, 'Function did not return correct output when the input is symmetric array of strings');
    });

    it('with not symmetric array of strings', function () {
        let expectedOutput = false;
        let input = ['1', '4', '3', '5', '1'];
        
        expect(isSymmetric(input)).to.be.equal(expectedOutput, 'Function did not return correct output when the input is not symmetric array of strings');
    });

    it('with undefined input', function () {
        let expectedOutput = false;
        let input = undefined;
        
        expect(isSymmetric(input)).to.be.equal(expectedOutput, 'Function did not return correct output when the input is undefined');
    });

    it('with mroe than 1 arguments as input', function () {
        let expectedOutput = false;
        let input = 1;
        let input1 = 2;
        let input2 = 3;

        expect(isSymmetric(input, input1, input2)).to.be.equal(expectedOutput, 'Function did not return correct output when the is more than 1 arguments');
    });

    it('with symmetric array of objects, strings and numbers', function () {
        let expectedOutput = true;
        let input = [10, '1', { a: 5 }, new Date(), { a: 5 }, '1', 10];

        expect(isSymmetric(input)).to.be.equal(expectedOutput, 'Function did not return correct output when the is symmetric array containing strings, numbers and objects');
    });

    it('with not symmetric array of objects, strings and numbers', function () {
        let expectedOutput = false;
        let input = [10, '1', { a: 10 }, new Date(), { x: 5 }, '1', 10];

        expect(isSymmetric(input)).to.be.equal(expectedOutput, 'Function did not return correct output when the is not symmetric array containing strings, numbers and objects');
    });
});
