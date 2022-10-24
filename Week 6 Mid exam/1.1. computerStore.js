function computerStore(prices) {
    let sumParts = 0;
    let currentPart = 0;

    while (currentPart != "special") {
        currentPart = prices.shift();
        if (currentPart === "regular" || currentPart === "special") {
            break;
        }
        currentPart = Number(currentPart);
        if (currentPart > 0) {
            sumParts += currentPart;
        } else {
            console.log("Invalid price!");
        }

    }

    if (sumParts <= 0) {
        console.log("Invalid order!");
    } else {
        let taxes = sumParts * 0.2;
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${sumParts.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log(`-----------`);
        if (currentPart === "regular") {
            console.log(`Total price: ${(sumParts + taxes).toFixed(2)}$`);
        } else {
            console.log(`Total price: ${((sumParts + taxes) * 0.9).toFixed(2)}$`);
        }
    }
}
computerStore([
    '1023',
    '15',
    '-20',
    '-5.50',
    '450',
    '20',
    '17.66',
    '19.30', 'regular'
])

    ;