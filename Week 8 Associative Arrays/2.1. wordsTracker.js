function solve(input) {
    let myWords = input.shift().split(' ');
    let assocArr = {};
    myWords.forEach(word => {
        assocArr[word.toString()] = 0;
    });

    input.forEach(el => {
        if (assocArr.hasOwnProperty(el)) {
            assocArr[el] += 1;
        }
    })

    let sorted = Object.entries(assocArr).sort((a, b) => b[1] - a[1]);
    sorted.forEach(el => {
        console.log(`${el[0]} - ${el[1]}`);
    });

}
solve([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
);