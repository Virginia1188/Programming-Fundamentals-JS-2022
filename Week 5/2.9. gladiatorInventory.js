function gladiatorInventory(input) {
    let myInventory = input.shift().split(' ');
   
    while(input.length >= 0){
        let currentCommand = input.shift().split(' ');
        let action = currentCommand[0];
        let equipment = currentCommand[1];

        switch (action) {
            case "Buy":
                if (!myInventory[equipment]) {
                    myInventory.push(equipment);
                }
                break;
            case "Trash":
                let indexTrash = myInventory.indexOf(equipment);
                if (indexTrash != -1) {
                    myInventory.splice(indexTrash, 1);
                }
                break;
            case "Repair":
                let indexRepair = myInventory.indexOf(equipment);
                if (indexRepair != -1) {
                    myInventory.splice(indexRepair, 1);
                    myInventory.push(equipment);
                }
                break;
            case "Upgrade":
                let upgrade = equipment.split('-');
                let indexUpgrade = myInventory.indexOf(upgrade[0]);
                if (indexUpgrade != -1) {
                    myInventory.splice(indexUpgrade + 1, 0, upgrade.join(':'));
                }
                break;
        }

        if(input.length === 0){
            break;
        }
    }
    console.log(myInventory.join(' '));
}
gladiatorInventory(['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel']


);