function treasureHunt(array) {
    let loot = array.shift().split('|');
    let exit = array[array.length - 1];
    let credit = 0;
    let counter = 0;
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        let line = array[i].split(' ');
        let action = line[0];
        let times = Number(line[1]);

        if (action === 'Loot') {
            for (let j = 1; j < line.length; j++) {
                if (!loot.includes(line[j])) {
                    loot.unshift(line[j]);
                }
            }
        } else if (action === 'Drop') {
            if (times >= 0 && times < loot.length) {
                let result = [];
                let index = times;
                result = loot.splice(index, 1);
                loot.push(result);
            }
        } else if (action === 'Steal') {
            if (times >= 0 && times < loot.length) {
                newArray = loot.splice(0, loot.length - 3);
                for (let k = 0; k < newArray.length; k++) {
                    let lootL = newArray[k].length;
                    credit += lootL;
                    counter++;
                }
            }
        } else if (exit === 'Yohoho!') {
            console.log(loot.join(', '));
        }
    }

    let averageGain = credit / counter;

    if (newArray.length > 0) {
        console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`);
    } else {
        console.log('Failed treasure hunt.');
    }
}

treasureHunt(["Gold|Silver|Bronze|Medallion|Cup", "Loot Wood Gold Coins", "Loot Silver Pistol", "Drop 3", "Steal 3", "Yohoho!"]);
treasureHunt(["Diamonds|Silver|Shotgun|Gold", "Loot Silver Medals Coal", "Drop -1", "Drop 1", "Steal 6", "Yohoho!"]);