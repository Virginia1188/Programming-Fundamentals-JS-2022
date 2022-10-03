function solve(firstArr, secondArr){
    let sumOfFirstArr = 0;
    let countOfElements = 0;
    let identical = true;
    for(i = 0; i <= firstArr.length - 1; i++){

        if(Number(firstArr[i]) === Number(secondArr[i])){
            sumOfFirstArr += Number(firstArr[i]);
        }else{
            identical = false;
            break;
        }
        countOfElements++;
    }
    if(identical == false){
        console.log(`Arrays are not identical. Found difference at ${countOfElements} index`);
    }else{
        console.log(`Arrays are identical. Sum: ${sumOfFirstArr}`);
    }
}
solve(['1','2','3','4','5'], ['1','2','4','4','5'])