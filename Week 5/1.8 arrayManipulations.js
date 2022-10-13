function arrayManipulations(input) {
    let arrToManipulate = input[0].split(' ').map(Number);
    input.shift();
    function add(el) {
        arrToManipulate.push(el);
    }

    function remove(num) {
        arrToManipulate = arrToManipulate.filter(el => el !== num);
    }

    function removeAt(index) {
        arrToManipulate.splice(index, 1);
    }

    function insert(num, index) {
        arrToManipulate.splice(index, 0, num);
    }

    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(' ');
        let action = command[0];
        let firstNum = Number(command[1]);
        let secondNum = Number(command[2]);

        switch (action) {
            case "Add":
                add(firstNum);
                break;
            case "Remove":
                remove(firstNum);
                break;
            case "RemoveAt":
                removeAt(firstNum);
                break;
            case "Insert":
                insert(firstNum, secondNum);
                break;
        }
    }
    console.log(arrToManipulate.join(' '));
}
arrayManipulations([
    '6 12 2 65 6 42',
    'Add 8',
    'Remove 12',
    'RemoveAt 3',
    'Insert 6 2'

]
);