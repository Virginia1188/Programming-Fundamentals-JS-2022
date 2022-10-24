function spaceTravel(input) {
    let ammunition = Number(input.pop());
    let fuel = Number(input.pop());
    let commands = input.toString().split('||');
    let currentLine = commands.shift();
    let flag = true;

    while (currentLine != "Titan") {
        let currentCommand = currentLine.split(' ');
        let action = currentCommand[0];
        let value = Number(currentCommand[1]);

        switch (action) {
            case "Travel":
                if (fuel >= value) {
                    fuel -= value;
                    console.log(`The spaceship travelled ${value} light-years.`);
                } else {
                    flag = false;
                }
                break;
            case "Enemy":
                if (ammunition >= value) {
                    ammunition -= value;
                    console.log(`An enemy with ${value} armour is defeated.`);
                } else if (fuel >= value * 2) {
                    fuel -= value * 2;
                    console.log(`An enemy with ${value} armour is outmaneuvered.`);
                } else {
                    flag = false;
                }
                break;
            case "Repair":
                fuel += value;
                ammunition += value * 2;
                console.log(`Ammunitions added: ${value * 2}.`);
                console.log(`Fuel added: ${value}.`);
                break;
        }
        if (!flag) {
            console.log(`Mission failed.`);
            break;
        }
        currentLine = commands.shift();
    }
    if (flag) {
        console.log(`You have reached Titan, all passengers are safe.`);
    }
}
spaceTravel((['Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan',
    '60',
    '100'])

);