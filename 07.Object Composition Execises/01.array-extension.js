(function solve () {
    Array.prototype.last = last;
    Array.prototype.skip = skip;
    Array.prototype.take = take;
    Array.prototype.sum = sum;
    Array.prototype.average = average;

    function average () {
        return this.reduce((a, b) => a + b) / this.length;
    }

    function sum () {
        return this.reduce((a, b) => a + b);
    }

    function last () {
        return this[this.length - 1];
    }

    function skip (numberOfElementsToSkip) {
        let resultArr = [];

        for (let i = numberOfElementsToSkip; i < this.length; i++) {
            resultArr.push(this[i]);
        }

        return resultArr;
    }

    function take (numberOfElementsToTake) {
        let resultArr = [];

        for (let i = 0; i < this.length; i++) {
            if (i === numberOfElementsToTake) {
                break;
            }
            resultArr.push(this[i]);
        }

        return resultArr;
    }
})();

solve();

let testArr = [1, 2, 3];

console.log(testArr.average());
