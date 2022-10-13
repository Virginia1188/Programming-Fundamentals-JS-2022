function processOddNumbers(inputArr) {
    let oddNumbers = [];

    for (let i = 0; i < inputArr.length; i++) {
        if (i % 2 !== 0) {
            oddNumbers.push(inputArr[i]);
        }
    }
    oddNumbers = oddNumbers.map(x => x * 2);
    let reversedArr = oddNumbers.reverse();
    console.log(reversedArr.join(' '));
}
processOddNumbers([10, 15, 20, 25]);