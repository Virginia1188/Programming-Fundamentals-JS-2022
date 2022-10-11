function carWash(input) {
    let washingProgress = 0;
    for (let i = 0; i < input.length; i++) {
        let currentAction = input[i];
        switch (currentAction) {
            case "soap": washingProgress += 10; break;
            case "water": washingProgress = washingProgress * 1.2; break;
            case "vacuum cleaner": washingProgress = washingProgress * 1.25; break;
            case "mud": washingProgress = washingProgress * 0.9; break;
        }
    }
    console.log(`The car is ${washingProgress.toFixed(2)}% clean.`);
}
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);