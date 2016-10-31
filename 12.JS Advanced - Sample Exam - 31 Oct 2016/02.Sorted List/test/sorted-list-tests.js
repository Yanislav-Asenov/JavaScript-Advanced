let expect = require('chai').expect;
let SortedList = require('../sorted-list').SortedList;

describe('Sorted List', () => {
    let myList = {};

    beforeEach(() => {
        myList = new SortedList();
    });
    
    it('should have all require properties and be initialized', function () {
        console.log(myList.add);
        expect(myList.constructor.prototype.hasOwnProperty('add')).to.equal(true, 'Object did not have own "add" property');
        expect(myList.constructor.prototype.hasOwnProperty('remove')).to.equal(true, 'Object did not have own "remove" property');
        expect(myList.constructor.prototype.hasOwnProperty('get')).to.equal(true, 'Object did not have own "get" property');
        expect(myList.constructor.prototype.hasOwnProperty('size')).to.equal(true, 'Object did not have own "size" property');
        expect(myList.size).to.equal(0, 'Object did not initialize collection');
    });

    it('should have working add function and keep the numbers sorted', function () {
        myList.add(5);
        myList.add(4);
        myList.add(3);
        expect(myList.get(0)).to.equal(3, 'Object did not sort the numbers after adding new ones');
    });
    
    it('should have working remove function and keep the numbers sorted', function () {
        myList.add(5);
        myList.add(3);
        myList.add(111);
        myList.remove(0);
        expect(myList.get(0)).to.equal(5, 'Object did not sort the numbers after removing some of them');
    });
    
    it('should throw an error when trying to get element if the collection is empty', function () {
        expect(() => myList.get(0)).to.throw(Error);
    });

    it('should throw an error when trying to get element with invalid index', function () {
        myList.add(1);
        myList.add(5);
        myList.add(5);
        expect(() => myList.get(-1)).to.throw(Error);
        expect(() => myList.get(3)).to.throw(Error);
    });

    it('should throw an error when trying to remove element when the collection is empty', function () {
        expect(() => myList.remove(0)).to.throw(Error);
    });

    it('should throw an error when trying to remove element with invalid index', function () {
        myList.add(1);
        myList.add(5);
        myList.add(5);
        expect(() => myList.remove(-1)).to.throw(Error);
        expect(() => myList.remove(3)).to.throw(Error);
    });

    it('should keep the collection sorted all the time', function () {
        myList.add(5);
        myList.add(6);
        myList.add(1);
        expect(myList.get(0)).to.equal(1, 'Object did not keep the collection sorted');
        expect(myList.size).to.equal(3, 'Object did not returned the correct size of the collection');
        myList.remove(0);
        myList.add(-5);
        myList.add(999);
        expect(myList.size).to.equal(4, 'Object did not returned the correct size of the collection');
        expect(myList.get(3)).to.equal(999, 'Object did not keep the collection sorted');
    });
});