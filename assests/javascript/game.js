//create a word bank
let wordbank = ["roast", "bean", "espresso", "latte", "au lait", "cappucino", "americano", "affogato" , "cold brew", "cortado", "irish coffee", "direct trade", "single origin", "macchiato", "green bean", "ristretto"];

//pick a word from the word bank -- works
function pickword(arr){
    let selected = Math.floor(Math.random()*arr.length);
    return selected;
};

//display the word -- broken, makes the word, cant display.
function displayword (arr, i){
    
    console.log(arr[i]);
};

let selected = pickword(wordbank);
parseInt(selected);
displayword(wordbank, selected);
//broken
$(".target").append("<p>"+ wordbank[selected] +"</p>");