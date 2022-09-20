    function pyramid(base,inc){

        let count = 0;
        let stone = 0;
        let marble = 0;
        let lapisLazuli = 0;
        let gold = 0;
        let height = 0;
        let step = Math.ceil(base / 2);
       
        for (i = base; i >= 1; i -= 2){
            count++;
            
            if(count == 5){
                count = 0;
                stone +=  ((i * i) - ((i * 4) - 4)) * inc;
                lapisLazuli += ((i * 4) - 4) * inc;
            }else if(i <= 2){
                gold =  (i* i) * inc; break;
            }else{
                stone +=  ((i * i) - ((i * 4) - 4)) * inc;
                marble += ((i * 4) - 4) * inc;
            }
        }
        console.log(`Stone required: ${Math.ceil(stone)}`);
        console.log(`Marble required: ${Math.ceil(marble)}`);
        console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
        console.log(`Gold required: ${Math.ceil(gold)}`);
        console.log(`Final pyramid height: ${Math.floor(step*inc)}`);
    }
    pyramid(11,
        1        
        )