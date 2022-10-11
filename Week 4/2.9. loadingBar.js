function loadingBar(inputNumber) {
    
    if (inputNumber === 100) {
        console.log(`100% Complete!`);
    } else {
        let loadingOutput = '';
        for (let i = 0; i < inputNumber / 10; i++) {
            loadingOutput += '%';
        }
        for (let j = 0; j < 10 - (inputNumber / 10); j++) {
            loadingOutput += '.';
        }
        console.log(`${inputNumber}% [${loadingOutput}]`);
        console.log('Still loading...');
    }
}
loadingBar(100);