let extraQ2 = "Well somehow your friends are very convincing and drags you out anyway. Sneaky friends";
let extraQ3a = "YAS! We were thinking the same thing!";
let extraQ3b = "naaah we already actually decided. hehe. We were just asking you out of courtsey. put on a cute bikini";
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

function next(previous, next) {
    var ne = document.getElementById(next);
    var pr = document.getElementById(previous);
    ne.style.display = "block";
    pr.style.display = "none";
}

function add(letters){
    for (let letter of letters){
        if (mbtiScore.hasOwnProperty(letter)) {
            mbtiScore[letter]++;
        }
    }
}

function done() {
    let final = ""
    let letters = ["e", "i", "n", "s", "f", "t", "j", "p"];
    for (let i = 0; i < 8; i+=2) {
        if (mbtiScore[letters[i]] > mbtiScore[letters[i+1]]) {
            final += letters[i]
        } else {
            final += letters[i+1]
        }
    }
    var resultText = document.getElementById("mbti");
    resultText.textContent = final;
}
