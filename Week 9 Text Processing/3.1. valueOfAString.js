function solve(input) {
    let str = input.shift();
    let command = input.shift();
    let result = 0;

    for (const char of str) {
        if (command === 'LOWERCASE') {
            if (/[a-z]/.test(char)) {
                result += char.charCodeAt();
            }
        } else if (command === 'UPPERCASE') {
            if (/[A-Z]/.test(char)) {
                result += char.charCodeAt();
            }
        }
    }
    console.log(`The total sum is: ${result}`);
}
solve(['HelloFromMyAwesomePROGRAM',
    'LOWERCASE']
);