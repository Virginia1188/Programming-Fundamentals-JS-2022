function solve(inputArr) {
    let parkingLot = new Set();

    for (let el of inputArr) {
        let [direction, carNum] = el.split(', ');
        if (direction === 'IN') {
            parkingLot.add(carNum);
        } else {
            parkingLot.delete(carNum);
        }
    }

    if (parkingLot.size != 0) {

        let sorted = Array.from(parkingLot).sort((a, b) => a.localeCompare(b));
        console.log(sorted.join('\n'));
    } else {
        console.log("Parking Lot is Empty");
    }
}
solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
);