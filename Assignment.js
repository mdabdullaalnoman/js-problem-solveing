
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
