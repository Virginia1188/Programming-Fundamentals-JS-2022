function burgerVan(input) {
    let cities = Number(input.shift());
    let currentProfit = 0;
    let totalProfit = 0;
    for (let i = 1; i <= cities; i++) {
        let city = input.shift();
        let earned = Number(input.shift());
        let spend = Number(input.shift());

        if (i % 3 === 0 && i % 5 === 0) {
            currentProfit = (earned * 0.9) - spend;
            totalProfit += currentProfit;
            console.log(`In ${city} Burger Bus earned ${currentProfit.toFixed(2)} leva.`);
        } else if (i % 5 === 0) {
            currentProfit = (earned * 0.9) - spend;
            totalProfit += currentProfit;
            console.log(`In ${city} Burger Bus earned ${currentProfit.toFixed(2)} leva.`);
        } else if (i % 3 === 0) {
            currentProfit = earned - (spend * 1.5);
            totalProfit += currentProfit;
            console.log(`In ${city} Burger Bus earned ${currentProfit.toFixed(2)} leva.`);
        } else {
            currentProfit = earned - spend;
            totalProfit += currentProfit;
            console.log(`In ${city} Burger Bus earned ${currentProfit.toFixed(2)} leva.`);
        }

    }
    console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`);

}
burgerVan((["5",
    "Lille",
    "2226.00",
    "1200.60",
    "Rennes",
    "6320.60",
    "5460.20",
    "Reims",
    "600.20",
    "452.32",
    "Bordeaux",
    "6925.30",
    "2650.40",
    "Montpellier",
    "680.50",
    "290.20"])

);