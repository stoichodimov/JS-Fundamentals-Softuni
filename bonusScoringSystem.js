function bonusScoringSystem(array) {
    let students = Number(array[0]);
    let lectures = Number(array[1]);
    let initialBonus = Number(array[2]);
    let highestBonus = 0;
    let highestAttendancy = 0;

    for (let i = 3; i < students + 3; i++) {
        let studentAttendances = Number(array[i]);
        let maxBonusPoints = studentAttendances / lectures * (5 + initialBonus);

        if (maxBonusPoints > highestBonus) {
            highestBonus = maxBonusPoints;
            highestAttendancy = studentAttendances;
        }
    }
    console.log(`Max Bonus: ${Math.ceil(highestBonus)}.`);
    console.log(`The student has attended ${highestAttendancy} lectures.`);
}

bonusScoringSystem([
    '5', '25', '30',
    '12', '19', '24',
    '16', '20']);