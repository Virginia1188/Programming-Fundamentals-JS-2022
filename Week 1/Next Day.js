function solve(year, month, day){
    let next = new Date(year,month,day);
   // let next = new Date(current);
   // next.setDate(current.getDate() + 1);
   next.setDate(next.getDate() + 1);
   let formatted_date = next.getFullYear() + "-" + next.getMonth() + "-" + next.getDate();
   
   
    
   if(next.getDate() == 31 && next.getMonth() == 4 || next.getMonth() == 6 || next.getMonth() == 9 || next.getMonth() == 11){
    formatted_date = next.getFullYear() + "-" + (next.getMonth() + 1) + "-" + (next.getDate() - 30);
    console.log(formatted_date);
   }else if(next.getDate() == 30 && next.getMonth() == 2){
    formatted_date = next.getFullYear() + "-" + (next.getMonth() + 1) + "-" + (next.getDate() - 29);
    console.log(formatted_date);
   }else{
    if(next.getMonth() == 0){
        formatted_date = (next.getFullYear() -1 )+ "-" + (next.getMonth() + 12) + "-" + next.getDate();
        console.log(formatted_date);
    }else{
        console.log(formatted_date);
    }
   }

    
}
solve(2016,
    12,
    1)