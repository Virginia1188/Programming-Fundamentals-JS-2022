function blackFlag(input) {
    const days = Number(input[0]);
    const dailyPlunder = Number(input[1]);
    const expectedPlunder = Number(input[2]);
    let count = 0;
    let totalPlunder = 0;

    for (let i = 1; i <= days; i++) {
        count++;
        totalPlunder += dailyPlunder;
        if (count % 3 === 0) {
            totalPlunder += dailyPlunder * 0.5;
        }
        if (count % 5 === 0) {
            totalPlunder = totalPlunder * 0.7;
        }
    }
    if (totalPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        let percentage = (totalPlunder / expectedPlunder) * 100;
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }
}
blackFlag((["10",
    "20",
    "380"])
);