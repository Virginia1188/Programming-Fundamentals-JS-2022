function solve(input) {
    let carCount = input.shift();
    let count = 0;
    let cars = {};
    let line = input.shift();
    while (line != 'Stop') {
        if (count < carCount) {
            let [car, mileage, fuel] = line.split('|');
            cars[car] = {
                mileage: Number(mileage),
                fuel: Number(fuel),
            }
            count++;
            line = input.shift();
            continue;
        }

        let [command, car, ...arguments] = line.split(' : ');
        switch (command) {
            case 'Drive':
                let distance = Number(arguments[0]);
                let fuelNeeded = Number(arguments[1]);
                if (cars[car].fuel < fuelNeeded) {
                    console.log(`Not enough fuel to make that ride`);
                    break;
                }
                cars[car].mileage += distance;
                cars[car].fuel -= fuelNeeded;
                console.log(`${car} driven for ${distance} kilometers. ${fuelNeeded} liters of fuel consumed.`);

                if (cars[car].mileage >= 100000) {
                    console.log(`Time to sell the ${car}!`);
                    delete cars[car];

                }
                break;

            case 'Refuel':
                let fuelAdded = Number(arguments[0]);
                if (cars[car].fuel + fuelAdded > 75) {
                    let added = 75 - cars[car].fuel;
                    cars[car].fuel += added;
                    console.log(`${car} refueled with ${added} liters`);
                    break;
                }
                cars[car].fuel += fuelAdded;
                console.log(`${car} refueled with ${fuelAdded} liters`);
                break;
            case 'Revert':
                let kmRemoved = Number(arguments[0]);
                if (cars[car].mileage - kmRemoved < 10000) {
                    cars[car].mileage = 10000;
                    break;
                }
                cars[car].mileage -= kmRemoved;
                console.log(`${car} mileage decreased by ${kmRemoved} kilometers`);
                break;
        }
        line = input.shift();
    }
    for (const [car, argument] of Object.entries(cars)) {
        console.log(`${car} -> Mileage: ${argument.mileage} kms, Fuel in the tank: ${argument.fuel} lt.`);
    }
}
solve([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
]
);