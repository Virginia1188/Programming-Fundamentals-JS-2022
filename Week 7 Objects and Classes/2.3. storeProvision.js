function solve(stock, ordered) {

    let storeStock = {};
    let stockLength = stock.length;
    let orderedLength = ordered.length;

    for (let i = 0; i < stockLength; i += 2) {
        let currentItem = stock[i];
        let quantity = stock[i + 1];
        storeStock[currentItem] = Number(quantity);
    }

    for (let i = 0; i < orderedLength; i += 2) {
        let orderedItem = ordered[i];
        let quantity = ordered[i + 1];

        if (!storeStock[orderedItem]) {
            storeStock[orderedItem] = 0;
        }
        storeStock[orderedItem] += Number(quantity);
    }

    for (const key in storeStock) {
        console.log(`${key} -> ${storeStock[key]}`);
    }
}
solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
);