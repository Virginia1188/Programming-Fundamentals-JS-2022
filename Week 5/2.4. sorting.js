function sorting(nums) {
    let smallToBig = nums.sort((a, b) => a - b);
    for (let j = 0; j < nums.length; j++) {
        let biggestNum = nums[nums.length - 1];
        nums.splice(j + j, 0, biggestNum);
        nums.pop();
    }

    console.log(nums.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);