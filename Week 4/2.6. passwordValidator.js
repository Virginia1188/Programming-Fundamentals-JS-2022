function passwordValidator(inputPassword) {
    function includesSpecialCharacters(inputPassword) {
        let specialChars = /[` !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        return specialChars.test(inputPassword);
    }

    let validationCheck = true;

    let passToArry = inputPassword.split('');
    let numOfNumbers = 0;
    for (let i = 0; i < passToArry.length; i++) {
        let currentElement = passToArry[i];
        let isItANumber = /[1234567890]/;
        if (isItANumber.test(currentElement) === true) {
            numOfNumbers++;
        }
    }
    if (passToArry.length < 6 || passToArry.length > 10) {
        console.log("Password must be between 6 and 10 characters");
        validationCheck = false;
    }
    if (includesSpecialCharacters(inputPassword) === true) {
        console.log("Password must consist only of letters and digits");
        validationCheck = false;
    }
    if (numOfNumbers < 2) {
        console.log("Password must have at least 2 digits");
        validationCheck = false;
    }
    if (validationCheck) {
        console.log("Password is valid");
    }
}
passwordValidator('logIn');