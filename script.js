const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const scoreBar = document.getElementById("scoreBar");

let score = 0;

document.addEventListener("keydown", function(event){
    jump();
});

function jump () {
    if(dino.classList !="jump"){
        dino.classList.add("jump")
    }
    setTimeout(function(){
        dino.classList.remove("jump")
    }, 500)
}

let isAlive = setInterval (function(){
    score = score + 1;
    scoreBar.textContent = "Score: " + score;
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if(cactusLeft < 40 && cactusLeft > 0 && dinoTop >= 140){
        alert("Game Over!");
        score = 0;
    }
},80)