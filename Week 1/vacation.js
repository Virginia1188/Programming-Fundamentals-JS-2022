function vacation(group,type,day){
    let price = 0;
    if(type === "Students"){
        if (day === "Friday"){
            price = group * 8.45;
        }else if(day === "Saturday"){
            price = group * 9.80;
        }else if (day === "Sunday"){
            price = group * 10.46;
        }
        if(group >= 30){
            price = price * 0.85;
        }
    }else if (type === "Business"){
        if (day === "Friday"){
            price = group * 10.90;
        }else if(day === "Saturday"){
            price = group * 15.60;
        }else if (day === "Sunday"){
            price = group * 16;
        }
        if(group >= 100){
            price = (price / group) * (group - 10);
        }
    }else if (type === "Regular"){
        if (day === "Friday"){
            price = group * 15;
        }else if(day === "Saturday"){
            price = group * 20;
        }else if (day === "Sunday"){
            price = group * 22.5;
        }
        if(group >= 10 && group <= 20){
            price = price * 0.95;
        }
    }
    console.log(`Total price: ${price.toFixed(2)}`);
    
}
vacation(40,
    "Regular",
    "Saturday"
    )