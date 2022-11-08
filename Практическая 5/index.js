console.log("Задание 1");
let q=[];
let w=0;
let e=Math.trunc(Math.random()*(100-(-100))+(-100));
let r=Math.trunc(Math.random()*(100-(-100))+(-100));
let min=Math.min(e,r);
let max=Math.max(e,r);
let minus=max-min;
let count=Math.floor(Math.random()*minus);
for (;w<=count;){
    number=Math.trunc(Math.random()*(100-(-100))+(-100));
    w+=1;
    q.push(number);
}
console.log(q);