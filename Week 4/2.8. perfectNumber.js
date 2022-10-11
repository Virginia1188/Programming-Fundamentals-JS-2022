function findPerfectNumber(numberToCheck) {
    let sumOfDivisors = 0;
    for (let i = 0; i < numberToCheck; i++) {
        let currentDivisor = i;
        if (numberToCheck % i === 0) {
            sumOfDivisors += currentDivisor;
        }
    }
    if (sumOfDivisors === numberToCheck) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}
findPerfectNumber(1236498);