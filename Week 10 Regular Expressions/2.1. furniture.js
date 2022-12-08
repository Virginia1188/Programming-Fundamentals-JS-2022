function solve(input) {
    let regExp = />>\b(?<name>\w+)<<(?<price>\d+\.?\d+)!(?<qnt>\d+)/g;
    let total = 0;
    let furniture = [];
    while ((line = regExp.exec(input)) != null) {
        let currentPrice = Number(line.groups['price']);
        let currentQnt = Number(line.groups['qnt']);
        furniture.push(line.groups['name'])
        total += currentPrice * currentQnt;
    }

    if (furniture.length <= 0) {
        console.log(`Bought furniture:`);
        console.log(`Total money spend: ${total.toFixed(2)}`);
    } else {
        console.log(`Bought furniture:`);
        console.log(furniture.join('\n'));
        console.log(`Total money spend: ${total.toFixed(2)}`);
    }
}
solve(['>>Laptop<<312.2323!3',
'>>TV<<300.21314!5',
'>Invalid<<!5',
'>>TV<<300.21314!20',
'>>Invalid<!5',
'>>TV<<30.21314!5',
'>>Invalid<<!!5',
'Purchase']
);