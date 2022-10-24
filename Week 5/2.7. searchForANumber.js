function searchForNumber(firstArr, secondArr){
let elementToTake = secondArr[0];
let elementsToDelete = secondArr[1];
let numberToSeachfor = secondArr[2];
let arrToSearch = firstArr.splice(0,elementToTake);
let count = 0;
arrToSearch = arrToSearch.splice(elementsToDelete,arrToSearch.length);
for(num of arrToSearch){
    if(num === numberToSeachfor){
        count++;
    }
}

console.log(`Number ${numberToSeachfor} occurs ${count} times.`);
}
searchForNumber([7, 1, 5, 8, 2, 7],
    [3, 1, 5]
    
    );