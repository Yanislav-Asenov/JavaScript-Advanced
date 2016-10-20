function solve (inputNumber) {
    let incrementNumber = (() => {
        let firstNumber = 0;
        let secondNumber = 1;

        return () => {
            let currentNumber = firstNumber + secondNumber;
            firstNumber = secondNumber;
            secondNumber = currentNumber;
            console.log(firstNumber);
        };
    })();

    for (let i = 1; i <= 15; i++) {
        incrementNumber();
    }
}

// solve(15);
