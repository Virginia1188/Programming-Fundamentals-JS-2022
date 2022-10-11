function numberModification(num) {
    let stringNumber = num.toString();
    let arrNumber = stringNumber.split('');
    let average = 0;

    while (average <= 5) {
        let average = sumDigitsOfArray(arrNumber) / arrNumber.length;
        if (average < 5) {
            arrNumber.push('9');
        } else {
            console.log(arrNumber.join(''));
            break;
        }
    }

    function sumDigitsOfArray(arrNumber) {
        let digitSum = 0;
        for (let i = 0; i < arrNumber.length; i++) {
            let currentDigit = Number(arrNumber[i]);
            digitSum += currentDigit;
        }
        return digitSum;
    }
}
numberModification(101);