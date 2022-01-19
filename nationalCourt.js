function nationalCourt(array) {
    let firstEmployee = Number(array[0]);
    let secondEmployee = Number(array[1]);
    let thirdEmployee = Number(array[2]);

    let peopleCount = Number(array[3]);
    let allEfficiency = firstEmployee + secondEmployee + thirdEmployee;
    let hour = 0;

    while (peopleCount > 0) {
        hour++;
        if (hour % 4 !== 0) {
            peopleCount -= allEfficiency;
        }
    }
    console.log(`Time needed: ${hour}h.`);
}

nationalCourt(['5', '6', '4', '20']);
nationalCourt(['1', '2', '3', '45']);
nationalCourt(['3', '2', '5', '40']);