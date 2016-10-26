let expect = require('chai').expect;
let sum = require('../sum-of-numbers').sum;

describe('sum-of-numbers', () => {
    
    it('with an array with 1 element', function () {
        let expectedOutput = 3;
        let input = [3];

        expect(sum(input)).to.be.equal(expectedOutput, 'Function did not return correct output when the input is an array with length of 1');
    });

    it('with an array with more than 4 elements', function () {
        let expectedOutput = 10;
        let input = [1, 2, 3, 4];

        expect(sum(input)).to.be.equal(expectedOutput, 'Function did not return correct output when the input is an array with more than 4 elements');
    });

    it('with an empty array', function () {
        let expectedOutput = 0;
        let input = [];

        expect(sum(input)).to.be.equal(expectedOutput, 'Function did not return correct output when the input is an empty array');
    });

    it('with an array full only with negative numbers', function () {
        let expectedOutput = -150;
        let input = [-50, -50, -50];

        expect(sum(input)).to.be.equal(expectedOutput, 'Function did not return correct output when the input is an array full of negative numbers');
    });

    it('with an array containing strings', function () {
        let expectedOutput = NaN;
        let input = [1, 2, 3, 'test string'];

        expect(sum(input)).to.be.NaN;
    });
    
});