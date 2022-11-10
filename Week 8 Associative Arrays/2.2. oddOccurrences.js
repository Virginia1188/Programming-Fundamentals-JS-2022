function solve(inputString ){
    let arrWords = inputString.split(' ');
    let myWords = new Map();

    arrWords.forEach(word => { 
        let toLowerCase = word.toLowerCase().toString();

        if(myWords.hasOwnProperty(toLowerCase)){
            myWords[toLowerCase] += 1;
        }else{
            myWords[toLowerCase] = 1;
        }
    });

    let filtered = Object.entries(myWords).filter((x) => x[1] % 2 ===1);
    // let sorted = filtered.sort((a,b) => b[0].localeCompare(a[0]));
    // console.log(sorted);

    for (const word of filtered) {
            console.log(word[0]);
        
    }
    //console.log(filtered);
}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');