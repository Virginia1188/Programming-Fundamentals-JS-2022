function solve(input) {
    let destinations = {};

    for (const line of input) {
        let [country, town, price] = line.split(' > ');
        if (!destinations.hasOwnProperty(country)) {
            destinations[country] = {};
        }
        if (!destinations[country][town]) {
            destinations[country][town] = Number(price);
        }
        if (destinations[country][town] > Number(price)) {
            destinations[country][town] = Number(price);
        }
    }
    let sorted = Object.entries(destinations).sort((a, b) => a[0].localeCompare(b[0]));

    for (const [country, town] of sorted) {
        let sortedPrice = Object.entries(town).sort((a, b) => a[1] - b[1]);
        let result = '';
        for (const [town, price] of sortedPrice) {
            result += `${town} -> ${price} `;
        }
        console.log(`${country} -> ${result}`);
    }
}
solve([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
]

);