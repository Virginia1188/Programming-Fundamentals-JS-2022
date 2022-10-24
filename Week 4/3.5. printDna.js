function printDna(length) {
    let symbols = ["A", "T", "C", "G", "T", "T", "A", "G", "G", "G"];
    let count = 0;
    for (let i = 0; i < length; i++) {
        let firstEl = symbols.shift();
        let secondEl = symbols.shift();
        symbols.push(firstEl);
        symbols.push(secondEl);

        if (count === 0) {
            console.log(`**${firstEl}${secondEl}**`);
        } else if (count === 1) {
            console.log(`*${firstEl}--${secondEl}*`);
        } else if (count === 2) {
            console.log(`${firstEl}----${secondEl}`);
        } else if (count === 3) {
            console.log(`*${firstEl}--${secondEl}*`);
        }
        count++;
        if (count === 4) {
            count = 0;
        }
    }

}
printDna(10);