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

// [img, fakta1, fakta2, fakta3, fakta4, soulmate, enemy, art, friend dynamikk, enemy dynamikk]
let mbtiArrays = {
    intj: ["fisker/tunge.png","the quiet but smart kid","Viber for seg selv","Ser alt men ingen ser deg","Loner","enfp","esfp","Tunge"],
    
    intp: ["fisker/lange.png","Certified yapper","smart yapper","'umm actually....'","Aristoteles wannabe","entj","esfj","Lange"], 
    
    entj: ["fisker/gjedde.png","Big boss of the lake","Hard on the outside soft on the inside","'I want it I got it'","kontrollfreak","intp","isfp","Gjedde"],
    
    entp: ["fisker/abbor.png","Rampete liten drittunge, men fremdeles favoritten","Starter drama fordi du kjeder deg","Liker utfordringer","Irriterende","infj","istj","Abbor"], 
    
    infj: ["fisker/knurr.png","Wholesome","Hjelpsom, men vil ikke ha hjelp","Sårbar","'Its not a phase mom!'","enfp","estp","Knurr"],
    
    infp: ["fisker/fjesing.png","Gråter mot månen", "Lojal","Du tror du er dyp, men du er ikke det","Ser muligheter men tørr ikke gripe tak","enfj","estj","Fjesing"],
    
    enfj: ["fisker/tunfisk.png","Ta vann over hodet","Leder fisker like store som seg selv", "Motiverer hverandre","Lever i store stimer","infp","istp","Tunfisk"], 
    
    enfp: ["fisker/reke.png","Svømmer i gigantiske stimer, men ingen vet hvor de skal", "Energisk og sprudlende", "'Go with the flow man'","Fullfører aldri, men optimistisk","infj",,"istj","Reke"], 
    
    istj: ["fisker/torsk.png","Excel-fetish","Teachers pet", "Prøver for hardt","For strukturerte","isfj","enfp","Torsk"], 
    
    istp: ["fisker/ermittkreps.png","Loners at heart", "For mange hobbyer fordi du er aldri med folk", "Observant","Background character som tunge","isfp","enfj", "Ermittkreps"],
    
    estj: ["fisker/harr.png","Stoler ikke på andre", "God complex", "Hvorfor gi oppgaven til andre når jeg kan gjøre den bedre selv","Du vet hva du vil","isfj","infp", "Harr"],
    
    estp: ["fisker/europeisk_ål.png","Bad communicator", "Intrusive thoughts", "Will fight a child and win","Will pick a fight with God","esfp","infj", "Europeisk ål"],
    
    isfj: ["fisker/tunge.png","lojal mot de nærmeste", "Just a wholesome grandma","Tar vare på trandisjoner","Too cute to diss","sefj","entp","Sjøhest"],
    
    isfp: ["fisker/kamskjell.png","Shallow","Adaptable","Delulu","Anxiety to the max","infp","entj","Kamskjell"],
    
    esfj: ["fisker/sjøku.png", "Gentle giant","Moren i venne gjengen","Alle elsker dem","Too cute to diss 2.0","isfj","intp","Sjøku"],
    
    esfp: ["fisker/berggylt.png", "Tiktok star wannabe", "Juicy lips for you", "Attention seeker","No real homies, aka. loner in the closet","isfp","intj","Berggylt"]
};

function neste(forrige, neste) {
    document.getElementById(neste).style.display = "flex";
    document.getElementById(forrige).style.display = "none";
    if (forrige=="intro") {
        document.getElementById("phone").style.display = "flex";
    } else if (forrige=="q2") {
        document.getElementById("phone").style.display = "none";
    }
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
    let resultat = mbtiArrays[mbti];
    document.getElementById("artstype").textContent += resultat[7]+"!";
    document.getElementById("bilde").src = resultat[0];
    document.getElementById("fakta1").textContent = resultat[1];
    document.getElementById("fakta2").textContent = resultat[2];
    document.getElementById("fakta3").textContent = resultat[3];
    document.getElementById("fakta4").textContent = resultat[4];
    let venn = mbtiArrays[resultat[5]];
    let fiende = mbtiArrays[resultat[6]];
    document.getElementById("venn").src = venn[0];
    document.getElementById("fiende").src = fiende[0];
}
