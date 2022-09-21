function solve(fights,helmetP,swordP,shieldP,armorP){
    let helmetRepair = Math.floor(fights/2);
    let swordRepair = Math.floor(fights/3);
    let shieldRepair = Math.floor(fights/6);
    let armorRepair = Math.floor(fights/12);
   
    let total = helmetP * helmetRepair + swordP * swordRepair + shieldP * shieldRepair + armorP * armorRepair;
    console.log(`Gladiator expenses: ${total.toFixed(2)} aureus`);
}

solve(23,
    12.50,
    21.50,
    40,
    200    
    )