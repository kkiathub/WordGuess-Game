const MAX_GUESSES = 12;

var game = {

    numWins: 0,
    numGuesses: 0,
    letterPicked: [],
    wordId: -1,
    wordShown: "",

    displayWord: function() {
        document.getElementById("currentWord").textContent = this.wordShown;
    },

    newWord: function() {
        this.numGuesses     = MAX_GUESSES;
        this.letterPicked   = [];
        this.wordShown      = "";
        this.wordId         = Math.floor(Math.random() * words.length);
        for(var i=0; i<words[this.wordId].title.length; i++) {
            this.wordShown += "_";
        }
        this.displayWord();
    },

     verifyLetter: function(letter) {
        var found       = false;
        var word        = words[this.wordId].title;
        var tempWord    = "";

        for(i=0; i<word.length; i++) {
            if (letter.toUpperCase() === word[i].toUpperCase()) {
                console.log(this.wordShown);
                tempWord += word[i];
                console.log("got it : " + word[i] + " " + this.wordShown[i]);
                found = true;
            }
            else {
                tempWord += this.wordShown[i];
            }
         }

         if (found) {
            this.wordShown = tempWord;
            game.displayWord();
         }
    }

};

document.onkeyup = function(event) {
    // Determines which key was pressed.
    var userKey = event.key;
    console.log(userKey);

    game.verifyLetter(userKey);
}
console.log(words.length);
console.log("start " + game.wordId);
game.newWord();
console.log("ready " + game.wordId + " " + words[game.wordId].title);

