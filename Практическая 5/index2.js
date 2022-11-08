console.log("Задание 2");
let a=prompt("Введите строку: ");
let f=[];
let d=0;
let g=a.length;
let h=a.length;
for (;d<g;){
    let s=a[0];
    a=a.substring(1);
    f.unshift(s)
    d+=1;
}
console.log(f.join(''));