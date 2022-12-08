function solve(input) {
    let msg = input.shift();
    let line = input.shift();

    while (line != 'Reveal') {
        let [command, ...arguments] = line.split(':|:');
        switch (command) {
            case 'InsertSpace':
                let index = Number(arguments[0]);
                msg = msg.substring(0, index) + ' ' + msg.substring(index);
                console.log(msg);
                break;
            case 'Reverse':
                let subStr = arguments[0];
                if (msg.includes(subStr)) {
                    let reversed = subStr.split('').reverse().join('');
                    msg = msg.replace(subStr, '') + reversed;
                    console.log(msg);
                } else {
                    console.log(`error`);
                }
                break;
            case 'ChangeAll':
                let subString = arguments[0];
                let replacement = arguments[1];
                let regExp = new RegExp(subString, 'g');
                msg = msg.replace(regExp, replacement)
                console.log(msg);

                break;
        }

        line = input.shift();
    }
    console.log(`You have a new text message: ${msg}`);
}
solve([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]);