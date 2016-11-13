let expect = require('chai').expect;
let createList = require('../list.js').createList;

describe('List object', () => {
    let myList = {};
    beforeEach(() => {
        myList = createList();
    });

    // TODO: refactor this shit
    it('should add item to the end of the list', function () {
        myList.add(5);
        myList.add(6);
        expect(myList.toString()).to.equal('5, 6');
        myList.swap(0, 1);
        expect(myList.toString()).to.equal('6, 5');
        myList.shiftLeft();
        expect(myList.toString()).to.equal('5, 6');
        myList.add({ x: 5, y: 5});
        myList.shiftRight();
        expect(myList.swap(2.5, 0)).to.equal(false);
        expect(myList.swap(2, 2)).to.equal(false);
        expect(myList.swap(0, 3)).to.equal(false);
        expect(myList.toString()).to.equal('[object Object], 5, 6');
        myList.add(7);
        expect(myList.swap(3, 0)).to.equal(true);
    });
});
