function arrayRotation(array, num) {

    for (let i = 1; i <= num; i++) {
        let firstNum = array[0];

        for (let j = 0; j < array.length - 1; j++) {
            array[j] = array[j + 1];
        }

        let lastNum = array.length - 1;
        array[lastNum] = firstNum;
    }
    console.log(array.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2);