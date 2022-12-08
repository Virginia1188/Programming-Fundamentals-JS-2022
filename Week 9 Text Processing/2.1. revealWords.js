function solve(inputWords, inputText) {
    let allWords = inputWords;
    let allText = inputText;
    let words = allWords.toString().split(', ');
    let text = allText.toString().split(' ');


    for (const word of words) {

        for (let i = 0; i < text.length; i++) {
            let current = text[i];
            if (word.length === current.length && current.startsWith('*')) {
                text.splice(i, 1, word);
                break;
            }
        }
    }
    console.log(text.join(' '));
}
solve('great, learning',
    'softuni is ***** place for ******** new programming languages'


);