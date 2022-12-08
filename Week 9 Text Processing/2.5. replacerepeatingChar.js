function solve(inputStr) {
    let str = inputStr;
    let result = '';

    for (let i = 0; i < str.length; i++) {
        let currentChar = str[i];
        if (currentChar !== str[i + 1]) {
            result += currentChar;
        }
    }
    console.log(result);
}
solve('qqqwerqwecccwd');