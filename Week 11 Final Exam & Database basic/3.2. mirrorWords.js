function solve(input) {
    let text = input.shift();
    let regExp = /(@|#)(?<firstWord>[A-Za-zA-Z]{3,})\1{2}(?<secondWord>[A-Za-zA-Z]{3,})\1/g;
    let pairCount = 0;
    let pair = [];
    let matches = text.matchAll(regExp);
    for (const match of matches) {
        pairCount++;
        let firstWord = match.groups.firstWord;
        let secongWord = match.groups.secondWord;
        let reversedWord = firstWord.split('').reverse().join('');
        if (reversedWord === secongWord) {
            pair.push(`${firstWord} <=> ${secongWord}`);
        }
    }

    if (pairCount === 0) {
        console.log(`No word pairs found!`);
    } else {
        console.log(`${pairCount} word pairs found!`);
    }
    if (pair.length === 0) {
        console.log(`No mirror words!`);
    } else {
        console.log(`The mirror words are:\n${pair.join(', ')}`);
    }
}
solve([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
    ]
    );