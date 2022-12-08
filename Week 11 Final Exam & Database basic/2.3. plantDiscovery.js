function solve(input) {
    let numOfPlants = Number(input.shift());
    let plants = {};
    let count = 0;

    while (count < numOfPlants) {
        let [plant, rarity] = input.shift().split('<->');
        if (!plants.hasOwnProperty(plant)) {
            plants[plant] = [];
        }
        plants[plant] = [Number(rarity)];
        count++;
    }

    let commandLine = input.shift();
    while (commandLine != 'Exhibition') {
        let commandArr = commandLine.split(' ');
        let command = commandArr[0];
        let plant = commandArr[1];
        if (plants.hasOwnProperty(plant)) {
            if (command === 'Rate:') {
                let rating = Number(commandArr[3]);
                plants[plant].push(rating);

            } else if (command === 'Update:') {
                let rarity = Number(commandArr[3]);
                plants[plant].shift();
                plants[plant].unshift(rarity)

            } else if (command === 'Reset:') {
                plants[plant] = [plants[plant].shift()];
            }
        }else{
            console.log('error');
        }
        commandLine = input.shift();
    }

    console.log(`Plants for the exhibition:`)
    for (const [plant, entries] of Object.entries(plants)) {
        let rarity = entries.shift();
        if(entries.length ===0){
            entries.push(0);
        }
        let sum = 0;
        entries.forEach(el => {
            sum += el;
        });
        console.log(`- ${plant}; Rarity: ${rarity}; Rating: ${(sum / entries.length).toFixed(2)}`);
    }
}
solve((["2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu0 - 7",
    "Rate: Candelabra - 6",
    "Exhibition"])

);