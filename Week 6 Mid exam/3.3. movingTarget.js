function movingTarget(commands) {
    let targets = commands.shift().split(' ').map(Number);

    function checkIndex(param) {
        if (param >= 0 && param < targets.length) {
            return true;
        } else {
            return false;
        }
    }
    for (el of commands) {
        let action = el.split(' ');
        let command = action[0];
        let index = Number(action[1]);
        let value = Number(action[2]);

        switch (command) {
            case 'Shoot':
                if (checkIndex(index) === true) {
                    if (targets[index] - value > 0) {
                        targets.splice(index, 1, targets[index] - value)
                    } else {
                        targets.splice(index, 1)
                    }
                }
                break;
            case 'Add':
                if (checkIndex(index) === true) {
                    targets.splice(index, 0, value)
                } else {
                    console.log("Invalid placement!");
                }
                break;
            case 'Strike':
                if (index - value < 0 || index + value >= targets.length) {
                    console.log("Strike missed!");
                } else {
                    targets.splice(index - value, value * 2 + 1)
                }
                break;
        }
    }
    console.log(targets.join('|'));
}
movingTarget((["1 2 3 4 5",
    "Strike 0 1",
    "End"])

);