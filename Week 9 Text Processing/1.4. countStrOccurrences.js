function solve(str, word) {
    let arrStr = str.split(' ');
    let count = 0;

    for (const el of arrStr) {
        if (el === word) {
            count++;
        }
    }
    console.log(count);
}
solve('This is a word and it also is a sentence',
    'is'
);