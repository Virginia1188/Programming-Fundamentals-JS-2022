function solve(inputArr) {
    let firstString = inputArr.shift();
    let secondString = inputArr.shift();
    let word = inputArr.shift().toString();
    let text = firstString + secondString;
    let vowels = 'aeoui';
    let index = 0;

    for (const char of text) {
        if (vowels.includes(char)) {
            text = text.replace(char, word[index].toUpperCase());
            index++;
        }

        if (index === word.length) {
            index = 0;
        }
    }
    let result = text.split('').reverse().join('');
    console.log(`Your generated password is ${result}`);
}
solve([
    'easymoneyeazylife', 'atleasttencharacters', 'absolute'
]

);