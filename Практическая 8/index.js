console.log("Задание 1");
let objects=[{place:"Площадь Ленина",gpsPlace:"55.325682, 38.813787"},
{place:"Красная площадь",gpsPlace:"55.753544, 37.621202"},
{place:"Площадь независимости",gpsPlace:"50.450200, 30.523774"}];
let i=0;
function sercPlace(objects,key,value){
    let result = [];
    for (;i<objects.length;i++){
        let obj=objects[i];
        if (obj[key]===value)result.push(obj);
    }
    return result;
}
let filteredArray=sercPlace(objects,'place','Площадь Ленина');
console.log(filteredArray);