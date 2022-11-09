console.log("Задание 1");
let roadMines=[];
let m=0;
for(;m<10;){
let success=Math.random();
let success2=success>0.7;
roadMines.push(success2);
m+=1;
}
console.log(roadMines);
let i=0;
let y=2;
for(let road of roadMines){
    console.log("Танк переместился на позицию"+" "+ ++i);
    if(road===true){
        let lives=y--;
        console.log("Танк наехал на мину");
    }
    if(y<=0){
        let lives=y--;
        console.log("Танк уничтожен");
        break;
    }
    else {
    }
}