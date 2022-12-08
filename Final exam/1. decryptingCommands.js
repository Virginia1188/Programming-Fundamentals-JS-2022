function solve(input) {
    let str = input.shift();
    let line = input.shift();

    while (line != 'Finish') {
        let [command, ...arguments] = line.split(' ');
        switch (command) {
            case 'Replace':
                let currentChar = arguments[0];
                let newChar = arguments[1];
                let regExp = new RegExp(currentChar, 'g');
                str = str.replace(regExp, newChar);
                console.log(str);
                break;
            case 'Cut':
                let startIndex = Number(arguments[0]);
                let endIndex = Number(arguments[1]);
                //check indexes for both 0 and lenght?
                if (startIndex >= 0 && startIndex < str.length && endIndex >= 0 && endIndex < str.length) {
                    str = str.substring(0, startIndex) + '' + str.substring(endIndex + 1);
                    console.log(str);
                    break;
                }
                console.log(`Invalid indices!`);
                break;
            case 'Make':
                let upperOrLower = arguments[0];
                if (upperOrLower == 'Upper') {
                    str = str.toUpperCase();
                    console.log(str);
                } else {
                    str = str.toLowerCase();
                    console.log(str);
                }
                break;
            case 'Check':
                let string = arguments[0];
                if (str.includes(string)) {
                    console.log(`Message contains ${string}`);
                } else {
                    console.log(`Message doesn't contain ${string}`);
                }

                break;
            case 'Sum':
                let indexStart = Number(arguments[0]);
                let indexEnd = Number(arguments[1]);
                if (indexStart >= 0 && indexStart < str.length && indexEnd >= 0 && indexEnd < str.length) {
                    let subStr = str.substring(indexStart, indexEnd +1); //add +1 to end index?
                    let sum = 0;
                    for (const char of subStr) {
                        let value = char.charCodeAt();
                        sum += value;
                    }
                    console.log(sum);
                } else {
                    console.log(`Invalid indices!`);
                }

                break;
        }

        line = input.shift();
    }
}
solve((["ILikeSoftUni",
"Replace I We",
"Make Upper",
"Check SoftUni",
"Sum 1 4",
"Cut 1 4",
"Finish"])


);