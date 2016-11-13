let expect = require('chai').expect;
let createList = require('../list.js').createList;

describe('List object', () => {
    let myList = {};
    beforeEach(() => {
        myList = createList();
    });

    describe('Add function', () => {
        it('should add item to the end of the list', function () {
            myList.add(5);
            expect(myList.toString()).to.equal('5', 'Add function did not add item to the end of the list');
        });
        
        it('should add items to the end of the list', function () {
            myList.add(5);
            myList.add('Pesho');
            myList.add({ x: 5, x: 6 });
            expect(myList.toString()).to.equal('5, Pesho, [object Object]', 'Add function did not add item to the end of the list');
        });
    });

    describe('Shift left function', () => {
        it('should shift all elements to the left', function () {
            myList.add(5);
            myList.add(7);
            myList.add(10);
            myList.shiftLeft();
            expect(myList.toString()).to.equal('7, 10, 5', 'ShiftLeft function did not rotate the array correctly'); 
        });
    });
});
