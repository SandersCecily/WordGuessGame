$(document).ready( function () {
  //create a word bank
    let wordbank = ["roast", "bean", "espresso", "latte", "au lait", "cappucino", "americano", "affogato" , "cold brew", "cortado", "irish coffee", "direct trade", "single origin", "macchiato", "green bean", "ristretto"];

    //variables
    let lives = 10;
    let won = 0;
    let lost = 0;
    let wrongguess = [];


    //start/reset game
    $("button").click(function(){
        $(".targetme").empty();
        $(this).prop("disabled",true);
       
        let arr = [];
        arr = newGame();

        //display variables
        statdisplay(won, lost);

        //onkeyup/sensing player guesses
        document.onkeyup = function(event){
            let userguess = event.key;
            userguess = userguess.toLowerCase();
            let matches = /[a-z]/g;
            if (userguess.match(matches)){
                //if already guessed ignore
                if (wrongguess.includes(userguess)){
                    alert("You've guessed that letter before...");
                }
                //if not guessed check if correct
                //if not correct store -- if lives ran to zero add loss, display and make a new game
                else if (arr[1].search(userguess)===-1){
                    wrongguess.push(userguess);
                    $("#wrongguesses").text(wrongguess.join(", "));
                    lives--;
                    $("#lives").text(lives);
                    if (lives === 0){
                        lost++;
                        arr=newGame();
                    }
                }
                 else{
                     //record correct letter on screen
                     //if word is displayed start new game and display new stats
                     for (let j=0; j<arr[1].length; j++){
                        if (arr[1][j]===userguess){
                            arr[0][j]=userguess;
                            $(".targetme").text(arr[0].join(""));
                        }
                     //$(".targetme").text(arr[0].join(""));
                     if ($(".targetme").text()===arr[1]){
                        won++;
                        arr=newGame();
                    }
                }
                 }   
            }
            else{
                alert("Not valid input! Try again.");
            }
        };

    });//end button click & game start


    //created functions 
    //convert word to underscores
    function newGame(){
        let selected = pickword(wordbank);
        let word = wordbank[parseInt(selected)];
        $(".targetme").empty();
        let progressAnswer = [];
        for (let i =0; i < word.length; i++){
            if(word[i] === " "){
                progressAnswer[i] = " ";
            }
            else{
                progressAnswer[i] = "_";
            }
        }
        $(".targetme").text(progressAnswer.join(""));
        lives=10;
        wrongguess = [];
        statdisplay(won, lost);
        return [progressAnswer, word];
    };


    //pick a word from the word bank
    function pickword(arr){
        let selected = Math.floor(Math.random()*arr.length);
        return selected;
    };
    
    //update the stats w for win l for loss
    function statdisplay(w, l){
        $("#winner").text(w);
        $("#loser").text(l);
        $("#wrongguesses").text(wrongguess.join(", "));
        $("#lives").text(lives);
    };
});