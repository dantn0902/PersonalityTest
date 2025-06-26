let extraQ2 = "Well somehow your friends are very convincing and drags you out anyway. Sneaky friends";
let extraQ3a = "YAS! We were thinking the same thing!";
let extraQ3b = "naaah we already actually decided. hehe. We were just asking you out of courtsey. put on a cute bikini";

function show(next) {
    var x = document.getElementById(next);
    if(x.style.display === "none"){
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function hide() {}
