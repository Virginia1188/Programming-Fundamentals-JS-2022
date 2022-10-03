function solve(firstNum, secondNum){
    let spiralArr = [];
    spiralArr = Array(firstNum).map(() => Array(secondNum));

    for(let i = 0; i < firstNum; i++){
        for(j=0; j <firstNum; j++){
            spiralArr[i] = j +1;
        }
    }
    //for(let i = 0; i < firstNum; i++)
    //for(let i = 0; i < firstNum; i++){
    //    spiralArr.push([]);
    //}
    console.log(spiralArr);
}
solve(5, 5);