function solve(arr) {
    let towns = [];

    for (i = 0; i < arr.length; i++) {
        let current = arr[i].split(' | ');
        let townName = current[0];
        let latitude = Number(current[1]).toFixed(2);
        let longitude = Number(current[2]).toFixed(2);
        let town = {
            town: townName,
            latitude: latitude,
            longitude: longitude,
        }
        towns.push(town);
    }
    towns.forEach((i) => console.log(`{ town: '${i.town}', latitude: '${i.latitude}', longitude: '${i.longitude}' }`));

}
solve(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
);