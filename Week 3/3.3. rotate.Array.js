function solve(input) {
    let arrToRotate = input;
    let rotations = Number(input[input.length - 1]);
    arrToRotate.pop();
    for (let i = 1; i <= rotations; i++) {
        let currentElementToShift = input[input.length - 1];
        arrToRotate.unshift(currentElementToShift);
        arrToRotate.pop();
    }
    console.log(arrToRotate.join(' '));
}
solve(['Banana', 'Orange', 'Coconut', 'Apple', '15']);