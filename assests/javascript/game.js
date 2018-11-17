$(document).ready(function(){
//create a word bank
    let wordbank = ["roast", "bean", "espresso", "latte", "au lait", "cappucino", "americano", "affogato" , "cold brew", "cortado", "irish coffee", "direct trade", "single origin", "macchiato", "green bean", "ristretto"];

    
    //pick a word from the word bank
    function pickword(arr){
        let selected = Math.floor(Math.random()*arr.length);
        return selected;
    };


    //start/reset game
    $("button").click(function(){
        //making variables
        let selected = pickword(wordbank);
        let word = wordbank[parseInt(selected)];
        let lives = 10;
        let won = 0;
        let lost = 0;
        let wrongguess = [];

        //testin purpose
        console.log(word);
        newGame(word);

        //display variables

    });//end button click


    //convert word to underscores -- needed many times
    function newGame(word){
        let progressAnswer = [];
        for (let i =0; i < word.length; i++){
            if(word[i] === " "){
                progressAnswer[i] = " ";
            }
            else{
                progressAnswer[i] = "_";
            }
        }
        $(".targetme").html("<p>"+progressAnswer.join("")+"</p>");
    };//end newgame function

    // //displays word.
    // $(".targetme").html("<p>"+word+"</p>");
});