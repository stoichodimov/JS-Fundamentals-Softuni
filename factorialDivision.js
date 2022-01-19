function factorialDivision(firstNum, secondNum) {

    let resultFirstFactorial = 1;
    let resultSecondFactorial = 1;

    for (let i = 1; i <= firstNum; i++) {
        resultFirstFactorial *= i;
    }

    for (let j = 1; j <= secondNum; j++) {
        resultSecondFactorial *= j;
    }

    let result = resultFirstFactorial / resultSecondFactorial;
    console.log(result.toFixed(2));
}

factorialDivision(5, 2);
factorialDivision(6, 2);