console.log("Задание 2");
let Anker =[{value:"Отвертка",label:"Розетка"},
  {value:"Отвертка",label:"Отвертка"},
  {value:"Болт",label:"Болт"}];
function CountryList(Anker, str){
    let body=document.body;
    let select=body.appendChild(document.createElement("select"));
    Anker.forEach(function(Element){
    let option = document.createElement("option");
    option.value = Element.value;
    option.innerHTML = Element.label;
    select.appendChild(option);
    if (option.value===str) {
      option.setAttribute("selected",true);
    }
    });
  return select;
}
CountryList(Anker,"Отвертка");