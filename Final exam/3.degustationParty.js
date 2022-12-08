function solve(input) {
    let guests = {};
    let dislikedMeals = 0;
    let line = input.shift();

    while (line != 'Stop') {
        let [command, guest, meal] = line.split('-');
        switch (command) {
            case 'Like':
                if (!guests.hasOwnProperty(guest)) {
                    guests[guest] = new Set;
                }
                guests[guest].add(meal);
                break;

            case 'Dislike':
              
                if (!guests.hasOwnProperty(guest)) {
                    console.log(`${guest} is not at the party.`);
                    break;
                }
                if (!guests[guest].has(meal)) {
                    console.log(`${guest} doesn't have the ${meal} in his/her collection.`);
                    break;
                }
                guests[guest].delete(meal);
                console.log(`${guest} doesn't like the ${meal}.`);
                dislikedMeals++;
                break;
        }

        line = input.shift();
    }
    for (const [guest, set] of Object.entries(guests)) {
        let meals = Array.from(set)
        console.log(`${guest}: ${meals.join(', ')}`);
    }
    console.log(`Unliked meals: ${dislikedMeals}`);
}
solve((["Like-Katy-fish",
    "Dislike-Katy-fish",
    "Stop"])
);