function theLift(input) {
    let peopleWaiting = Number(input.shift());
    let liftSpaces = input
        .shift()
        .split(' ')
        .map(Number);
    //console.log(liftSpaces);
    let flag = true;

    for (let i = 0; i < liftSpaces.length; i++) {
        let currentWagon = liftSpaces[i];
        for (let j = currentWagon; j < 4; j++) {
            if (peopleWaiting > 0) {
                currentWagon += 1;
                peopleWaiting--;
            } else {
                flag = false;
            }
            liftSpaces[i] = currentWagon;
            if (!flag) {
                break;
            }
            if (currentWagon[liftSpaces.length - 1] === 4) {
                flag = true;
            }
        }
    }

    if (flag && peopleWaiting > 0) {
        console.log(`There isn't enough space! ${peopleWaiting} people in a queue!`);
        console.log(liftSpaces.join(' '));
    } else if (peopleWaiting === 0 && flag) {
        console.log(liftSpaces.join(' '));
    } else {
        console.log(`The lift has empty spots!`);
        console.log(liftSpaces.join(' '));
    }
}
theLift([
    "1",
    "4 4 3"
]

);