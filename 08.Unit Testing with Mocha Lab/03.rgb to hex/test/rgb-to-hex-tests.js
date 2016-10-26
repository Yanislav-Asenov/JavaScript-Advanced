let expect = require('chai').expect;
let rgbToHexColor = require('../rgb-to-hex.js').rgbToHexColor;


describe('rgb-to-hex', function () {
    
    it('should return #969696 when the input values are red: 150, green: `150`, black: 150', function () {
        let redColorValue = 150;
        let greenColorValue = 150;
        let blackColorValue = 150;
        let expectedOutput = '#969696';

        expect(rgbToHexColor(redColorValue, greenColorValue, blackColorValue)).to.be.equal(expectedOutput, 
                'Function did not return correct output when the input is red color value :150, green color value: 150, black color value: 150');
    });

    it('should return #000000 when the input values are red: 0, green: 0, black: 0', function () {
        let redColorValue = 0;
        let greenColorValue = 0;
        let blackColorValue = 0;
        let expectedOutput = '#000000';

        expect(rgbToHexColor(redColorValue, greenColorValue, blackColorValue)).to.be.equal(expectedOutput, 
                'Function did not return correct output when the input is red color value: 0, green color value: 0, black color value: 0');
    });

    it('should return #FFFFFF when the input values are red: 255, green: 255, black: 255', function () {
        let redColorValue = 255;
        let greenColorValue = 255;
        let blackColorValue = 255;
        let expectedOutput = '#FFFFFF';

        expect(rgbToHexColor(redColorValue, greenColorValue, blackColorValue)).to.be.equal(expectedOutput, 
                'Function did not return correct output when the input is red color value: 255, green color value: 255, black color value: 255');
    });

    it('should return undefined when the input values are red: -1, green: 255, black: 255', function () {
        let redColorValue = -1;
        let greenColorValue = 255;
        let blackColorValue = 255;
        let expectedOutput = undefined;

        expect(rgbToHexColor(redColorValue, greenColorValue, blackColorValue)).to.be.equal(expectedOutput, 
                'Function did not return correct output when the input is red color value: -1, green color value: 255, black color value: 255');
    });

    it('should return undefined when the input values are red: 256, green: 100, black: 255', function () {
        let redColorValue = 256;
        let greenColorValue = 100;
        let blackColorValue = 255;
        let expectedOutput = undefined;

        expect(rgbToHexColor(redColorValue, greenColorValue, blackColorValue)).to.be.equal(expectedOutput, 
                'Function did not return correct output when the input is red color value: 256, green color value: 100, black color value: 255');
    });

    it('should return undefined when the input values are red: 222, green: 333, black: 255', function () {
        let redColorValue = 222;
        let greenColorValue = 333;
        let blackColorValue = 255;
        let expectedOutput = undefined;

        expect(rgbToHexColor(redColorValue, greenColorValue, blackColorValue)).to.be.equal(expectedOutput, 
                'Function did not return correct output when the input is red color value: 222, green color value: 333, black color value: 255');
    });

    it('should return undefined when the input values are red: 222, green: -150, black: 255', function () {
        let redColorValue = 222;
        let greenColorValue = -150;
        let blackColorValue = 255;
        let expectedOutput = undefined;

        expect(rgbToHexColor(redColorValue, greenColorValue, blackColorValue)).to.be.equal(expectedOutput, 
                'Function did not return correct output when the input is red color value: 222, green color value: -150, black color value: 255');
    });

    it('should return undefined when the input values are red: 222, green: 35, black: 900', function () {
        let redColorValue = 222;
        let greenColorValue = 35;
        let blackColorValue = 900;
        let expectedOutput = undefined;

        expect(rgbToHexColor(redColorValue, greenColorValue, blackColorValue)).to.be.equal(expectedOutput, 
                'Function did not return correct output when the input is red color value: 222, green color value: 35, black color value: 900');
    });

    it('should return undefined when the input values are red: 222, green: 35, black: -1', function () {
        let redColorValue = 222;
        let greenColorValue = 35;
        let blackColorValue = -1;
        let expectedOutput = undefined;

        expect(rgbToHexColor(redColorValue, greenColorValue, blackColorValue)).to.be.equal(expectedOutput, 
                'Function did not return correct output when the input is red color value: 222, green color value: 35, black color value: -1');
    });

    it('should return undefined when the input values are red: object, green: 35, black: 1', function () {
        let redColorValue = { x: 2500 };
        let greenColorValue = 1;
        let blackColorValue = 1;
        let expectedOutput = undefined;

        expect(rgbToHexColor(redColorValue, greenColorValue, blackColorValue)).to.be.equal(expectedOutput, 
                'Function did not return correct output when the input is red color value: { x: 2500 }, green color value: 1, black color value: 1');
    });

    it('should return undefined when the input values are red: test string, green: 35, black: 1', function () {
        let redColorValue = 'test string';
        let greenColorValue = 1;
        let blackColorValue = 1;
        let expectedOutput = undefined;

        expect(rgbToHexColor(redColorValue, greenColorValue, blackColorValue)).to.be.equal(expectedOutput, 
                'Function did not return correct output when the input is red color value: test string, green color value: 1, black color value: 1');
    });

    it('should return undefined when the input values less than required', function () {
        let redColorValue = 'test string';
        let greenColorValue = 1;
        let blackColorValue = 1;
        let expectedOutput = undefined;

        expect(rgbToHexColor(redColorValue)).to.be.equal(expectedOutput, 
                'Function did not return correct output when the input values are less than required');
    });
    
});
