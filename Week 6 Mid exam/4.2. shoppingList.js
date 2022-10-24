function shoppinglist(commands) {
    let myList = commands[0].split('!');
    for (let command of commands) {
        let currentCommand = command.split(' ');
        let action = currentCommand[0];
        let product = currentCommand[1];
        let newItem = currentCommand[2];
        let check = myList.indexOf(product);
        switch (action) {
            case 'Urgent':
                if (check === -1) {
                    myList.unshift(product);
                }
                break;
            case 'Unnecessary':
                if (check !== -1) {
                    myList.splice(check, 1);
                }
                break;
            case 'Correct':
                if (check !== -1) {
                    myList.splice(check, 1, newItem);
                }
                break;
            case 'Rearrange':
                if (check !== -1) {
                    myList.splice(check, 1);
                    myList.push(product);
                }
                break;

        }
    }
    console.log(myList.join(', '));
}
shoppinglist((["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"])

);