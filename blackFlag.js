function blackFlag(array) {
    let days = Number(array[0]);
    let plunderPerDay = Number(array[1]);
    let expectedPlunder = Number(array[2]);
    let currentPlunder = 0;

    for (let i = 1; i <= days; i++) {

        if (i % 3 === 0) {
            currentPlunder += plunderPerDay * 1.5;
        } else {
            currentPlunder += plunderPerDay
        }
        
        if (i % 5 === 0) {
            currentPlunder *= 0.7;
        }
    }

    if (currentPlunder >= expectedPlunder){
        console.log(`Ahoy! ${currentPlunder.toFixed(2)} plunder gained.`);
    } else {
        console.log(`Collected only ${(currentPlunder/expectedPlunder * 100).toFixed(2)}% of the plunder.`);
    }
}

blackFlag(["5", "40", "100"]);
blackFlag(["10", "20", "380"]);