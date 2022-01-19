function bitcoinMining(input) {
    let index = 0;
    let counter = 0;
    let day = 0;
    let money = 0;
    let bitcoin = 0;

    for (let i = 1; i <= input.length; i++) {
        let gold = input[index++];

        if (i % 3 === 0) {
            money += gold * 0.7 * 67.51;
        } else {
            money += gold * 67.51;
        }

        if (money >= 11949.16) {
            counter++;
            bitcoin += Math.floor(money / 11949.16);
            money -= Math.floor(money / 11949.16) * 11949.16;
        }
        if (counter === 1){
            day = i;
        }
    }
    console.log(`Bought bitcoins: ${bitcoin}`);
    if (bitcoin > 0) {
        console.log(`Day of the first purchased bitcoin: ${day}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`)
}

bitcoinMining([100, 200, 300]);