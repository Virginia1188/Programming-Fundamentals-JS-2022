function solve(arr) {
    let health = 100;
    let coins = 0;
    let rooms = 0;
    let string = arr.toString();
    let newArr = string.split(/[|' ']/);
    let currentHealth = 100;

    for (let i = 0; i < newArr.length; i += 2) {
        let itemOrMonster = newArr[i];
        let num = newArr[i + 1];
        rooms++;

        switch (itemOrMonster) {
            case 'potion':
                health += Number(num);
                if (health < 100) {
                    console.log(`You healed for ${num} hp.`);
                    console.log(`Current health: ${health} hp.`);
                    currentHealth = health;
                } else if (health > 100) {
                    console.log(`You healed for ${100 - currentHealth} hp.`);
                    health = 100;
                    console.log(`Current health: ${health} hp.`);
                    currentHealth = health;
                }
                break;
            case 'chest':
                coins += Number(num);
                console.log(`You found ${num} coins.`);
                break;
            default:
                health -= Number(num);
                currentHealth = health;
                if (health > 0) {
                    console.log(`You slayed ${itemOrMonster}.`);
                } else {
                    console.log(`You died! Killed by ${itemOrMonster}.`);
                    console.log(`Best room: ${rooms}`);
                    break;
                }
        }
        if (health <= 0) {
            break;
        }
    }
    if (health > 0) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}
solve(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);