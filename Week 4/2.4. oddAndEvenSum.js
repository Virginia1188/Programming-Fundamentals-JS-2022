function oddAndEvenSum(num) {
    let numToArr = Array.from(String(num), Number);
    let oddSum = 0;
    let evenSum = 0;
    for (let i = 0; i < numToArr.length; i++) {
        let currentNum = numToArr[i];
        if (currentNum % 2 === 0) {
            evenSum += currentNum;
        } else {
            oddSum += currentNum;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(1000435);