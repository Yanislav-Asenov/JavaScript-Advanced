function solve (inputArray) {
    
    let inputNumber = (function (){
        return {
            maxNumber: (numbers) => Math.max.apply(null, numbers)
        };
    })();

    return inputNumber.maxNumber(inputArray);
}

// solve([1, 44, 123, 33]);
// solve([10, 20, 5]);
// solve([10, 20, 5]);