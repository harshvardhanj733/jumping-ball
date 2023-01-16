let play = ()=>{
    homeHeader.style.display = "none";
    playButtonSection.style.display = "none";
    playHeader.style.display = "flex";
    playArea.style.display = "flex";
    setInterval(gravity, 60);
}

let x = 10;
let gravity = ()=>{
    ball.style.top = `${x + 1}vh`
    if(x<77.2){x+=1;}   
}

let antiGravity = ()=>{
    ball.style.top = `${x-5}vh`; 
    if(x>1){x-=5;}
}

document.body.addEventListener("keypress", function (event) {
    if (event.key === " ") {
        antiGravity();
    }
});
