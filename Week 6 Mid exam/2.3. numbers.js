function numbers(input){
    let sequenceOfNum = input.split(' ').map(Number);
    let average = sequenceOfNum.reduce((a,b) => a+b) / sequenceOfNum.length;
    let greaterNums = sequenceOfNum.filter(x => x > average).sort((a,b) => b-a);
    let topFive = greaterNums.slice(0,5);

    if(greaterNums.length <= 0){
        console.log('No');
    }else{
        console.log(topFive.join(' '));
    }
}
numbers('1');