function arrayManipulator(firstArray, secondArray) {

    for (let i = 0; i < secondArray.length; i++) {
        let command = secondArray[i];
        let action = command.split(' ');

        if (action[0] === 'add') {
            let index = Number(action[1]);
            let element = Number(action[2]);
            firstArray.splice(index, 0, element);
        } else if (action[0] === 'addMany') {
            let index = Number(action[1]);
            action.splice(0, 2);
            let actionAsNum = action.map(Number);
            firstArray.splice(index, 0, ...actionAsNum);
        } else if (action[0] === 'contains') {
            let result = firstArray.indexOf(Number(action[1]));
            console.log(result);
        } else if (action[0] === 'remove') {
            let index = Number(action[1]);
            firstArray.splice(index, 1);
        } else if (action[0] === 'shift') {
            let positions = action[1];

            for (let j = 0; j < positions; j++) {
                let result = firstArray.shift();
                firstArray.push(result);
            }
        } else if (action[0] === 'sumPairs') {
            let result = [];

            if (firstArray.length % 2 === 1) {
                firstArray.push(0);
            }

            for (let i = 0; i < firstArray.length - 1; i += 2) {
                let sum = firstArray[i] + firstArray[i + 1];
                result.push(sum);
            }
            firstArray = result;
        } else if (action[0] === 'print') {
            console.log(`[ ${firstArray.join(', ')} ]`);
            return;
        }
    }
}

arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);
// arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);