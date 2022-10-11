function pointsValidation(arrayOfPoints){
    let firstPoint = `${arrayOfPoints[0]}, ${arrayOfPoints[1]}`;
    let secondPoint = `${arrayOfPoints[2]}, ${arrayOfPoints[3]}`;

    if(Number.isInteger(distanceBetweenPoints(arrayOfPoints[0],arrayOfPoints[1],0,0)) === true ){
        console.log(`{${firstPoint}} to {0, 0} is valid`);
    }else{
        console.log(`{${firstPoint}} to {0, 0} is invalid`);
    }

    if( Number.isInteger(distanceBetweenPoints(arrayOfPoints[2],arrayOfPoints[3],0,0)) === true ){
        console.log(`{${secondPoint}} to {0, 0} is valid`);
    }else{
        console.log(`{${secondPoint}} to {0, 0} is invalid`);
    }

    if(Number.isInteger(distanceBetweenPoints(arrayOfPoints[0],arrayOfPoints[1],arrayOfPoints[2],arrayOfPoints[3])) === true ){
        console.log(`{${firstPoint}} to {${secondPoint}} is valid`);
    }else{
        console.log(`{${firstPoint}} to {${secondPoint}} is invalid`);
    }

    function distanceBetweenPoints(x1,y1,x2,y2){
        let distance = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);
        return distance;
    }

    // function isInteger(){
    //     let currentNumberToCheck = distanceBetweenPoints(x1,y1,x2,y2);
    //     if(Number.isInteger(currentNumberToCheck) === true){
    //         return true;
    //     }else{
    //         return false;
    //     }
    // }


}
pointsValidation([2, 1, 1, 1]);