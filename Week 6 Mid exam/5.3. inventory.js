function inventory(input) {
    let collectingItems = input.shift().split(', ');
    let currentLine = input.shift();

    while (currentLine != "Craft!") {
        let currentCommand = currentLine.split(' - ');
        let action = currentCommand[0];
        let item = currentCommand[1];

        switch (action) {
            case "Collect":
                if (!collectingItems[item]) {
                    collectingItems.push(item);
                }
                break;
            case "Drop":
                let index = collectingItems.indexOf(item);
                if (index != -1) {
                    collectingItems.splice(index, 1);
                }
                break;
            case "Combine Items":
                let toCombine = item.split(':');
                let first = toCombine[0];
                let second = toCombine[1];
                let oldItemIndex = collectingItems.indexOf(first);
                if (oldItemIndex != -1) {
                    collectingItems.splice(oldItemIndex + 1, 0, second);
                }
                break;
            case "Renew":
                let oldIndex = collectingItems.indexOf(item);
                if (oldIndex != -1) {
                    let toRenew = collectingItems.splice(oldIndex, 1);
                    collectingItems.push(toRenew);
                }
                break;
        }

        currentLine = input.shift();
    }
    console.log(collectingItems.join(', '));
}
inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
]
);