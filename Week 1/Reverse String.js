function solve(str){
    let newStr = '';
    for(i = 0; i <= str.length; i++){
        let letter = str.charAt(str.length - i);
        newStr += letter;
    }
    console.log(newStr);
}
solve("SoftUni")