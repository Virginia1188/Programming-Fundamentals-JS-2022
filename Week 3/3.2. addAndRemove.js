function solve(arr) {
    let newArr = [];
    let count = 0;

    for (i = 0; i < arr.length; i++) {
        count++;
        if (arr[i] == 'add') {
            newArr.push(count);
        } else {
            newArr.pop();
        }
    }
    if(newArr.length === 0){
        console.log('Empty');
    } else {
        console.log(newArr.join(' '));
    }
}
solve(['add', 'add', 'add', 'add']);