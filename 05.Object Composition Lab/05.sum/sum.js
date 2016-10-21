function solve () {
    let resultObject = (() => {
        let domObject = {};
        
        return {
            init: (selector1, selector2, resultSelector) => {
                domObject.firstNum = $(selector1);
                domObject.secondNum = $(selector2);
                domObject.resultBox = $(resultSelector);
            },
            add: () => {
                domObject.firstNum = Number($('#num1').val());
                domObject.secondNum = Number($('#num2').val());
                let resultValue = domObject.firstNum + domObject.secondNum;
                domObject.resultBox.val(resultValue);
            },
            subtract: () => {
                domObject.firstNum = Number($('#num1').val());
                domObject.secondNum = Number($('#num2').val());
                let resultValue = domObject.firstNum - domObject.secondNum;
                domObject.resultBox.val(resultValue);
            }
        }
    })();

    return resultObject;
}


// console.log($('#num1'));
// // let num1 = $('#num1');
// // let num2 = $('#num2');
// // let res = $('#result');
// // num1.val(5);
// // num2.val(3);
// // obj.add();

// $(document).ready(() => {
//     let obj = solve();
//     obj.init("#num1","#num2",'#result');

//     $('#sumButton').on('click', () => {
//         obj.add();
//     });
//     $('#subtractButton').on('click', () => {
//         obj.subtract();
//     });
// });