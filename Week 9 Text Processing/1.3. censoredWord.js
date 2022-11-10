function solve(str, word) {
    let newStr = str;
    while (newStr.includes(word)) {
        newStr = newStr.replace(word, '*'.repeat(word.length));
    }
    console.log(newStr);
}
solve('A small sentence with some words', 'small');