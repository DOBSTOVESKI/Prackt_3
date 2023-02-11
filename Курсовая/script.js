alert("ГБ ПОУ ТУЭТТ ИСП-1-20\nКурсовая работа\nШадрина Егора Дмитриевича\nСбей самолет");
alert('Нажмите "OK" для запуска');
var one2frie;
var hear;
var hear2;
var side;
var tick=0;
function l() {
    var q = document.getElementById('gun');
    if (parseInt(q.style.left) > 0) {        
        q.style.left = ((parseInt(q.style.left) - 70) + 'px');
        console.log(q.style.left);
        hear = q.style.left;
    }
}
function r() {
    var q = document.getElementById('gun');
    if (parseInt(q.style.left) < window.screen.availWidth-100) {
        q.style.left = ((parseInt(q.style.left) + 70) + 'px');
        console.log(q.style.left);
        hear = q.style.left;
    }
}
function s(){
    var w = document.getElementById('projectile');
    var timerId = setInterval(function(){
    w.style.top = ((parseInt(w.style.top) - 10) + 'px');
    w.style.opacity = (parseInt(w.style.opacity) + 1);
    console.log(w.style.top);
    }, 10);
    hear2=w.style.top;
    setTimeout(function() {
        clearInterval(timerId);
        w.style.top = ((parseInt(w.style.top)+1000)+'px');
        w.style.opacity = (parseInt(w.style.opacity)-100);
      }, 1000);
}

var timerId = setInterval(() => spawnPlane(), 2000);
function fluyPlaneR0(){
    
}
function spawnPlane(){
    //1820
    side=Math.random(0,2);
    side=Math.round(side);
    one2frie=Math.random(0,3);
    one2frie=Math.round(one2frie);
    if(side==0){
        if(one2frie>2){
            
        }
        console.log(side);
    }else{
        console.log(side);
    }
}