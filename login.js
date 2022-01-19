function login(input) {
    let index = 0;
    let pass = input[index++];
    let passSplit = pass.split('');
    let reversePass = passSplit.reverse();
    let finalPass = reversePass.join('');
    let counter = 1;

    while (true) {
        let command = input[index++];

        if (counter >= 4) {
            console.log(`User ${pass} blocked!`);
            break;
        }

        if (command === finalPass) {
            console.log(`User ${pass} logged in.`);
            break;
        } else {
            console.log('Incorrect password. Try again.');
        } 
        counter++;
    }
}

login(['Acer', 'login', 'go', 'let me in', 'recA']);
// login(['momo','omom']);
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);