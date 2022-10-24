function train(inputArr) {
    let wagons = inputArr.splice(0, 1).toString().split(' ').map(Number);
    let capacity = Number(inputArr.splice(0, 1));

    for (let i = 0; i < inputArr.length; i++) {
        let [command, num] = inputArr[i].split(' ');
        if (command !== 'Add') {
            num = command;
        }
        num = Number(num);
        if (command === 'Add') {
            wagons.push(num);
        } else {
            for (let j = 0; j < wagons.length; j++) {
                if (capacity - wagons[j] >= num) {
                    let newCapacity = wagons[j] + num;
                    wagons.splice(j, 1, newCapacity);
                    break;
                }
            }
        }
    }
    console.log(wagons.join(' '));
}
train([
    '32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75',
]);
train([
    '0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6',
]);