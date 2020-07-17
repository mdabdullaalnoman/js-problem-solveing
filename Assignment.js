
//1 feet to mile

function feetToMile(feet){
    var mile = feet/5280
return mile;
}


//2 wood calculator

function woodCalculator(chair, table, bed){
    var chairCount = 1*chair;
    var tableCount = 3*table;
    var bedCount = 5*bed;
    var total = chairCount + tableCount + bedCount;
    return total;
}



//4 tinyFriend

function tinyFrind(name){
    var tinyName = name[0];

    for( var i = 0; i < name.length ; i++){
        var currentName = name[i];
        if(tinyName.length < currentName.length){
            currentName = tinyName;
        }
    }
    return currentName;
}


//3 brickCalculator
funtion brickCalculator(floor){
    
   var floorNum = 99;
   
   if(floorNum <= 10){
       var total1 = 15*floorNum*1000;
       console.log(total1);
   }
   else if(floorNum > 10 && floorNum <= 20){
       var first10 = 10*15*1000;
       var extra = (floorNum-10)*12*1000;
       total2 = first10 + extra;
       console.log(total2);
   }
   else{
       var ten = 10*15*1000;
       var twenty =10*12*1000;
       var extra2 = (floorNum-20)*1000;
       
       var tota3 = ten +twenty +extra2;
       console.log(tota3);
   }
  
}
