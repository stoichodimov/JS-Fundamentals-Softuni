function muOnline(arrayStr) {
    let health = 100;
    let coins = 0;
    let chessCoins = 0;
    let str = arrayStr.split('|');
    let roomCounter = 0;

    for (let i = 0; i < str.length; i++) {
        let currentAction = str[i].split(' ')
        let item = currentAction[0];
        let points = Number(currentAction[1]);
        roomCounter++;

        if (item === 'potion') {
            if (health + points > 100) {
                points = 100 - health;
                health = 100;
            } else {
                health += points;
            }
            console.log(`You healed for ${points} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (item === 'chest') {
            coins += points;
            chessCoins = points;
            console.log(`You found ${chessCoins} bitcoins.`);
        } else {
            health -= points;
            if (health > 0) {
                console.log(`You slayed ${item}.`);
            } else {
                console.log(`You died! Killed by ${item}.`);
                console.log(`Best room: ${roomCounter}`)
                return;
            }
        }
    }
    console.log(`You've made it!`);
    console.log(`Bitcoins: ${coins}`);
    console.log(`Health: ${health}`);
}

muOnline('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000');