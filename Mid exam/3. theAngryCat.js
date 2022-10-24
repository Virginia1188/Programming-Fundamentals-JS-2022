function theAngryCat(arrOfPrice, entryPoint, type) {
    let leftSum = 0;
    let rightSum = 0;
    let entryEl = arrOfPrice[entryPoint];

    switch (type) {
        case "cheap":
            for (let l = 0; l < entryPoint; l++) {
                let currentLeft = arrOfPrice[l];
                if(currentLeft < entryEl){
                    leftSum += currentLeft;
                }
            }
            for (let j = entryPoint +1; j < arrOfPrice.length; j++) {
                let currentRight = arrOfPrice[j];
                if(currentRight < entryEl){
                    rightSum += currentRight;
                }
            }
            break;
        case "expensive":
            for (let l = 0; l < entryPoint; l++) {
                let currentLeft = arrOfPrice[l];
                if(currentLeft >= entryEl){
                    leftSum += currentLeft;
                }
            }
            for (let j = entryPoint +1; j < arrOfPrice.length; j++) {
                let currentRight = arrOfPrice[j];
                if(currentRight >= entryEl){
                    rightSum += currentRight;
                }
            }
            break;
    }
    if(rightSum > leftSum){
        console.log(`Right - ${rightSum}`);
    }else{
        console.log(`Left - ${leftSum}`);
    }
    

}
theAngryCat([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3],
    7,
    "expensive")
    
    ;