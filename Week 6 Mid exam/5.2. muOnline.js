function muOnline(input) {
    let health = 100;
    let bitcoins = 0;
    let commands = input.split('|');
    let bestRoom = 0;
    let flag = true;
    let currentLine = commands.shift();
    while (commands.length >= 0) {
        let currentCommand = currentLine.split(' ')
        bestRoom++;
        let action = currentCommand[0];
        let value = Number(currentCommand[1]);

        switch (action) {
            case "potion":
                let healedFor = 0;
                if (health < 100) {
                    if (health + value > 100) {
                        healedFor = value - ((health + value) - 100);
                        health = 100;
                        console.log((`You healed for ${healedFor} hp.`));
                        console.log(`Current health: 100 hp.`);

                    } else {
                        health += value;
                        console.log((`You healed for ${value} hp.`));
                        console.log(`Current health: ${health} hp.`);
                    }
                } else {
                    console.log(`You healed for 0 hp.`);
                    console.log(`Current health: 100 hp.`);
                }
                break;
            case "chest":
                bitcoins += value;
                console.log(`You found ${value} bitcoins.`);
                break;
            default:
                health -= value;
                if (health > 0) {
                    console.log(`You slayed ${action}.`);
                } else {
                    console.log(`You died! Killed by ${action}.`);
                    flag = false;
                }
                break;
        }

        if (!flag) {
            console.log(`Best room: ${bestRoom}`);
            break;
        }
        if(commands.length === 0){
            break;
        }
        currentLine = commands.shift();
    }
    if (flag) {
        console.log(`You've made it!`);
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
    }

}
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");