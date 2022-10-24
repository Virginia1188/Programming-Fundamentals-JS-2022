function arrayModifier(input) {
    let toModify = input.shift();
    let arrayToModify = toModify.split(' ').map(Number);
    let currentLine = input.shift();

    while (currentLine != "end") {
        let currentCommand = currentLine.split(' ');
        let action = currentCommand[0];
        let indexOne = Number(currentCommand[1]);
        let indexTwo = Number(currentCommand[2]);

        switch (action) {
            case "swap":
                let tempEl = arrayToModify[indexOne];
                arrayToModify.splice(indexOne, 1, arrayToModify[indexTwo]);
                arrayToModify.splice(indexTwo, 1, tempEl);
                break;
            case "multiply":
                let multipliedEl = arrayToModify[indexOne] * arrayToModify[indexTwo];
                arrayToModify.splice(indexOne, 1, multipliedEl);
                break;
            case "decrease":
                arrayToModify = arrayToModify.map(x => x - 1);
                break;
        }

        currentLine = input.shift();
    }

    console.log(arrayToModify.join(', '));
}
arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
]
);