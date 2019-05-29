
var gImgPath = "assets/images/"
var gAudPath = "assets/audio/"

const actorList = {
    TOMHANKS: 0,
    ROBINWRIGHT: 1,
    GARYSINISE: 2,
    SALLYFIELD: 3,

    JEFFGOLDBLUM: 4,
    SAMNEILL: 5,
    LAURADERN: 6,
    SAMUALLJACKSON: 7,

    JOHNTRAVOLTA: 8,
    KYRASEDGWICK: 9,
    FORESTWHITAKER: 10,
    ROBERTDUVALL: 11,

    VALKILMER: 12,
    SANDRABULLOCK: 13,
    RALPHFIENNES: 14,
    MICHELLEPFEIFFER: 15,

    NATHANLANE: 16,
    MATHEWBRODERICK: 17,
    JEREMYIRONS: 18,
    WHOOPIGOLDBERG: 19,

    LIVTYLER: 20,
    BENAFFLECK: 21,
    BRUCEWILLIS: 22,
    BILLYBOBTHORNTON: 23,

    CARYELWES: 24,
    ANDRETHEGIANT: 25,
    MANDYPATINKIN: 26,

    QUENTINTARANTINO: 27,
    UMATHURMAN: 28,

    RAMIMALEK: 29,
    JOSEPHMAZZELLO: 30,
    BENHARDY: 31,
    AARONMCCUSKER: 32,

    BRADLEYCOOPER: 33,
    LADYGAGA: 34,
    SAMELLIOTT: 35,
    ANTHONYRAMOS: 36,

    properties: [
        {name: "Tom Hanks", image: "tomhanks.jpg"}, // Forest Gump
        {name: "Robin Wright", image: "robinwright.jpg"},
        {name: "Gary Sinise", image: "garysinise.jpg"},
        {name: "Sally Field", image: "sallyfield.jpg"},
        {name: "Jeff Goldblum", image: "jeffgoldblum.jpg"}, // Jurassic Park
        {name: "Sam Neill", image: "samneill.jpg"},
        {name: "Laura Dern", image: "lauradern.jpg"},
        {name: "Samual L Jackson", image: "samualljackson.jpg"},
        {name: "John Travolta", image: "johntravolta.jpg"}, // Phenomenon
        {name: "Kyra Sedgwick", image: "kyrasedgwick.jpg"},
        {name: "Forest Whitaker", image: "forestwhitaker.jpg"},
        {name: "Rober Duvall", image: "robertduvall.jpg"},
        {name: "Val Kilmer", image: "valkilmer.jpg"}, // Prince of Egypt
        {name: "Sandra Bullock", image: "sandrabullock.jpg"},
        {name: "Ralph Fiennes", image: "ralphfiennes.jpg"},
        {name: "Michelle Pfeiffer", image: "michellepfeiffer.jpg"},
        {name: "Nathan Lane", image: "nathanlane.jpg"}, // Lion King
        {name: "Mathew Broderick", image: "matthewbroderick.jpg"},
        {name: "Jeremy Irons", image: "jeremyirons.jpg"},
        {name: "Whoopi Goldberg", image: "whoopigoldberg.jpg"},
        {name: "Liv Tyler", image: "livtyler.jpg"}, // Armageddon
        {name: "Ben Affleck", image: "benaffleck.jpg"},
        {name: "Bruce Willis", image: "brucewillis.jpg"},
        {name: "Billy Bob Thornton", image: "billybobthornton.jpg"},
        {name: "Cary Elwes", image: "caryelwes.jpg"}, // Princess Bride
        {name: "Andre The Giant", image: "andrethegiant.jpg"},
        {name: "Mandy Patinkin", image: "mandypatinkin.jpg"},
        {name: "Quentin Tarantino", image: "quentintarantino.jpg"}, // pulp fiction
        {name: "Uma Thurman", image: "umathurman.jpg"},
        {name: "Rami Malek", image: "ramimalek.jpg"}, // Bohemian Rhapsody
        {name: "Joseph Mazzello", image: "josephmazzello.jpg"}, 
        {name: "Ben Hardy", image: "benhardy.jpg"}, 
        {name: "Aaron Mccusker", image: "aaronmccusker.jpg"}, 
        {name: "Bradley Cooper", image: "bradleycooper.jpg"}, // A star is born
        {name: "Lady Gaga", image: "ladygaga.jpg"}, 
        {name: "Sam Elliott", image: "samelliott.jpg"},
        {name: "Anthony Ramos", image: "anthonyramos.jpg"}
    ]
}

var gWords = [
    { title:"Forrest Gump",
        detail:"1994 - Drama", hint:"Life is like a box of chocolate!",
        img:"forest.jpg", music:"forrest.mp3",
        actors:[actorList.TOMHANKS, actorList.ROBINWRIGHT, actorList.GARYSINISE, actorList.SALLYFIELD] },

    { title:"Jurassic Park", 
        detail:"1993 - Adventure", hint:"Life will find the way!",
        img:"jurassic.jpg", music:"jurassic.mp3",
        actors:[actorList.JEFFGOLDBLUM, actorList.SAMNEILL, actorList.LAURADERN, actorList.SAMUALLJACKSON] },


    { title:"Phenomenon",
        detail:"1996 - Drama/Fantasy", hint:"No, I'll love you for the rest of mine!",
        img:"phenomenon.jpg", music:"phenomenon.mp3",
        actors:[actorList.JOHNTRAVOLTA, actorList.KYRASEDGWICK, actorList.FORESTWHITAKER, actorList.ROBERTDUVALL] },


    { title:"Prince of Egypt", 
        detail:"1998 - Drama/Fantasy/Anim", hint:"So everything I thought, everything I am, is a lie.",
        img:"prince.jpg", music:"prince.mp3",
        actors:[actorList.VALKILMER, actorList.SANDRABULLOCK, actorList.RALPHFIENNES, actorList.MICHELLEPFEIFFER] },


    { title:"Lion King",
        detail:"1994 - Adventure/Drama/Anim", hint:"Simba",
        img:"lion.jpg", music:"lion.mp3",
        actors:[actorList.NATHANLANE, actorList.MATHEWBRODERICK, actorList.JEREMYIRONS, actorList.WHOOPIGOLDBERG] },

    { title:"Armageddon",
        detail:"1993 - Adventure", hint:"Meteor is coming to earth!",
        img:"armageddon.jpg", music:"armageddon.mp3",
        actors:[actorList.LIVTYLER, actorList.BENAFFLECK, actorList.BRUCEWILLIS, actorList.BILLYBOBTHORNTON] },
    
    { title:"The Princess Bride",
        detail:"1987 - Fantasy/Romance", hint:"When I was your age, television was called books.!",
        img:"armageddon.jpg", music:"princessbride.mp3",
        actors:[actorList.CARYELWES, actorList.ROBINWRIGHT, actorList.ANDRETHEGIANT, actorList.MANDYPATINKIN] },
        
    { title:"Pulp Fiction",
        detail:"1993 - Adventure", hint:"Any time of the day is a good time for pie.",
        img:"pulpfiction.jpg", music:"pulpfiction.mp3",
        actors:[actorList.QUENTINTARANTINO, actorList.UMATHURMAN, actorList.JOHNTRAVOLTA, actorList.SAMUALLJACKSON] },

    { title:"Bohemian Rhapsody",
        detail:"1993 - Adventure", hint:"I'm just a musical prostitute, my dear.",
        img:"bohemian.jpg", music:"bohemian.mp3",
        actors:[actorList.RAMIMALEK, actorList.JOSEPHMAZZELLO, actorList.BENHARDY, actorList.AARONMCCUSKER] },

    { title:"A Star Is Born",
        detail:"1993 - Adventure", hint:"I just wanted to take another look at you.",
        img:"starisborn.jpg", music:"starisborn.mp3",
        actors:[actorList.BRADLEYCOOPER, actorList.LADYGAGA, actorList.SAMELLIOTT, actorList.ANTHONYRAMOS] },

];


