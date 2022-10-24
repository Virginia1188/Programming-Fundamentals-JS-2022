function sortArray(arrToSort) {
    let sortedArr = arrToSort
        .sort((a,b) => a.localeCompare(b))
        .sort((a, b) => a.length - b.length);
    console.log(sortedArr.join('\n'));
}
sortArray(['test',
'Deny',
'omen',
'Default']);