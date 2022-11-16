function task1(){
    console.log("Задание 1");
    let allBox=[];
    let badBox=[];
    let goodBox=[];
    let roll=0;
    let boxMaster=["gmai.com","mail.com","yandex.ru","hotmail.com","yahoo!.com","lavabit.com","FastMail.com","pochta.ru","rambler.ru","lycos.com"];
    for(;roll<10;){
        roll+=1;
        allBox.push(" "+Math.trunc(Math.random()*10-0)+"@"+boxMaster[Math.trunc(Math.random()*10-0)]);
    }
    roll=0;
    for(;roll<3;){
        roll+=1;
        badBox.push(allBox[Math.trunc(Math.random()*10-0)]);
    }
    roll=0;
    for(;allBox.length>roll;){
        if (allBox[roll]==badBox[0]){
            roll+=1;
        } else{
            if(allBox[roll]==badBox[1]){
                roll+=1;
            } else{
                if(allBox[roll]==badBox[2]){
                    roll+=1;
                }
                else{
                    goodBox.push(allBox[roll]);
                    roll+=1;
                }
            }
        }
    }
    console.log("Вся почта: "+allBox);
    console.log("Почта в черном списке: "+badBox);
    console.log("Почта в белом списке: "+goodBox);
}
task1();
function cart(basketAmount, countGoods, promo = null) {
    let totalAmount = basketAmount;
  
    if (promo = 'ДАРИМ300' && basketAmount < 300) {
      totalAmount = 0;
      console.log('ДАРИМ300 ' + totalAmount);
    } else if (promo = 'ДАРИМ300') {
      totalAmount -= 300;
      console.log('ДАРИМ300 ' + totalAmount);
    }
    
    if (countGoods >= 10) {
      const countFiveProcent = basketAmount/100*5;
      totalAmount -= countFiveProcent;
      console.log('больше 10 товаров ' + totalAmount);
    }
    
    if (basketAmount > 50000) {
      const countTwentyProcent = totalAmount/100*20;
      const countDifference = totalAmount - 50000;
      totalAmount = countDifference - countTwentyProcent;
      console.log('больше 50 000 ₽ ' + totalAmount);
    }
    
    if (promo = 'СКИДКА15' && basketAmount >= 20000) {
      const countFifteenProcent = totalAmount/100*15;
      totalAmount -= countFifteenProcent;
      console.log('СКИДКА15 ' + totalAmount); 
    }
    console.log('Стоимость равна ' + totalAmount);
  }
  
  cart(100000, 12, 'ДАРИМ300');
  //BRUH