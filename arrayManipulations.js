function arrayManipulations(array) {
    let newArray = array
        .shift()
        .split(' ')
        .map(Number);

    for (let i = 0; i < array.length; i++) {
        let commands = array[i].split(' ');
        let action = commands[0];
        let num = Number(commands[1]);
        let index = Number(commands[2]);

        if (action === 'Add') {
            newArray.push(num);
        }
        if (action === 'Remove') {
            newArray = newArray.filter(x => x !== num);
        }
        if (action === 'RemoveAt') {
            newArray.splice(num, 1);
        }
        if (action === 'Insert') {
            newArray.splice(index, 0, num);
        }
    }
    console.log(newArray.join(' '));
}

arrayManipulations(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']);