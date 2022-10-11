function palindromeIntegers(arrayIntegers) {
    let arrayIntegersLength = arrayIntegers.length;
    for (let i = 0; i < arrayIntegersLength; i++) {
        let currentInteger = Array.from(String(arrayIntegers[i]), Number);
        let normalInteger = String(arrayIntegers[i]);
        let reversedInteger = '';
        for (let j = currentInteger.length - 1; j >= 0; j--) {
            reversedInteger += currentInteger[j];
        }
        if (reversedInteger === normalInteger) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}
palindromeIntegers([32, 2, 232, 1010]);