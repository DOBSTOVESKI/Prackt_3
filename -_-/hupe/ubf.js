console.log("Задание 2")
let z=1.23543;
let c=234.21321;
let n=5;
let q=z%1;
q=q*(10**n)
q=Math.trunc(q);
let w=c%1;
w=w*(10**n);
w=Math.trunc(w);
console.log("Остаток 'z'", q)
console.log("Остаток 'c'", w)
console.log("Остатки равны?")
console.log(q===w)
console.log("Остаток 'z' больше остатка 'с'?")
console.log(q>w)
console.log("Остаток 'z' меньше'c'?")
console.log(q<w)