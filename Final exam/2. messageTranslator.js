function solve(input) {
    let regExp = /!(?<command>[A-Z][a-z]{2,})!:\[(?<str>[A-Za-z]{8,})]/g;
    let numOfStr = Number(input.shift());
    let count = 0;
    let currentStr = input.shift();
    while (count < numOfStr) {
        let match = regExp.exec(currentStr);
        if (match == null) {
            console.log(`The message is invalid`);
            currentStr = input.shift();
            count++;
            continue;
        }
        let str = match.groups.str;
        let numbers = [];
        for (const char of str) {
            let value = char.charCodeAt();
            numbers.push(value);
        }
        console.log(`${match.groups.command}: ${numbers.join(' ')}`);

        currentStr = input.shift();
        count++;
    }
}
solve((['3',
    'go:[outside]',
    '!drive!:YourCarToACarWash',
    '!Watch!:[LordofTheRings]',])
);