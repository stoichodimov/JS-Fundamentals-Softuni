// function fuelMoney(distance, passengers, price) {
//     let total = (((passengers * 0.1) + 7) * distance / 100) * price;

//     console.log(`Needed money for that trip is ${total} lv`);
// }

// fuelMoney(260, 9, 2.49);

function fuelMoney(distance, passengers, price) {
    let fuel = distance / 100 * 7;
    fuel += passengers * 0.1;
    let total = fuel * price;

    console.log(`Needed money for that trip is ${total}lv.`);
}

fuelMoney(260, 9, 2.49);