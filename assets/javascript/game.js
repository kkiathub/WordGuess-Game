const MAX_GUESSES = 12;
var gValidChar = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

var game = {

    numWins: 0,
    numGuesses: 0,
    letterPicked: [],
    wordId: -1,
    wordShown: "",

    displayWord: function() {
        document.getElementById("textWins").textContent         = this.numWins;
        document.getElementById("textNumGuesses").textContent   = this.numGuesses;
        document.getElementById("currentWord").textContent      = this.wordShown;
        document.getElementById("lettersPicked").textContent    = this.letterPicked;
    },

    newWord: function() {
        this.numGuesses     = MAX_GUESSES;
        this.letterPicked   = [];
        this.wordShown      = "";
        this.wordId         = Math.floor(Math.random() * gWords.length);
        for(var i=0; i<gWords[this.wordId].title.length; i++) {
            if (gWords[this.wordId].title[i] === " ") {
                this.wordShown += " ";
            } else {
                this.wordShown += "_";
            }
        }
        this.displayWord();
    },

    newGame: function() {
        this.numWins = 0;
        this.newWord();
    },

    revealInfo: function() {
        var selected = gWords[this.wordId];
        console.log(selected.img);
        document.getElementById("img-win").setAttribute("src", gImgPath + selected.img);
    },

    letterAlreadyPicked: function(letter) {
        for(var i=0; i<this.letterPicked.length; i++) {
            if (letter.toUpperCase() === this.letterPicked[i].toUpperCase()) {
                return true;
            }
        }
        return false;
    },

    isValidChar: function(letter) {
        var n = gValidChar.indexOf(letter);
        return n >= 0;
    },

    wordCompleted: function() {
        if (this.wordShown === gWords[this.wordId].title) {
            return true;
        }
        return false;
    },

    verifyLetter: function(letter) {
        var found       = false;
        var word        = gWords[this.wordId].title;
        var tempWord    = "";

        if (!this.isValidChar(letter)) {
            return;
        }

        if (this.letterAlreadyPicked(letter)) {
            // play sound
            return;
        }

        for(var i=0; i<word.length; i++) {
            if (letter.toUpperCase() === word[i].toUpperCase()) {
                console.log(this.wordShown);
                tempWord += word[i];
                found = true;
            }
            else {
                tempWord += this.wordShown[i];
            }
        }

        if (found) {
            this.wordShown = tempWord;
            if  (this.wordCompleted()) {
                this.revealInfo();
                this.numWins++;
                this.newWord();
            }
        } else {
            this.numGuesses--;
            this.letterPicked.push(letter);
            if (this.numGuesses<1) {
                this.newWord();
            }
        }
        this.displayWord();
    }

};

document.onkeyup = function(event) {
    // Determines which key was pressed.
    var userKey = event.key;
    console.log(userKey);

    game.verifyLetter(userKey);
}

$("#btn-start").on("click", function() {
    game.newGame();
});

