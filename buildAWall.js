function buildAWall(array) {
    let newArray = array.map(Number);
    let sum = 0;
    let workdays = newArray[0];

    let cubic = 195;
    let oneDay = 0;
    let resultArrayDays = [];


    for (let i = 0; i < 3; i++) {
    }
    for (let j = 1; j <= 30 - workdays; j++) {
        oneDay += cubic;
        resultArrayDays.push(cubic)
        sum = oneDay * 1900;
    }
    console.log(resultArrayDays.join(', '));
    console.log(`${sum} pesos`);
}

buildAWall(['21', '25', '28']);
buildAWall(['17']);