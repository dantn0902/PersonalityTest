let Q2a = "Joda";
let Q2b = "Yaaas"
let Q3a = "YAS! Tenkte det samme!";
let Q3b = "ehe vi har egt bestemt oss allerede. Ta på deg en søt bikini!";
let Q10 = "Og det har du rett i";
let mbtiScore = {
    e: 0,
    i: 0,
    n: 0,
    s: 0,
    f: 0,
    t: 0,
    p: 0,
    j: 0
};

// [img, fact1, fact2, fact3, fact4, friend1, friend2, enemy1, enemy2, art]
let mbtiArrays = {
    intj: ["","the quiet but smart kid","lays low","no one thinks about you","fact4","friend1","friend2","enemy1","enemy2","tunge"],
    
    intp: ["","always talks","nieche hobbies","fact3","fact4","friend1","friend2","enemy1","enemy2","lange"], 
    
    entj: ["","boss aura","biggest fish in the lake","vet alltid hvordan ting skal gjøres","fact4","friend1","friend2","enemy1","enemy2","gjedde"],
    
    entp: ["","hobbit","livlig liten kar som liker å eksplorere","i'm just a guy","fact4","friend1","friend2","enemy1","enemy2","abbor"], 
    
    infj: ["","wholesome","backbone of every friend group","moral compass","fact4","friend1","friend2","enemy1","enemy2","hyse"],
    
    infp: ["","følsom men med pigger", "ser alltid oppover","fact3","fact4","friend1","friend2","enemy1","enemy2","fjesing"],
    
    enfj: ["","big boy energy","the big biys trenger en leder også", "passer på alle","fact4","friend1","friend2","enemy1","enemy2","tunfisk"], 
    
    enfp: ["","chaotic good", "elsker folk", "go with the flow man","fact4","friend1","friend2","enemy1","enemy2","reke"], 
    
    istj: ["","reliable but cold","logical default fish", "very structured","fact4","friend1","friend2","enemy1","enemy2", "torsk"], 
    
    istp: ["","liker å mekke i fred", "trives i eget skjell", "problem solver alone","fact4","friend1","friend2","enemy1","enemy2", "ermittkreps"],
    
    estj: ["","i'm that bitch", "kontroll og orden", "they know what they want","fact4","friend1","friend2","enemy1","enemy2", "harr"],
    
    estp: ["","forsvinner når tiden er rette", "mystisk", "elsker å reise langt","fact4","friend1","friend2","enemy1","enemy2", "europeisk ål"],
    
    isfj: ["","ikke noe drama", "holder familien trygg","fact3","fact4","friend1","friend2","enemy1","enemy2","sjøhest"],
    
    isfp: ["","artsy","sensitive med stil","100 eyes to appreciate your beauty","fact4","friend1","friend2","enemy1","enemy2","kamskjell"],
    
    esfj: ["", "gentle giant","will take care of you","alle elsker dem","fact4","friend1","friend2","enemy1","enemy2","sjøku"],
    
    esfp: ["", "tiktok energy", "juicy lips for you", "center of attention","fact4","friend1","friend2","enemy1","enemy2","berggylt"]
};

function neste(forrige, neste) {
    var ne = document.getElementById(neste);
    var fr = document.getElementById(forrige);
    ne.style.display = "block";
    fr.style.display = "none";
}

function poeng(letters){
    for (let letter of letters){
        if (mbtiScore.hasOwnProperty(letter)) {
            mbtiScore[letter]++;
        }
    }
}

function done() {
    let mbti = ""
    let letters = ["e", "i", "n", "s", "f", "t", "j", "p"];
    for (let i = 0; i < 8; i+=2) {
        if (mbtiScore[letters[i]] > mbtiScore[letters[i+1]]) {
            mbti += letters[i]
        } else {
            mbti += letters[i+1]
        }
    }
    let result = mbtiArrays[mbti];
    document.getElementById("artstype").textContent = result[9]+"!";
    document.getElementById("bilde").src = result[0];
    document.getElementById("fact1").src = result[1];
    document.getElementById("fact2").src = result[2];
    document.getElementById("fact3").src = result[3];
    document.getElementById("fact4").src = result[4];
    document.getElementById("friend1").src = result[5];
    document.getElementById("friend2").src = result[6];
    document.getElementById("enemy1").src = result[7];
    document.getElementById("enemy2").src = result[8];
}
