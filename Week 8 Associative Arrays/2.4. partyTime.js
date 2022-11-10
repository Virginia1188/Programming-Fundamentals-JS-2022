function solve(input) {
    let currentName = input.shift();
    let vipG = [];
    let normalG = [];
 
    while (currentName !== 'PARTY') {
        let isVip = !isNaN(currentName[0]);
        if(isVip){
            vipG.push(currentName);
        }else{
            normalG.push(currentName);
        }
        currentName = input.shift();
    }

    let fullList = vipG.concat(normalG);

    for (const name of input) {
        fullList.splice(fullList.indexOf(name),1);
    }

    console.log(fullList.length);
    for (const key of fullList) {
        console.log(key);
    }     
}
solve(['hi',
    '9No',
    'hi',
    'PARTY',
    'hi',
]
);