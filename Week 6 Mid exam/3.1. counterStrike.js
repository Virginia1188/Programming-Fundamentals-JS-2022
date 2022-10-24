function counterStrike(input) {
    let energy = Number(input.shift());
    let command = input.shift();
    let wonBattles = 0;
    let flag = false;

    while (command != "End of battle") {
        let distance = Number(command);

        if (energy - distance >= 0) {
            energy -= distance;
            wonBattles++;
            if (wonBattles % 3 === 0) {
                energy += wonBattles;
            }
        } else {
            console.log(`Not enough energy! Game ends with ${wonBattles} won battles and ${energy} energy`);
            flag = true;
            break;
        }

        command = input.shift();
    }
    if (!flag) {
        console.log(`Won battles: ${wonBattles}. Energy left: ${energy}`);
    }
}
counterStrike((["200",
    "54",
    "14",
    "28",
    "13",
    "End of battle"])

);