function amazingNumbers(num) {
    let numAsStr = num.toString();
    let sum = 0;

    for (let i = 0; i < numAsStr.length; i++) {
        sum += Number(numAsStr[i]);
    }

    let sumAsStr = sum.toString();
    let isTrue = '';

    for (let j = 0; j < sumAsStr.length; j++) {

        if (sumAsStr[j] == '9') {
            isTrue = true;
        } else {
            isTrue = false;
        }
    }
    
    if (isTrue === true) {
        console.log(`${num} Amazing? True`);
    } else {
        console.log(`${num} Amazing? False`);
    }
}

amazingNumbers(1233);
amazingNumbers(999);