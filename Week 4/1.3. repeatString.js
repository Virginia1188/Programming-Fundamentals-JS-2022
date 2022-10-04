function repeatString(string, repeat) {
    let newString = '';
    for (i = 0; i < repeat; i++) {
        newString += string;
    }
   // console.log(newString);
   return newString;
}
repeatString("String", 2);
