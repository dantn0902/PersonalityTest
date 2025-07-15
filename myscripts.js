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
    intj: ["","the quiet but smart kid","Viber for seg selv","Ser alt men ingen ser deg","Loner","enfp","esfp","Tunge"],
    
    intp: ["","Certified yapper","smart yapper","'umm actually....'","Aristoteles wannabe","entj","esfj","Lange"], 
    
    entj: ["","Big boss of the lake","Hard on the outside soft on the inside","'I want it I got it'","kontrollfreak","intp","isfp","Gjedde"],
    
    entp: ["","Rampete liten drittunge, men fremdeles favoritten","Starter drama fordi du kjeder deg","Liker utfordringer","Irriterende","infj","istj","Abbor"], 
    
    infj: ["","Wholesome","Hjelpsom, men vil ikke ha hjelp","Sårbar","'Its not a phase mom!'","enfp","estp","Knurr"],
    
    infp: ["","Gråter mot månen", "Lojal","Du tror du er dyp, men du er ikke det","Ser muligheter men tørr ikke gripe tak","enfj","estj","Fjesing"],
    
    enfj: ["","Ta vann over hodet","Leder fisker like store som seg selv", "Motiverer hverandre","Lever i store stimer","infp","istp","Tunfisk"], 
    
    enfp: ["","Svømmer i gigantiske stimer, men ingen vet hvor de skal", "Energisk og sprudlende", "'Go with the flow man'","Fullfører aldri, men optimistisk","infj",,"istj","Reke"], 
    
    istj: ["","Excel-fetish","Teachers pet", "Prøver for hardt","For strukturerte","isfj","enfp","Torsk"], 
    
    istp: ["","Loners at heart", "For mange hobbyer fordi du er aldri med folk", "Observant","Background character som tunge","isfp","enfj", "Ermittkreps"],
    
    estj: ["","Stoler ikke på andre", "God complex", "Hvorfor gi oppgaven til andre når jeg kan gjøre den bedre selv","Du vet hva du vil","isfj","infp", "Harr"],
    
    estp: ["","Bad communicator", "Intrusive thoughts", "Will fight a child and win","Will pick a fight with God","esfp","infj", "Europeisk ål"],
    
    isfj: ["","lojal mot de nærmeste", "Just a wholesome grandma","Tar vare på trandisjoner","Too cute to diss","sefj","entp","Sjøhest"],
    
    isfp: ["","Shallow","Adaptable","Delulu","Anxiety to the max","infp","entj","Kamskjell"],
    
    esfj: ["", "Gentle giant","Moren i venne gjengen","Alle elsker dem","Too cute to diss 2.0","isfj","intp","Sjøku"],
    
    esfp: ["", "Tiktok star wannabe", "Juicy lips for you", "Attention seeker","No real homies, aka. loner in the closet","isfp","intj","Berggylt"]
};

function neste(forrige, neste) {
    var ne = document.getElementById(neste);
    var fr = document.getElementById(forrige);
    ne.style.display = "block";
    fr.style.display = "none";
    /*
    document.getElementById(forrige).classList.add("hide");
    document.getElementById(neste).classList.remove("hide");
    */
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
    document.getElementById("fact1").textContent = result[1];
    document.getElementById("fact2").textContent = result[2];
    document.getElementById("fact3").textContent = result[3];
    document.getElementById("fact4").textContent = result[4];
    let friend = result[5];
    let enemy = result[6];
}
