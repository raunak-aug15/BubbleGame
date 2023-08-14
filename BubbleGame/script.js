var timer = 60;
var score=0;
var rn;
function increaseScore()
{
    score+=10;
    document.querySelector("#scoreVal").textContent=score;
}
function hitValue()
{
     rn=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=rn;
}
function makeBubble() {
  var clutter = "";
  for (var i = 1; i <= 160; i++) {
    var temp = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${temp}</div>`;
  }
  document.querySelector(".pbtm").innerHTML = clutter;
}
function runTime() {
 var timeint= setInterval(function () {
    if(timer>0){
        timer--;
    document.querySelector("#timeValue").textContent = timer;
    }
    else{
        clearInterval(timeint);
        document.querySelector(".pbtm").innerHTML=`<h1?>Game Over</h1?`;
    }
    
  }, 1000);
}

document.querySelector(".pbtm").addEventListener('click',function(details)
{
    var clickedNum=Number(details.target.textContent);
    if(clickedNum===rn)
    {
      increaseScore();
      makeBubble();
      hitValue();

    }
})

hitValue();
runTime();
makeBubble();

