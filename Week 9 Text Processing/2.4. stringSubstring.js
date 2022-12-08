function solve(word, textInput) {
    let text = textInput;
    let lowerCaseText = text.toLowerCase();
    let lowerCaseWord = word.toLowerCase();
    if (lowerCaseText.includes(lowerCaseWord)) {
        console.log(lowerCaseWord);
    } else {
        console.log(`${lowerCaseWord} not found!`);
    }
}
solve('python','JavaScript is the best programming language'

);