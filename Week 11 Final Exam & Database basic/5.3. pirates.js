function solve(input) {
    let cities = {};
    let cityDetails = input.shift();

    while (cityDetails != 'Sail') {
        let [city, population, gold] = cityDetails.split('||');
        if (!cities.hasOwnProperty(city)) {
            cities[city] = [Number(population), Number(gold)];
        } else {
            let newPop = cities[city][0] + Number(population);
            let newGold = cities[city][1] + Number(gold);
            cities[city] = [newPop, newGold];
        }
        cityDetails = input.shift();
    }
    let commandLine = input.shift();
    while (commandLine != 'End') {
        let [command, town, people, gold] = commandLine.split('=>');
        let currentTownGold = 0;
        let currentPeopleOrGold = 0;

        if (command === 'Plunder') {
            currentTownGold = cities[town][1] - Number(gold);
            currentPeopleOrGold = cities[town][0] - Number(people);
            console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);
            if (currentTownGold === 0 || currentPeopleOrGold === 0) {
                console.log(`${town} has been wiped off the map!`);
                delete cities[town];
            } else {
                cities[town] = [currentPeopleOrGold, currentTownGold];
            }
        } else if (command === 'Prosper') {
            let currentGold = Number(people);
            if (currentGold < 0) {
                console.log(`Gold added cannot be a negative number!`);
            } else {
                currentTownGold = currentGold + cities[town][1];
                cities[town].pop();
                cities[town].push(currentTownGold);
                console.log(`${currentGold} gold added to the city treasury. ${town} now has ${currentTownGold} gold.`);
            }
        }
        commandLine = input.shift();
    }
    if (Object.keys(cities).length === 0) {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    } else {
        console.log(`Ahoy, Captain! There are ${Object.keys(cities).length} wealthy settlements to go to:`);
        for (const [city, propArr] of Object.entries(cities)) {
            console.log(`${city} -> Population: ${propArr[0]} citizens, Gold: ${propArr[1]} kg`);
        }
    }
}
solve(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"])
    ;