function solve(str) {
    let arrStr = str.toString().split('\\');
    let fileArr = (arrStr[arrStr.length - 1]).split('.');

    if (fileArr.length > 2) {
        console.log(`File name: ${fileArr[0]}.${fileArr[1]}`);
        console.log(`File extension: ${fileArr[2]}`);
    } else {
        console.log(`File name: ${fileArr[0]}`);
        console.log(`File extension: ${fileArr[1]}`);
    }
}
solve('C:\\Internal\\training-internal\\Templa.te.pptx');