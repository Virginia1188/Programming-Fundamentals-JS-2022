function bonusScoringSystem(input) {
    let students = Number(input.shift());
    let lecturesNum = Number(input.shift());
    let additionalBonus = Number(input.shift());
    let allAtt = input.map(Number);

    let maxAttendance = allAtt.reduce((a, b) => Math.max(a, b), -Infinity);
    let maxBonus = (maxAttendance / lecturesNum) * (5 + additionalBonus);
    //console.log(maxAttendance);
    //  let studentBonus = [];
    //
    //  for (let i = 0; i <= students; i++) {
    //
    //     let attendance = Number(input.shift())
    //      let bonus = (attendance / lecturesNum) * (5 + additionalBonus);
    //      studentBonus[i] = bonus;
    //  }
    //  studentAttendance.sort((a, b) => b - a);
    //  studentBonus.sort((a, b) => b - a);
    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${Math.ceil(maxAttendance)} lectures.`);
}
bonusScoringSystem([
    '1', '1', '1','0'
]

);