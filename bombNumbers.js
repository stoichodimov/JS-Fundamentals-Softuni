function bombNumbers(firstArray, secondArray) {
    let bombNum = secondArray[0];
    let bombPower = secondArray[1];
    let firstArrL = firstArray.length;
    let sum = 0;

    for (let i = 0; i < firstArrL; i++) {
        let currentNum = firstArray[i];

        if (currentNum === bombNum) {
            let bombIndex = firstArray.indexOf(currentNum);
            let startIndex = Math.max(bombIndex - bombPower, 0);
            firstArray.splice(bombIndex, bombPower);
            firstArray.splice(startIndex, bombPower + 1);
            i = startIndex - 1;
        }
    }

    for (let j = 0; j < firstArray.length; j++) {
        let currentLastNums = firstArray[j];
        sum += currentLastNums;
    }
    console.log(sum);
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);

// function bombNumbers(firstArray, secondArray) {
//     let bombNum = secondArray[0];
//     let bombPower = secondArray[1];
//     let sum = 0;

//     for (let i = 0; i < firstArray.length; i++) {
//         let currentNum = firstArray[i];

//         if (currentNum === bombNum) {
//             firstArray.splice((firstArray.indexOf(currentNum) - bombPower), ((bombPower * 2) + 1));
//         }
//     }

//     for (let j = 0; j < firstArray.length; j++) {
//         let currentLastNums = firstArray[j];
//         sum += currentLastNums;
//     }
//     console.log(sum);
// }

// bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
// bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
// bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
// bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);