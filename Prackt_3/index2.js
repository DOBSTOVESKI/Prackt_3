let name=prompt("Введите имя: ");
let surname=prompt("Введите фамилию: ");
let upname=name.toUpperCase();
let upsurname=surname.toUpperCase();
let normalname=upname.substr(1);
let normalsurname=upsurname.substr(1);
normalname=normalname.toLowerCase();
normalsurname=normalsurname.toLowerCase();
let n_surname=upsurname[0];
let n_name=upname[0];
let fin_name=n_name+normalname;
let fin_surname=n_surname+normalsurname;
if(fin_name==name&&fin_surname==surname){
    alert(name+" "+surname+"            "+"Формат имени и фамилии корректен."); 
}
else{
    if(fin_name==name&&fin_surname!=surname){
        alert(name+" "+fin_surname+"            "+"Формат имени корректен, формат фамилии преведён в норму.");
    }
    else{
        if(fin_name!=name&&fin_surname==surname){
            alert(fin_name+" "+surname+"            "+"Формат имени приведён в норму, формат фамилии корректен.");
        }
        else{
            alert(fin_name+" "+fin_surname+"            "+"Форматы имени и фамилии приведены в норму.");
        }
    }
}