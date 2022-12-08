function solve(input) {
    let numberOfPieces = Number(input.shift());
    let list = {};
    let line = input.shift();
    let count = 0;

    while (line != 'Stop') {
        if (count < numberOfPieces) {
            let [piece, composer, key] = line.split('|');
            list[piece] = { [composer]: key };
            count++;
        } else {
            let [command, piece, ...arguments] = line.split('|');
            switch (command) {
                case 'Add':
                    if (list.hasOwnProperty(piece)) {
                        console.log(`${piece} is already in the collection!`);
                        break;
                    }
                    let composer = arguments[0];
                    let key = arguments[1];
                    list[piece] = { [composer]: key };
                    console.log(`${piece} by ${composer} in ${key} added to the collection!`);
                    break;
                case 'Remove':
                    if (list.hasOwnProperty(piece)) {
                        delete list[piece];
                        console.log(`Successfully removed ${piece}!`);
                        break;
                    }
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                    break;

                case 'ChangeKey':
                    if (list.hasOwnProperty(piece)) {
                        for (const composer of Object.keys(list[piece])) {
                            list[piece][composer] = arguments;
                        }
                        console.log(`Changed the key of ${piece} to ${arguments}!`);
                        break;
                    }
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                    break;
            }
        }
        line = input.shift();
    }
    for (const [piece, value] of Object.entries(list)) {
        let result = Object.entries(value);

        console.log(`${piece} -> Composer: ${result[0][0]}, Key: ${result[0][1]}`);
    }
}
solve([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]);