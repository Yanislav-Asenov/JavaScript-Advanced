function solve (inputNumber) {
    let resultArray = [];

    let addFibonacciNumber = (() => {
        let firstNumber = 0;
        let secondNumber = 1;

        return () => {
            let currentNumber = firstNumber + secondNumber;
            firstNumber = secondNumber;
            secondNumber = currentNumber;
            resultArray.push(firstNumber);
        };
    })();

    for (let i = 1; i <= inputNumber; i++) {
       addFibonacciNumber();
    }
    
    return resultArray;
}
