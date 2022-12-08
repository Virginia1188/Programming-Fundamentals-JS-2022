function solve(input) {
    let list = input.shift();
    let persons = {};
    let regExpName = /[A-Za-z]/;
    let regExpNum = /[0-9]/;
    let currentLine = input.shift();

    while (currentLine != 'end of race') {
        let currentName = '';
        let sum = 0;

        for (const char of currentLine) {
            if (regExpName.test(char)) {
                currentName += char;

            } else if (regExpNum.test(char)) {
                sum += Number(char);
            }
        }
        if (!persons.hasOwnProperty(currentName) && list.includes(currentName)) {
            persons[currentName] = 0;
        }
        if (persons.hasOwnProperty(currentName)) {
            persons[currentName] += Number(sum);
        }

        currentLine = input.shift();
    }

    let sorted = Object.entries(persons).sort((a, b) => b[1] - a[1]);
    console.log(`1st place: ${sorted[0][0]}
2nd place: ${sorted[1][0]}
3rd place: ${sorted[2][0]}
`);
}
solve(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']
);
