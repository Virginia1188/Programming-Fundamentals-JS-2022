function memoryGame(input) {
    let elements = input.shift().split(' ');
    let currentCommand = input.shift();
    let moves = 0;

    while (currentCommand != "end") {
        let currentInput = currentCommand.split(' ').map(Number);
        let firstIndex = currentInput[0];
        let secondIndex = currentInput[1];        

        if (elements[firstIndex] == elements[secondIndex]) {
            console.log(`Congrats! You have found matching elements - ${elements[firstIndex]}!`);
            moves++;
            if (firstIndex > secondIndex) {
                elements.splice(firstIndex, 1);
                elements.splice(secondIndex, 1);
            } else {
                elements.splice(secondIndex, 1);
                elements.splice(firstIndex, 1);
            }

            if (elements.length === 0) {
                console.log(`You have won in ${moves} turns!`);
                break;
            }
        } else if (!elements[firstIndex] || !elements[secondIndex] || secondIndex == firstIndex) {
            
            moves++;
            let theMiddle = elements.length / 2;
            let toAdd = `-${moves}a`;
            elements.splice(theMiddle, 0, toAdd, toAdd);
            console.log("Invalid input! Adding additional elements to the board");
        } else {
            moves++;
            console.log("Try again!");
        }
        currentCommand = input.shift();

        if (currentCommand === "end") {
            console.log("Sorry you lose :(");
            console.log(elements.join(' '));
        }
    }
}
memoryGame([
    "a 2 4 a 2 4",
    "4 0",
    "0 2",
    "0 1",
    "0 1",
    "end"
]


)
    ;