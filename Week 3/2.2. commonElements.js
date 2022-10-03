function solve(firstArr,secondArr){

    for(let i = 0; i <= firstArr.length - 1; i++){
        let firstArrElement = firstArr[i];
        for(let j = 0; j <= secondArr.length - 1; j++){
            let secondArrElement = secondArr[j];
            if(firstArrElement === secondArrElement){
                console.log(firstArrElement);
            }
        }
    }
 
}
solve(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l']

);