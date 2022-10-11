function createMatrix(inputNumber){
    for(let i = 0; i < inputNumber; i++){
        let currentRoll = '';
        for(let j = 0; j < inputNumber; j++){
            currentRoll += inputNumber + ' ';
        }
        console.log(currentRoll);
    }
}
createMatrix(3);