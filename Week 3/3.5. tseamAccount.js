function solve(input) {
    let account = input[0];
    let gameAccount = account.split(' ');
    let totalCommands = input.length;

    for (let i = 1; i < totalCommands; i++) {
        let currentCommand = input[i];
        let action = currentCommand.split(' ');
        let currentGame = action[1];

        if (action.includes("Install")) {
            if(!gameAccount.includes(currentGame)){
                gameAccount.push(currentGame);
            }
        } else if (action.includes("Uninstall")) {
            if (gameAccount.includes(currentGame)) {
                for (let j = 0; j < gameAccount.length; j++) {
                    let gameToDelete = gameAccount[j];
                    if (gameToDelete === currentGame) {
                        gameAccount.splice(j, 1);
                        break;
                    }
                }
            }

        } else if (action.includes("Update")) {
            if (gameAccount.includes(currentGame)) {
                for (let j = 0; j < gameAccount.length; j++) {
                    let gameToUpdate = gameAccount[j];
                    if (gameToUpdate === currentGame) {
                        gameAccount.splice(j, 1);
                        gameAccount.push(currentGame);
                        break;
                    }
                }
            }
        } else if (action.includes("Expansion")) {
            let gameExpansion = currentGame.split('-');
            if (gameAccount.includes(gameExpansion[0])) {
                for (let j = 0; j < gameAccount.length; j++) {
                    let gameToUpdate = gameAccount[j];
                    if (gameToUpdate === gameExpansion[0]) {
                        gameAccount.splice(j + 1, 0, gameExpansion.join(':'));
                        break;
                    }
                }
            }
        } else {
            console.log(gameAccount.join(' '));
        }
    }
}
solve(['CS WoW Diablo',
    'Uninstall XCOM',
    'Update PeshoGame',
    'Update WoW',
    'Expansion Civ-V',
    'Play!']

);