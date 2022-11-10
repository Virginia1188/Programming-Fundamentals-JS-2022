function solve(input) {
    let resources = {};

    for (let i = 0; i < input.length; i += 2) {
        const element = input[i];
        let quantity = Number(input[i + 1]);
        if (resources.hasOwnProperty(element)) {
            resources[element] += quantity;
            continue;
        }
        resources[element] = quantity;
    }

    for (const [resourse, quantity] of Object.entries(resources)) {
        console.log(`${resourse} -> ${quantity}`);
    }

}
solve([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]
);