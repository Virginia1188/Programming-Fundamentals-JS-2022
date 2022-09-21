function solve(par){
    let value = par.codePointAt(0);
    if(value >= 65 && value <= 90){
        console.log(`upper-case`);
    }else{
        console.log(`lower-case`);
    }
    
}
solve("A")