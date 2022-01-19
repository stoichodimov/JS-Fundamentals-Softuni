function addAndSubtract(firstNum, secondNum, thirdNum) {
    function sum(firstNum, secondNum){
        let result = firstNum + secondNum;
        return result;
    }

    function subtract(firstNum, secondNum){
        let result = firstNum - secondNum;
        return result;
    }

    let numberSum = sum(firstNum, secondNum);
    let result = subtract(numberSum, thirdNum);
    return result;
}

let result = addAndSubtract(23, 6, 10);
console.log(result);