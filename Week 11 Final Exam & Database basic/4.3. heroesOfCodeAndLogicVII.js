function solve(input) {
    let numOfHeroes = input.shift();
    let line = input.shift();
    let count = 0;
    let heroes = {};

    while (line != 'End') {
        if (count < numOfHeroes) {
            let [hero, hitPoints, manaPoints] = line.split(' ');
            heroes[hero] = {
                hitPoints: Number(hitPoints),
                manaPoints: Number(manaPoints),
            }
            count++;
            line = input.shift();
            continue;
        }

        let [command, hero, ...arguments] = line.split(' - ');
        switch (command) {
            case 'CastSpell':
                let mpNeeded = Number(arguments[0]);
                let spellName = arguments[1];
                if (heroes[hero].manaPoints >= mpNeeded) {
                    heroes[hero].manaPoints -= mpNeeded;
                    console.log(`${hero} has successfully cast ${spellName} and now has ${heroes[hero].manaPoints} MP!`);
                    break;
                }
                console.log(`${hero} does not have enough MP to cast ${spellName}!`);
                break;
            case 'TakeDamage':
                let damage = Number(arguments[0]);
                let attacker = arguments[1];
                heroes[hero].hitPoints -= damage;
                if (heroes[hero].hitPoints > 0) {
                    console.log(`${hero} was hit for ${damage} HP by ${attacker} and now has ${heroes[hero].hitPoints} HP left!`);
                    break;
                }
                console.log(`${hero} has been killed by ${attacker}!`);
                delete heroes[hero];
                break;
            case 'Recharge':
                let mpIncrease = Number(arguments[0]);
                if (heroes[hero].manaPoints + mpIncrease > 200) {
                    let recharged = 200 - heroes[hero].manaPoints;
                    heroes[hero].manaPoints += recharged;
                    console.log(`${hero} recharged for ${recharged} MP!`);
                    break;
                }
                heroes[hero].manaPoints += mpIncrease;
                console.log(`${hero} recharged for ${mpIncrease} MP!`);
                break;
            case 'Heal':
                let hpIncrease = Number(arguments[0]);
                if (heroes[hero].hitPoints + hpIncrease > 100) {
                    let increased = 100 - heroes[hero].hitPoints;
                    heroes[hero].hitPoints += increased;
                    console.log(`${hero} healed for ${increased} HP!`);
                    break;
                }
                heroes[hero].hitPoints += hpIncrease;
                console.log(`${hero} healed for ${hpIncrease} HP!`);
                break;
        }
        line = input.shift();
    }
    for (const [hero, params] of Object.entries(heroes)) {
        console.log(`${hero}
  HP: ${params.hitPoints}
  MP: ${params.manaPoints}`);
    }
}
solve(['2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End',
]);