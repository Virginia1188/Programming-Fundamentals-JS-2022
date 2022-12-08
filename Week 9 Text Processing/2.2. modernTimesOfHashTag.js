function solve(inputStr) {
    let arrText = inputStr.toString().split(' ');
    let specialWords = [];

    for (const word of arrText) {
        if (word.startsWith('#') && word.length > 1) {
            let checkLine = word.split('#');
            let flag = /^[a-zA-Z]+$/.test(checkLine[1]);
            if (flag) {
                specialWords.push(special);
            }
        }
    }
    console.log(specialWords.join('\n'));
}
solve('The symbol # is known #variously in English-speaking #regions as the #number sign');