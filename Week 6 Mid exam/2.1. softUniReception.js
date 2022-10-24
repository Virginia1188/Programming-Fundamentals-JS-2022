function softUniReception(input) {
    let firstEmp = Number(input.shift());
    let secondEmp = Number(input.shift());
    let thirdEmp = Number(input.shift());
    let students = Number(input.shift());
    let hours = 0;

    while (students > 0) {
        hours++;
        if (hours % 4 === 0) {
            continue;
        } else {
            students -= firstEmp;
            students -= secondEmp;
            students -= thirdEmp;
        }
    }
    console.log(`Time needed: ${hours}h.`);

}
softUniReception(['3','2','5','40']);