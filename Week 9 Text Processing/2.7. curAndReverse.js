function solve(inputStr) {
    let str = inputStr;
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        let char = str[i];
        reversed += char;
    }
    let firstHalf = reversed.substring(0, (str.length / 2));
    let secondHalf = reversed.substring((str.length / 2));
    console.log(secondHalf);
    console.log(firstHalf);
}
solve('tluciffiDsIsihTgnizamAoSsIsihT');