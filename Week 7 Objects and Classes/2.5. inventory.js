function solve(arr) {
    let register = [];
    class Heroes {
        constructor(name, level, items) {
            this.name = name;
            this.level = level;
            this.items = items;
        }
    }

    arr.forEach(el => {
        let [name, level, items] = el.split(' / ');
        let hero = new Heroes(name, level, items);
        register.push(hero);
    });

    let sorted = register.sort((a, b) => a.level - b.level);

    for (const el of sorted) {
        let currentObj = el;
        console.log(`Hero: ${currentObj.name}`);
        console.log(`level => ${currentObj.level}`);
        console.log(`items => ${currentObj.items}`);
    }
}
solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);