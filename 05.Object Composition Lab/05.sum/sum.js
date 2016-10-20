function solve (inputArgs) {
    let resultObject = (() => {
        let domObject = {};
        domObject.resultBox = $('#result');
        
        return {
            // init: (selector1 = '#num1', selector2 = '#num2', resultSelector = '#result') => {
            //     domObject.firstNum = Number($(selector1).val());
            //     domObject.secondNum = Number($(selector2).val());
            //     domObject.resultBox = $(resultSelector);
            // },
            add: () => {
                domObject.firstNum = Number($('#num1').val());
                domObject.secondNum = Number($('#num2').val());
                let resultValue = domObject.firstNum + domObject.secondNum;
                return resultValue;
            },
            subtract: () => {
                domObject.firstNum = Number($('#num1').val());
                domObject.secondNum = Number($('#num2').val());
                let resultValue = domObject.firstNum - domObject.secondNum;
                return resultValue;
            }
        }
    })();

    return resultObject;
}

$(document).ready(() => {
    let obj = solve();
    $('#sumButton').click(() => {
        $('#result').val(obj.add());

    });

    $('#subtractButton').click(() => {
         $('#result').val(obj.subtract());
    });
});

