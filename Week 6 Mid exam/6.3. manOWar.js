function manOWar(input) {
    let pirateShipStatus = input.shift().split('>');
    let warShipStatus = input.shift().split('>');
    let maxHealth = Number(input.shift());
    let currentLine = input.shift();
    let flag = false;

    while (currentLine != "Retire") {
        let currentCommand = currentLine.split(' ');
        let action = currentCommand[0];

        switch (action) {
            case "Fire":
                let index = Number(currentCommand[1]);
                let damagePirateShip = Number(currentCommand[2]);
                if (warShipStatus[index]) {
                    warShipStatus[index] -= damagePirateShip;
                    if (warShipStatus[index] <= 0) {
                        console.log("You won! The enemy ship has sunken.");
                        flag = true;
                    }
                }
                break;
            case "Defend":
                let startIndex = Number(currentCommand[1]);
                let endIndex = Number(currentCommand[2]);
                let damageWarShip = Number(currentCommand[3]);

                if (pirateShipStatus[startIndex] && pirateShipStatus[endIndex]) {
                    for (let i = startIndex; i <= endIndex; i++) {
                        pirateShipStatus[i] -= damageWarShip;
                        if (pirateShipStatus[i] <= 0) {
                            console.log("You lost! The pirate ship has sunken.");
                            flag = true;
                            break;
                        }
                    }
                }
                break;
            case "Repair":
                let indexToRepair = Number(currentCommand[1]);
                let health = Number(currentCommand[2]);
                if (pirateShipStatus[indexToRepair]) {
                    pirateShipStatus[indexToRepair] += health;
                    if (pirateShipStatus[indexToRepair] > maxHealth) {
                        pirateShipStatus[indexToRepair] = maxHealth;
                    }
                }
                break;
            case "Status":
                let minHealth = maxHealth * 0.2;
                let urgent = pirateShipStatus.filter(x => x < minHealth);
                console.log(`${urgent.length} sections need repair.`);
                //for(let j = o; j < pirateShipStatus.length; j++){}
                break;
        }

        if (flag) {
            break;
        }

        currentLine = input.shift();
    }

    if (!flag) {
        let pirateSum = pirateShipStatus.map(Number).reduce((a, b) => a + b);
        let warSum = warShipStatus.map(Number).reduce((a, b) => a + b);
        console.log(`Pirate ship status: ${pirateSum}`);
        console.log(`Warship status: ${warSum}`);
    }

}
manOWar(["2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"]);
