function solve(input) {
    let players = {};

    function cardsToNumbers(someCard) {
        let total = 0;
        if (someCard[someCard.length - 1] === 'S') {
            switch (someCard) {
                case '2S': total = 2 * 4; break;
                case '3S': total = 3 * 4; break;
                case '4S': total = 4 * 4; break;
                case '5S': total = 5 * 4; break;
                case '6S': total = 6 * 4; break;
                case '7S': total = 7 * 4; break;
                case '8S': total = 8 * 4; break;
                case '9S': total = 9 * 4; break;
                case '10S': total = 10 * 4; break;
                case 'JS': total = 11 * 4; break;
                case 'QS': total = 12 * 4; break;
                case 'KS': total = 13 * 4; break;
                case 'AS': total = 14 * 4; break;
            }
        } else if (someCard[someCard.length - 1] === 'H') {
            switch (someCard) {
                case '2H': total = 2 * 3; break;
                case '3H': total = 3 * 3; break;
                case '4H': total = 4 * 3; break;
                case '5H': total = 5 * 3; break;
                case '6H': total = 6 * 3; break;
                case '7H': total = 7 * 3; break;
                case '8H': total = 8 * 3; break;
                case '9H': total = 9 * 3; break;
                case '10H': total = 10 * 3; break;
                case 'JH': total = 11 * 3; break;
                case 'QH': total = 12 * 3; break;
                case 'KH': total = 13 * 3; break;
                case 'AH': total = 14 * 3; break;
            }

        } else if (someCard[someCard.length - 1] === 'D') {
            switch (someCard) {
                case '2D': total = 2 * 2; break;
                case '3D': total = 3 * 2; break;
                case '4D': total = 4 * 2; break;
                case '5D': total = 5 * 2; break;
                case '6D': total = 6 * 2; break;
                case '7D': total = 7 * 2; break;
                case '8D': total = 8 * 2; break;
                case '9D': total = 9 * 2; break;
                case '10D': total = 10 * 2; break;
                case 'JD': total = 11 * 2; break;
                case 'QD': total = 12 * 2; break;
                case 'KD': total = 13 * 2; break;
                case 'AD': total = 14 * 2; break;
            }

        } else if (someCard[someCard.length - 1] === 'C') {
            switch (someCard) {
                case '2C': total = 2 * 1; break;
                case '3C': total = 3 * 1; break;
                case '4C': total = 4 * 1; break;
                case '5C': total = 5 * 1; break;
                case '6C': total = 6 * 1; break;
                case '7C': total = 7 * 1; break;
                case '8C': total = 8 * 1; break;
                case '9C': total = 9 * 1; break;
                case '10C': total = 10 * 1; break;
                case 'JC': total = 11 * 1; break;
                case 'QC': total = 12 * 1; break;
                case 'KC': total = 13 * 1; break;
                case 'AC': total = 14 * 1; break;
            }
        }
        return total;
    }



    for (const line of input) {
        let [name, currentCards] = line.split(': ');
        if (!players.hasOwnProperty(name)) {
            players[name] = currentCards;
            continue;
        }
        players[name] += ', ' + currentCards;
    }

    for (const [key, value] of Object.entries(players)) {
        let sumOfCards = 0;
        let arrToCheck = [];
        let arrCards = value.split(', ');

        for (const card of arrCards) {
            if (!arrToCheck.includes(card)) {
                sumOfCards += cardsToNumbers(card);
                arrToCheck.push(card);
            }
        }

        console.log(`${key}: ${sumOfCards}`);
    }
}
solve([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
]
);