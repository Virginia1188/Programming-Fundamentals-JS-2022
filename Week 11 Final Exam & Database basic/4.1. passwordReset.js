function solve(input) {
    let password = input.shift();
    // let password = '';
    let line = input.shift();

    while (line != 'Done') {
        let [command, ...arguments] = line.split(' ');

        switch (command) {
            case 'TakeOdd':
                let newPassword = '';
                for (let i = 0; i < password.length; i++) {
                    const char = password[i];
                    if (i % 2 == 1) {
                        newPassword += char;
                    }
                }
                password = newPassword;
                console.log(password);
                break;
            case 'Cut':
                let index = Number(arguments[0]);
                let length = Number(arguments[1]);
                let secondIndex = index + length;
                password = password.substring(0, index) + '' + password.substring(secondIndex);
                console.log(password);
                break;
            case 'Substitute':
                let subStr = arguments[0];
                let substitude = arguments[1];
                
                if (password.includes(subStr)) {
                    let regExp = new RegExp(subStr, 'g');
                    password = password.replace(regExp, substitude);
                    console.log(password);
                    break;
                }
                console.log('Nothing to replace!');
                break;
        }
        line = input.shift();
    }
    console.log(`Your password is: ${password}`);
}
solve(["howare",
"Cut 3 2",
"Substitute ! ***",
"Substitut ? .!.",
"Done"])
;