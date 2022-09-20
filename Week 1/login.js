function solve(input){
    let name = input[0];
    let str = input[1];
    index = 0;
    index++;
    let correctPass = "";
    let count = 0;
    
    for (i = 0; i <= name.length; i++){
        let currentChart = name.charAt(name.length - i);
        correctPass += currentChart;
        name.length--;
    }

    while(count <= 3){
        let currentStr = input[index];
        if(currentStr === correctPass){
            console.log(`User ${name} logged in.`);
            break;
        }else if(currentStr !== correctPass){
            count ++;
            if(count == 4){
                console.log(`User ${name} blocked!`); break;
            }
            console.log(`Incorrect password. Try again.`);
        }
      
        index++;
    }
    
}
solve(['Acer','login','go','let me in','recA'])
