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
        
        var newId = this.wordId;
        for (;newId===this.wordId;) {
            newId = Math.floor(Math.random() * gWords.length);
        }
        this.wordId = newId;

        for(var i=0; i<gWords[this.wordId].title.length; i++) {
            if (gWords[this.wordId].title[i] === " ") {
                this.wordShown += " ";
            } else {
                this.wordShown += "_";
            }
        }
        this.displayWord();
        $("#text-hint").text("");
    },

    newGame: function() {
        this.numWins = 0;
        this.newWord();
    },

    revealInfo: function() {
        var selected = gWords[this.wordId];

        $(".card-title").text(selected.title);
        $(".card-text").text(selected.detail);

        document.getElementById("img-content").setAttribute("src", gImgPath + selected.img);
        document.getElementById("snd-name").setAttribute("src", gAudPath + selected.music);
        var audio = document.getElementById("snd-selected");
        audio.load();
        audio.play();
        
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

    beep: function() {
        var beep = document.getElementById("snd-beep");
        beep.play();
    },

    verifyLetter: function(letter) {
        var found       = false;
        var word        = gWords[this.wordId].title;
        var tempWord    = "";

        if (!this.isValidChar(letter)) {
            this.beep();
            return;
        }

        if (this.letterAlreadyPicked(letter)) {
            // play sound
            this.beep();
            return;
        }

        for(var i=0; i<word.length; i++) {
            if (letter.toUpperCase() === word[i].toUpperCase()) {
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
    },

    isGameStarted: function() {
        return this.wordId>=0;
    }

};

document.onkeyup = function(event) {
    // Determines which key was pressed.
    if (!game.isGameStarted()) {
        $("#text-help").text("Click START to begin!");
        return;
    }
    var userKey = event.key;
    game.verifyLetter(userKey);
}

$("#btn-start").on("click", function() {
    $("#text-help").text("");
    game.newGame();
    $("#btn-hint").focus();
});

$("#btn-hint").on("click", function() {
    if (game.wordId<0) {
        return;
    }

    $("#text-hint").text(gWords[game.wordId].hint);
});

$(".btn-replay").on("click", function() {
    var audio = document.getElementById("snd-selected");
    audio.load();
    audio.play();
});

$(".btn-play").on("click", function() {
    var audio = document.getElementById("snd-selected");
    audio.play();
});

$(".btn-stop").on("click", function() {
    var audio = document.getElementById("snd-selected");
    audio.pause();
});
