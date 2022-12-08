function solve(input) {
    let msg = input.shift();
    let currentLine = input.shift();

    while (currentLine != 'Decode') {
        let [command, commandTwo, commandThree] = currentLine.split('|');

        switch (command) {
            case 'Move':
                let numOfLetters = Number(commandTwo);
                let removed = msg.substring(0, numOfLetters);
                msg = msg.replace(removed, '');
                msg += removed;
                break;
            case 'Insert':
                let index = Number(commandTwo);
                let toAdd = commandThree;
                msg = msg.substring(0, index) + toAdd + msg.substring(index);

                break;
            case 'ChangeAll':
                let subStr = commandTwo;
                let replacement = commandThree;
                for (const char of msg) {
                    if (char === subStr) {
                        msg = msg.replace(char, replacement);
                    }
                }

                break;
        }
        currentLine = input.shift();
    }
    console.log(`The decrypted message is: ${msg}`);
}
solve([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
]);