function solve(n){
    for(i = 0; i < n; i++){
        let l1 = String.fromCharCode(97 + i);
        for(j = 0; j < n; j++){
            let l2 = String.fromCharCode(97 + j);
            for(g = 0; g < n; g++){
                let l3 = String.fromCharCode(97 + g);
                let str = l1 + l2 + l3;
                console.log(str);
            }
        }
    }
}
solve(2)