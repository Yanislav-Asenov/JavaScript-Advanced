function solve (inputArray) {
    let numbers = (function () {
        return {
            getMaxNumber: (nums) => {
                nums = nums.map(Number);
                return Math.max.apply(null, nums);
            }
        };
    })();

    console.log(numbers.getMaxNumber(inputNumbers));
}

// solve([1, 44, 123, 33]);
// solve([10, 20, 5]);
// solve([10, 20, 5]);