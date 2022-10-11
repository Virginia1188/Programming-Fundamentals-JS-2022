function charactersInRange(charOne, charTwo) {
    let codeOne = charOne.codePointAt();
    let codeTwo = charTwo.codePointAt();
    let result = '';

    if (codeOne < codeTwo) {
        for (i = codeOne + 1; i < codeTwo; i++) {
            result += String.fromCharCode(i) + ' ';
        }
    } else {
        for (i = codeTwo + 1; i < codeOne; i++) {
            result += String.fromCharCode(i) + ' ';
        }
    }
    console.log(result);
}
charactersInRange('#',
    ':'

);