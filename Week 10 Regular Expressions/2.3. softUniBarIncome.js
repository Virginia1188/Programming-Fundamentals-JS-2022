function solve(input) {
    let total = 0;

    let regExp = /%(?<name>[A-Z][a-z]+)%([^%|$.]*)(?<product>[A-Za-z]+)>\2[|](?<qnt>\d+)[|]\2(?<price>\d+.?\d*)\$/g;

    while ((order = regExp.exec(input)) != null) {
        let name = order.groups['name'];
        let product = order.groups['product'];
        let qnt = Number(order.groups['qnt']);
        let price = Number(order.groups['price']);
        let orderTotal = Number(qnt * price);
        total += orderTotal;
        console.log(`${name}: ${product} - ${orderTotal.toFixed(2)}`);
    }
    console.log(`Total income: ${total.toFixed(2)}`);
}
solve(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']
);