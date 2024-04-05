var timer=60;
var score = 0;
var hitVal=0;

function makeBubble(){
    var container = "";

for(var i=1; i<=180;i++){
    var rn = Math.floor(Math.random()*10);
    container+=`<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbot").innerHTML= container;

}
function click(){
    document.querySelector("#pbot").addEventListener("click",function(detail){
             var clickedNumber =(Number(detail.target.textContent));
             if(clickedNumber===hitVal){

                incScore();
                makeBubble();
                getNewHit();
            }else {makeBubble();}

    });
    
    
}
function getNewHit(){
  hitVal= Math.floor(Math.random()*10)
  document.querySelector("#hitVal").textContent = hitVal   
}
function incScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;

}

function setTimer(){
   
    var a=setInterval(
        function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerValue").textContent=timer;

        }else{
            clearInterval(a);
            document.querySelector("#pbot").innerHTML = `<h1> Game over:</h1> 
            </br> <h1>your score is ${score}</h1>`
            
        }
       
    },1000)
}
function all(){
    makeBubble();
setTimer();
click();
getNewHit();
}
all();
