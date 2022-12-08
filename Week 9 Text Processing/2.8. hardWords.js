function solve(input){
    let text = input.shift();
    let words = input.shift();
    let arrText = text.split(' ');
    let result = '';

    for (const word of words) {
        for (let i = 0; i < arrText.length; i++) {
            let el = arrText[i];
            if(el.startsWith('_') && el.endsWith('_') && el.length === word.length){
                arrText.splice(i,1,word);
            }else if(el.startsWith('_') && !el.endsWith('_') && el.length -1 === word.length){
                let symbol = el.split('').pop();
                arrText.splice(i,1,word + symbol);
            }

        }
        
    }
    console.log(arrText.join(' '));
}
solve(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]

);