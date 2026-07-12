// VØID Particle Stars

const background = document.querySelector(".background");

for(let i = 0; i < 120; i++){

    let star = document.createElement("span");

    star.className = "star";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.animationDuration =
    (Math.random() * 5 + 3) + "s";

    background.appendChild(star);

}


// Mouse glow effect

const glow = document.createElement("div");

glow.className = "glow";

document.body.appendChild(glow);


document.addEventListener("mousemove", e=>{

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});
const audio = document.getElementById("audio");
const play = document.getElementById("play");

const songs = [
    "song1.mp3",
    "song2.mp3",
    "song3.mp3"
];

let playing = false;


if(play){

play.addEventListener("click",()=>{

    if(audio.paused){

        audio.play();

        play.innerHTML="❚❚";

    }else{

        audio.pause();

        play.innerHTML="▶";

    }

});

}


function playSong(number){

    audio.src = songs[number];

    audio.play();

    play.innerHTML="❚❚";

}