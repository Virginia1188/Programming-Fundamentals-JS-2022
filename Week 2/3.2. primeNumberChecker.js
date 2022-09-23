function solve(num){
let flag = true;

    for(i = 2; i <= num; i++){
        if(num % i == 0 && i != num){
            flag = false;
            break;
        }else if ( num == i){
            flag = true;
        }
    }
        if(flag == false){
          console.log(`false`);
        }else if(flag == true){
            console.log(`true`);
        }
   
}
solve(7)