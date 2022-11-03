let pass=prompt("Введите Пароль: ");
if (pass.length>4&&/-|_/.test(pass)) 
{
    alert("Сильный пароль");
    }
    else{alert("Слабый пароль");
}