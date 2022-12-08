function solve(inputStr) {
    let str = inputStr;
    let result = '';

    for (let i = 0; i < str.length; i++) {
        let currentChar = str[i];
        result += currentChar;

        if (/[A-Z]/.test(str[i + 1])) {
            result += ', ';
        }
    }
    console.log(result);
}
solve('SplitMeIfYouCanHaHaYouCantOrYouCan');