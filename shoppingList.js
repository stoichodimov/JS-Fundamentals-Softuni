function shoppingList(array) {
    let products = array[0].split('!');
    let exit = array[array.length - 1];

    for (let i = 1; i < array.length; i++) {
        let command = array[i];
        let action = command.split(' ');

        if (action[0] === 'Urgent') { //add at the begining if does not exist
            if (!products.includes(action[1])) {
                products.unshift(action[1]);
            }
        } else if (action[0] === 'Unnecessary') { //remove if exists
            if (products.includes(action[1])) {
                let result = [];
                result = products.filter(x => x !== action[1]);
                products = result;
            }
        } else if (action[0] === 'Correct') { //change if first exists
            if (products.includes(action[1])) {
                let index = products.indexOf(action[1]);
                products.splice(index, 1, action[2]); //action[2]???
            }
        } else if (action[0] === 'Rearrange') { //add at the end from current position if exists
            if (products.includes(action[1])) {
                let result = [];
                result = products.filter(x => x !== action[1]);
                result.push(action[1]);
                products = result;
            }
        } else if (exit === 'Go Shopping!') {
            console.log(products.join(', '));
        }
    }
}

shoppingList(["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk", "Urgent Tomatoes",
    "Go Shopping!"]);
shoppingList(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt", "Unnecessary Grapes", "Correct Pepper Onion", "Rearrange Grapes", "Correct Tomatoes Potatoes",
    "Go Shopping!"]);