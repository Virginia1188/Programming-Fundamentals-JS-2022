function arrayManipulator(arrIntegers, arrCommands) {
    let arrToManipulate = arrIntegers;

    for (let i = 0; i < arrCommands.length; i++) {
        let currentLine = arrCommands[i].split(' ');
        let action = currentLine.shift();
        let index = Number(currentLine.shift());

        switch (action) {
            case "add":
                let elToAdd = Number(currentLine.shift());
                if(index >=0 && index <= arrToManipulate.length){
                    arrToManipulate.splice(index, 0, elToAdd);
                }
                break;
            case "addMany":
                let many = currentLine.map(Number);
                if(index >=0 && index <= arrToManipulate.length){
                    for (let l = 0; l < many.length; l++) {
                        arrToManipulate.splice(index + l, 0, many[l]);
                    }
                }
                break;
            case "contains":
                let indexOfEl = arrToManipulate.indexOf(index);
                console.log(indexOfEl);
                break;
            case "remove":
                if(index >=0 && index < arrToManipulate.length){
                    arrToManipulate.splice(index, 1);
                }
                
                break;
            case "shift":
                for (let j = 0; j < index; j++) {
                    let current = arrToManipulate.shift();
                    arrToManipulate.push(current);
                }
                break;
            case "sumPairs":
                let arrToSum = arrToManipulate.slice();
                let loops = Math.floor(arrToSum.length /2);
                for(let f = 0; f<loops; f++){
                    let sum = arrToManipulate.shift() + arrToManipulate.shift();
                    arrToManipulate.push(sum);
                }
                if(arrToManipulate.length % 2 === 1){
                    let lastEl = arrToManipulate.shift();
                    arrToManipulate.push(lastEl);
                }
                break;
            case "print":
                console.log(`[ ${arrToManipulate.join(', ')} ]`);
                break;
        }
        if (action === "print") {
            break;
        }
    }
}
arrayManipulator([1, 1, 1, 1, 4],
    ["sumPairs", "print"]
);