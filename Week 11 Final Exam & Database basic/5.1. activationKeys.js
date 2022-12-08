function solve(input) {
    let rawKey = input.shift();
    let currentLine = input.shift();

    while (currentLine != "Generate") {
        let commandArr = currentLine.split('>>>');
        let command = commandArr[0];

        switch (command) {
            case 'Contains':
                let subStr = commandArr[1];
                if (rawKey.includes(subStr)) {
                    console.log(`${rawKey} contains ${subStr}`);
                } else {
                    console.log(`Substring not found!`);
                }
                break;
            case 'Flip':
                let firstIndex = Number(commandArr[2]);
                let secondIndex = Number(commandArr[3]);
                let upperOrLower = commandArr[1];
                let strFlip = rawKey.substring(firstIndex, secondIndex);
                if (upperOrLower === 'Upper') {
                    let toUpper = strFlip.toUpperCase();
                    rawKey = rawKey.replace(strFlip, toUpper);
                    console.log(rawKey);
                } else {
                    let toLower = strFlip.toLowerCase();
                    rawKey = rawKey.replace(strFlip, toLower);
                    console.log(rawKey);
                }
                break;
            case 'Slice':
                let indexOne = Number(commandArr[1]);
                let indexTwo = Number(commandArr[2]);
                let toRemove = rawKey.substring(indexOne, indexTwo);
                rawKey = rawKey.replace(toRemove, '');
                console.log(rawKey);
                break;
        }

        currentLine = input.shift();
    }
    console.log(`Your activation key is: ${rawKey}`);
}
solve((["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"])
);