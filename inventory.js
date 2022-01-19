function inventory(array) {
    let inventory = array[0].split(', ');

    for (let i = 1; i < array.length; i++) {
        let command = array[i];
        let action = command.split(' - ');

        if (action[0] === 'Collect') {
            if (!inventory.includes(action[1])) {
                inventory.push(action[1]);
            }
        } else if (action[0] === 'Drop') {
            if (inventory.includes(action[1])) {
                let result = [];
                result = inventory.filter(x => x !== action[1]);
                inventory = result;
            }
        } else if (action[0] === 'Renew') {
            if (inventory.includes(action[1])) {
                let result = [];
                result = inventory.filter(x => x !== action[1]);
                result.push(action[1]);
                inventory = result;
            }
        } else if (action[0] === 'Combine Items') {
            let equipmentAll = action[1].split(':');
            let equipment = equipmentAll[0];
            let upgrade = equipmentAll[1];
            if (inventory.includes(equipment)) {
                let index = inventory.indexOf(equipment)
                inventory.splice(index + 1, 0, `${upgrade}`);
            }
        } else if (action[0] === 'Craft!') {
            console.log(inventory.join(', '));
        }
    }
}

inventory(['Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!']);
inventory(['Iron, Sword', 'Drop - Bronze', 'Combine Items - Sword:Bow', 'Renew - Iron', 'Craft!']);