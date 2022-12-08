function solve(string) {
    let arrText = string.split(' ');
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result = 0;

    for (const str of arrText) {
        let word = str.trim();
        let myNum = Number(word.substring(1, word.length - 1));
        let firstLetter = word[0];
        let secondLetter = word[word.length - 1];

        if (/[A-Z]/.test(firstLetter)) {
            firstLetter = firstLetter.toLowerCase();
            myNum = myNum / (alphabet.indexOf(firstLetter) + 1);
        } else {
            myNum = myNum * (alphabet.indexOf(firstLetter) + 1);
        }

        if (/[A-Z]/.test(secondLetter)) {
            secondLetter = secondLetter.toLowerCase();
            myNum = myNum - (alphabet.indexOf(secondLetter) + 1);
        } else {
            myNum = myNum + (alphabet.indexOf(secondLetter) + 1);
        }

        result += myNum;
    }
    console.log(result.toFixed(2));
}
solve('P34562Z q2576f   H456z');