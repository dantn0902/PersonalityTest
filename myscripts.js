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

// [img, fact1, fact2, fact3, fact4, soulmate, enemy, art, friend dynamikk, enemy dynamikk]
let mbtiArrays = {
    intj: ["","the quiet but smart kid","lays low","no one thinks about you","fact4","enfp","esfp","tunge"],
    
    intp: ["","Teip over munnen klarer ikke engang å stoppe deg fra å yappe","nieche hobbies","starter setningen med 'teknisk sett...'","flørter med deg via Wikipedia-lenker","entj","esfj","lange"], 
    
    entj: ["","big boss CEO aura","biggest fish in the lake","vet alltid hvordan ting skal gjøres","fact4","intp","isfp","gjedde"],
    
    entp: ["","hobbit","livlig liten kar som liker å eksplorere","i'm just a guy","fact4","infj","istj","abbor"], 
    
    infj: ["","wholesome","backbone of every friend group","moral compass","fact4","enfp","estp","hyse"],
    
    infp: ["","følsom men med pigger", "ser alltid oppover","fact3","fact4","enfj","estj","fjesing"],
    
    enfj: ["","big boy energy","the big biys trenger en leder også", "passer på alle","fact4","infp","istp","tunfisk"], 
    
    enfp: ["","chaotic good", "elsker folk", "go with the flow man","fact4","infj",,"istj","reke"], 
    
    istj: ["","reliable but cold","logical default fish", "very structured","fact4","isfj","enfp","torsk"], 
    
    istp: ["","liker å mekke i fred", "trives i eget skjell", "problem solver alone","fact4","isfp","enfj", "ermittkreps"],
    
    estj: ["","i'm that bitch", "kontroll og orden", "they know what they want","fact4","isfj","infp", "harr"],
    
    estp: ["","forsvinner når tiden er rette", "mystisk", "elsker å reise langt","fact4","esfp","infj", "europeisk ål"],
    
    isfj: ["","ikke noe drama", "holder familien trygg","fact3","fact4","sefj","entp","sjøhest"],
    
    isfp: ["","artsy","sensitive med stil","100 eyes to appreciate your beauty","fact4","infp","entj","kamskjell"],
    
    esfj: ["", "gentle giant","will take care of you","alle elsker dem","fact4","isfj","intp","sjøku"],
    
    esfp: ["", "tiktok energy", "juicy lips for you", "center of attention","fact4","isfp","intj","berggylt"]
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
    document.getElementById("artstype").textContent = result[7]+"!";
    document.getElementById("bilde").src = result[0];
    document.getElementById("fact1").src = result[1];
    document.getElementById("fact2").src = result[2];
    document.getElementById("fact3").src = result[3];
    document.getElementById("fact4").src = result[4];
    document.getElementById("friend").src = result[5];
    document.getElementById("enemy").src = result[6];
}
