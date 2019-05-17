//@ts-check
function expandRegion(region) {

    let countVar = "to" + region;
    let costVar = "to" + region + "Count";
    let cost = $('#' + costVar).val();
    let count = $('#' + countVar).text();

    console.log(countVar);
    console.log(costVar);
    console.log(cost);
    //console.log(count);

    return;

    if (coins >= cost) { 
        count = count + 1; 
        coins = coins - cost; 

        document.getElementById(countVar).innerHTML = countVar; 
        document.getElementById('coins').innerHTML = accounting.formatMoney(coins); 
    };

    var nextCost = Math.floor(currentCost * Math.pow(1.1, count)); 
    document.getElementById(costVar).innerHTML = accounting.formatMoney(nextCost); 
};

function expandTurkey() {
    var cost = Math.floor(toTurkeyCost * Math.pow(1.1, toTurkey)); 
    if (coins >= cost) { 
        toTurkey = toTurkey + 1; 
        coins = coins - cost; 

        document.getElementById("toTurkey").innerHTML = toTurkey; 
        document.getElementById('coins').innerHTML = accounting.formatMoney(coins); 
    };

    var nextCost = Math.floor(toTurkeyCost * Math.pow(1.1, toTurkey)); 
    document.getElementById("toTurkeyCost").innerHTML = accounting.formatMoney(nextCost); 
};

function expandIndonesia() {
    var cost = Math.floor(toIndonesiaCost * Math.pow(1.1, toIndonesia)); 
    if (coins >= cost) { 
        toIndonesia = toIndonesia + 1; 
        coins = coins - cost; 

        document.getElementById("toIndonesia").innerHTML = toIndonesia; 
        document.getElementById('coins').innerHTML = accounting.formatMoney(coins); 
    };

    var nextCost = Math.floor(toIndonesiaCost * Math.pow(1.1, toIndonesia)); 
    document.getElementById("toIndonesiaCost").innerHTML = accounting.formatMoney(nextCost); 
};

function expandRussia() {
    var cost = Math.floor(toRussiaCost * Math.pow(1.1, toRussia)); 
    if (coins >= cost) { 
        toRussia = toRussia + 1; 
        coins = coins - cost; 

        document.getElementById("toRussia").innerHTML = toRussia; 
        document.getElementById('coins').innerHTML = accounting.formatMoney(coins); 
    };

    var nextCost = Math.floor(toRussiaCost * Math.pow(1.1, toRussia)); 
    document.getElementById("toRussiaCost").innerHTML = accounting.formatMoney(nextCost); 
};

function expandJapan() {
    var cost = Math.floor(toJapanCost * Math.pow(1.1, toJapan)); 
    if (coins >= cost) { 
        toJapan = toJapan + 1; 
        coins = coins - cost; 

        document.getElementById("toJapan").innerHTML = toJapan; 
        document.getElementById('coins').innerHTML = accounting.formatMoney(coins); 
    };

    var nextCost = Math.floor(toJapanCost * Math.pow(1.1, toJapan)); 
    document.getElementById("toJapanCost").innerHTML = accounting.formatMoney(nextCost); 
};

function expandIndia() {
    var cost = Math.floor(toIndiaCost * Math.pow(1.1, toIndia)); 
    if (coins >= cost) { 
        toIndia = toIndia + 1; 
        coins = coins - cost; 

        document.getElementById("toIndia").innerHTML = toIndia; 
        document.getElementById('coins').innerHTML = accounting.formatMoney(coins); 
    };

    var nextCost = Math.floor(toIndiaCost * Math.pow(1.1, toIndia)); 
    document.getElementById("toIndiaCost").innerHTML = accounting.formatMoney(nextCost); 
};

function expandChina() {
    var cost = Math.floor(toChinaCost * Math.pow(1.1, toChina)); 
    if (coins >= cost) { 
        toChina = toChina + 1; 
        coins = coins - cost; 

        document.getElementById("toChina").innerHTML = toChina; 
        document.getElementById('coins').innerHTML = accounting.formatMoney(coins); 
    };

    var nextCost = Math.floor(toChinaCost * Math.pow(1.1, toIndia)); 
    document.getElementById("toChinaCost").innerHTML = accounting.formatMoney(nextCost); 
};