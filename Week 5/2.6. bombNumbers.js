function bombNumbers(firstArr, secondArr) {
    let sequenceOfNumbers = firstArr;
    let bombNum = secondArr[0];
    let power = secondArr[1];
    let sum = 0;

    for (let i = 0; i < sequenceOfNumbers.length; i++) {
        let currentNum = sequenceOfNumbers[i];

        if (currentNum === bombNum) {
            if (i - power < 0) {
                sequenceOfNumbers.splice(0, power * 2);
                i = -1;
            } else {
                sequenceOfNumbers.splice(i - power, power * 2 + 1);
                i = -1;
            }
        }
    }
    for (num of sequenceOfNumbers) {
        sum += num;
    }
    console.log(sum);
}
bombNumbers([2, 1, 1, 1, 2, 1, 1, 1, 1, 1],
    [2, 1]);