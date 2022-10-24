function shootForTheWin(input) {
    let targets = input.shift();
    targets = targets.split(' ').map(Number);
    let command = input.shift();
    let count = 0;

    while (command != "End") {
        let index = Number(command);

        if (targets[index] > -1) {
            let currentValue = targets[index];
            targets[index] = -1;
            count++;
            for (let i = 0; i < targets.length; i++) {
                if (targets[i] > - 1 && targets[i] <= currentValue) {
                    targets[i] += currentValue;
                } else if (targets[i] > currentValue) {
                    targets[i] -= currentValue;
                }
            }

        }

        command = input.shift();
    }
    console.log(`Shot targets: ${count} -> ${targets.join(' ')}`);
}
shootForTheWin((["30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"])

);