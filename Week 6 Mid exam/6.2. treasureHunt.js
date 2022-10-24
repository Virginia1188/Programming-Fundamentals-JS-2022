function treasureHunt(input) {
    let treasureChest = input.shift().split('|');

    let currentLine = input[0];

    while (currentLine != "Yohoho!") {
        let currentCommand = currentLine.split(' ');
        let action = currentCommand.shift();


        switch (action) {
            case "Loot":
                for (let i = 0; i < currentCommand.length; i++) {
                    if (!treasureChest.includes(currentCommand[i])) {
                        treasureChest.unshift(currentCommand[i])
                    }
                }
                break;
            case "Drop":
                let index = Number(currentCommand[0]);
                if (treasureChest[index]) {
                    let removed = treasureChest.splice(index, 1).toString();
                    treasureChest.push(removed);
                }
                break;
            case "Steal":
                let count = Number(currentCommand[0]);
                let stolen = [];
                if (count < treasureChest.length) {
                    stolen = treasureChest.splice(treasureChest.length - count, count);
                } else {
                    stolen = treasureChest;
                    treasureChest = 0;
                }
                console.log(stolen.join(', '));
                break;
        }

        currentLine = input.shift();
        currentLine = input[0];
    }

    if (treasureChest != 0) {
        let length = treasureChest.map(x => x.length).reduce((a, b) => a + b);;
        let sum = length / treasureChest.length;
        console.log(`Average treasure gain: ${sum.toFixed(2)} pirate credits.`);
    } else {
        console.log("Failed treasure hunt.");
    }

}
treasureHunt(["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"])

    ;