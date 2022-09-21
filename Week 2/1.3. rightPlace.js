function solve(str1,char,str2){
    let newStr = str1.replace(`_`,char);
    if(newStr === str2){
        console.log(`Matched`);
    }else{
        console.log(`Not Matched`);
    }
}
solve('Str_ng', 'i', 'String')