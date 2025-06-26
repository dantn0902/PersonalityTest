let extraQ2 = "Well somehow your friends are very convincing and drags you out anyway. Sneaky friends";
let extraQ3a = "YAS! We were thinking the same thing!";
let extraQ3b = "naaah we already actually decided. hehe. We were just asking you out of courtsey. put on a cute bikini";

function next(previous, next) {
    var n = document.getElementById(next);
    var p = document.getElementById(previous);
    n.style.display = "block";
    p.style.display = "none";
}
