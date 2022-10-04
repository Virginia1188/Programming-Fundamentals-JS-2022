function totalPriceOfOrder(product, quantity) {
    let totalSum = 0;
    switch (product) {
        case "coffee":
            totalSum = quantity * 1.5;
            break;
        case "coke":
            totalSum = quantity * 1.4;
            break;
        case "water":
            totalSum = quantity * 1;
            break;
        case "snacks":
            totalSum = quantity * 2;
            break;
    }
    console.log(totalSum.toFixed(2));
    return totalSum;
}
totalPriceOfOrder("coffee", 2);