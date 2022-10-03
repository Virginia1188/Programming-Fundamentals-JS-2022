function solve(input) {
    let firstArr = input[0];
    let secondArr = input[1];
    let thirdArr = input[2];
    let isIsMagic = true;
    let magicSum = 0;

    let secondSum = 0;
    let thirdSum = 0;
    for (let i = 0; i < firstArr.length; i++) {
        magicSum += Number(firstArr[i]);
    }
    for (let j = 0; j < secondArr.length; j++) {
        secondSum += Number(secondArr[j]);
    }
    for (let l = 0; l < thirdArr.length; l++) {
        thirdSum += Number(secondArr[l]);
    }
    if (magicSum != secondSum || magicSum != thirdSum) {
        console.log('false');
        isIsMagic = false;
    }
    if (isIsMagic) {
        let firstVerticalSum = Number(firstArr[0]) + Number(secondArr[0]) + Number(thirdArr[0]);
        let secondVerticalSum = Number(firstArr[1]) + Number(secondArr[1]) + Number(thirdArr[1]);
        let thirdVerticalSum = Number(firstArr[2]) + Number(secondArr[2]) + Number(thirdArr[2]);
        if (magicSum != firstVerticalSum || magicSum != secondVerticalSum || magicSum != thirdVerticalSum) {
            console.log('false');
        } else {
            console.log('true');
        }
    }
}
solve([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]


);