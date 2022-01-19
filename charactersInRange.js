function charactersInRange(firstCh, secondCh) {
    let min = firstCh.charCodeAt(0);
    let max = secondCh.charCodeAt(0);

    if (min > max) {
        min = secondCh.charCodeAt(0);
        max = firstCh.charCodeAt(0);
    }

    let result = '';

    for (let i = min + 1; i < max; i++) {
        let currentCh = String.fromCharCode(i);
        result += currentCh + ' ';
    }
    return result;
}

let result = charactersInRange('a', 'd');
console.log(result);