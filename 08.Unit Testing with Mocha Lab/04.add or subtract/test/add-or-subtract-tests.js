let expect = require('chai').expect;
let createCalculator = require('../add-or-subtract').createCalculator;


describe('add-or-subtract', function () {
    
    it('should return object containing add, subtract and get as properties', function () {
        let resultObject = createCalculator();
        let expectedGetProperty = 'function';

        expect(typeof resultObject.get).to.be.equal(expectedGetProperty, 'Function did not return an object with property get');
    });
    
});
