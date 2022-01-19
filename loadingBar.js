function loadingBar(number) {
    let percent = '';
    let dots = '';

    if (number === 100) {
        console.log(`${number}% Complete!`);
        console.log('[%%%%%%%%%%]');
    } else {

        for (let i = 0; i < number / 10; i++) {
            percent += '%';
        }

        for (let i = 0; i < 10 - (number / 10); i++) {
            dots += '.';
        }

        console.log(`${number}% [${percent}${dots}]`);
        console.log('Still loading...');
    }
}

loadingBar(30);
// loadingBar(50);
// loadingBar(100);