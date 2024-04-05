var timer=61;
function makeBubble(){
    var container = "";

for(var i=1; i<=180;i++){
    var rn = Math.floor(Math.random()*10);
    container+=`<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbot").innerHTML= container;

}

function getNewHit(){
    
}
var score;
function incScore(){
    score += 20;
    document.querySelector("#scoreval").innerHTML = score;

}

function setTimer(){
   
    var a=setInterval(
        function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerValue").textContent=timer;

        }else{
            
            clearInterval(a);
          
        }
       
    },1000)
}
makeBubble();
setTimer();
incScore();
