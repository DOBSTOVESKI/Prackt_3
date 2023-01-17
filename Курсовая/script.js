alert("ГБ ПОУ ТУЭТТ ИСП-1-20\nКурсовая работа\nШадрина Егора Дмитриевича\nСбей самолет");
alert('Нажмите "OK" для запуска');
var one2frie;
var hear;
var side;
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
        her = q.style.left;
    }
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
