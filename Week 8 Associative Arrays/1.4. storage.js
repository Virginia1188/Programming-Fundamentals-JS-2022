function solve(arr) {

    let map = new Map();

    arr.forEach(el => {
        let [name, number] = el.split(' ');
        if (map.has(name)) {
            map.set(name, Number(map.get(name)) + Number(number))

        } else {
            map.set(name, number);
        }
    });
    for (let [key, number] of map) {
        console.log(`${key} -> ${number}`);
    }
}
solve(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);