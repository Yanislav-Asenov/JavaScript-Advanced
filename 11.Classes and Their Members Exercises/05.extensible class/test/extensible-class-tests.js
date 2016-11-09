let expect = require('chai').expect;
let result = require('../extensible-class');

let template = {
    extensionData: 5,
    extensionMethod: function (value) {
        return value + 1;
    }
};

describe('extensible class', () => {
    it('should work', () => {
        let testObj = new result();
        expect(testObj.id).to.equal(0, "Instance ID wasn't assigned");
        testObj.extend(template);
        expect(testObj.hasOwnProperty('extensionData')).to.equal(true, "Instance didn't copy the properties correctly. 1 ");
        expect(testObj.extensionData).to.equal(5, "Copied property doesn't have correct value. 2");
        expect(Object.getPrototypeOf(testObj).hasOwnProperty('extensionMethod')).to.equal(true, "Prototype didn't copy the properties correctly. 3");
        expect(testObj.extensionMethod(1)).to.equal(2, "Copied method doesn't operate correctly. 4");  
    });
});