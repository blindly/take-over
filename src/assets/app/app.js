//@ts-check

/**
 * 
 * Global
 * 
 */
var coins = 0;

//*****  Count *****//
// Asia
var toTurkey = 0;
var toIndonesia = 0;
var toRussia = 0;
var toJapan = 0;
var toIndia = 0;
var toChina = 0;
//

//*****  Cost *****//

// Start of ASIA
var toTurkeyCost = 100;
var toIndonesiaCost = 500;
var toRussiaCost = 1000;
var toJapanCost = 1500;
var toIndiaCost = 2000;
var toChinaCost = 2500;
//


//*****  Exponential *****//

// Start of ASIA
var toTurkeyPower = 10;
var toIndonesiaPower = 50;
var toRussiaPower = 100;
var toJapanPower = 150;
var toIndiaPower = 200;
var toChinaPower = 250;
//

// Value of a click
var work = 2;

// Save
var save = {};
var savegame = null;

/** Revenue */

function revenueGeneration(region, power, revenueDiv) {

    console.log(region + "," + power + "," + revenueDiv);

    if (region > 0) {
        var new_revenue = Math.floor(power * Math.pow(1.1, region));
        coins = coins + new_revenue;
    }
    else {
        new_revenue = 0;
    }

    document.getElementById("coins").innerHTML = accounting.formatMoney(coins);
    document.getElementById(revenueDiv).innerHTML = accounting.formatMoney(new_revenue);

    //console.log("Revenue for " + revenueDiv + " is " + new_revenue);

    return new_revenue;
}

function revenueCalculation() {

    toTurkeyRevenue = revenueGeneration(toTurkey, toTurkeyPower, 'toTurkeyRevenue');
    toIndonesiaRevenue = revenueGeneration(toIndonesia, toIndonesiaPower, 'toIndonesiaRevenue');
    toRussiaRevenue = revenueGeneration(toRussia, toRussiaPower, 'toRussiaRevenue');
    toJapanRevenue = revenueGeneration(toJapan, toJapanPower, 'toJapanRevenue');
    toIndiaRevenue = revenueGeneration(toIndia, toIndiaPower, 'toIndiaRevenue');
    toChinaRevenue = revenueGeneration(toChina, toChinaPower, 'toChinaRevenue');

    var revenue = toTurkeyRevenue + toIndonesiaRevenue + toRussiaRevenue + toJapanRevenue + toIndiaRevenue + toChinaRevenue;
    document.getElementById("revenue").innerHTML = accounting.formatMoney(revenue);
}

revenueCalculation();


/**
 * Load
 */

try {
    savegame = JSON.parse(localStorage.getItem("save"));
    if (typeof savegame.coins !== "undefined") coins = savegame.coins;
    document.getElementById("coins").innerHTML = accounting.formatMoney(coins);

} 
catch (error) {
    document.getElementById("coins").innerHTML = accounting.formatMoney(0);
    console.log(error);
}

try {

    if (typeof savegame.toTurkey !== "undefined") toTurkey = savegame.toTurkey;
    var turkeyCost = Math.floor(toTurkeyCost * Math.pow(1.1, toTurkey));
    document.getElementById("toTurkey").innerHTML = toTurkey;
    document.getElementById("toTurkeyCost").innerHTML = accounting.formatMoney(turkeyCost);
    toTurkeyRevenue = revenueGeneration(toTurkey, toTurkeyPower, 'toTurkeyRevenue');

    if (typeof savegame.toIndonesia !== "undefined") toIndonesia = savegame.toIndonesia;
    var indonesiaCost = Math.floor(toIndonesiaCost * Math.pow(1.1, toIndonesia));
    document.getElementById("toIndonesia").innerHTML = toIndonesia;
    document.getElementById("toIndonesiaCost").innerHTML = accounting.formatMoney(indonesiaCost);
    toIndiaRevenue = revenueGeneration(toIndonesia, toIndiaPower, 'toIndiaRevenue');

    if (typeof savegame.toRussia !== "undefined") toRussia = savegame.toRussia;
    var russiaCost = Math.floor(toRussiaCost * Math.pow(1.1, toRussia));
    document.getElementById("toRussia").innerHTML = toRussia;
    document.getElementById("toRussiaCost").innerHTML = accounting.formatMoney(russiaCost);
    toRussiaRevenue = revenueGeneration(toRussia, toRussiaPower, 'toRussiaRevenue');

    if (typeof savegame.toJapan !== "undefined") toJapan = savegame.toJapan;
    var japanCost = Math.floor(toJapanCost * Math.pow(1.1, toJapan));
    document.getElementById("toJapan").innerHTML = toJapan;
    document.getElementById("toJapanCost").innerHTML = accounting.formatMoney(japanCost);
    toJapanRevenue = revenueGeneration(toJapan, toIndiaPower, 'toJapanRevenue');

    if (typeof savegame.toIndia !== "undefined") toIndia = savegame.toIndia;
    var indiaCost = Math.floor(toIndiaCost * Math.pow(1.1, toIndia));
    document.getElementById("toIndia").innerHTML = toIndia;
    document.getElementById("toIndiaCost").innerHTML = accounting.formatMoney(indiaCost);
    toIndiaRevenue = revenueGeneration(toIndia, toIndiaPower, 'toIndiaRevenue');

    if (typeof savegame.toChina !== "undefined") toChina = savegame.toChina;
    var chinaCost = Math.floor(toChinaCost * Math.pow(1.1, toChina));
    document.getElementById("toChina").innerHTML = toChina;
    document.getElementById("toChinaCost").innerHTML = accounting.formatMoney(chinaCost);
    toChinaRevenue = revenueGeneration(toChina, toChinaPower, 'toChinaRevenue');

/*
    if (typeof savegame.toAfrica !== "undefined") toAfrica = savegame.toAfrica;
    var africaCost = Math.floor(toAfricaCost * Math.pow(1.1, toAfrica));
    document.getElementById("toAfricaCost").innerHTML = accounting.formatMoney(africaCost);
    toAfricaRevenue = revenueGeneration(toAfrica, toAfricaPower, 'toAfricaRevenue');

    if (typeof savegame.toAsia !== "undefined") toAsia = savegame.toAsia;
    var asiaCost = Math.floor(toAsiaCost * Math.pow(1.1, toAsia));
    document.getElementById("toAsiaCost").innerHTML = accounting.formatMoney(asiaCost);
    toAsiaRevenue = revenueGeneration(toAsia, toAsiaPower, 'toAsiaRevenue');

    if (typeof savegame.toEurope !== "undefined") toEurope = savegame.toEurope;
    var europeCost = Math.floor(toEuropeCost * Math.pow(1.1, toEurope));
    document.getElementById("toEuropeCost").innerHTML = accounting.formatMoney(europeCost);
    toEuropeRevenue = revenueGeneration(toEurope, toEuropePower, 'toEuropeRevenue');

    if (typeof savegame.toAmericas !== "undefined") toAmericas = savegame.toAmericas;
    var americasCost = Math.floor(toAmericasCost * Math.pow(1.1, toAmericas));
    document.getElementById("toAmericasCost").innerHTML = accounting.formatMoney(americasCost);
    toAmericasRevenue = revenueGeneration(toAmericas, toAmericasPower, 'toAmericasRevenue');
    
    if (typeof savegame.toAtlantis !== "undefined") toAtlantis = savegame.toAtlantis;
    var atlantisCost = Math.floor(toAtlantisCost * Math.pow(1.1, toIndia));
    document.getElementById("toAtlantisCost").innerHTML = accounting.formatMoney(atlantisCost);
    toAtlantisRevenue = revenueGeneration(toAtlantis, toAtlantisPower, 'toAtlantisRevenue');
*/

} catch (error) {
    console.log(error);
}

/**
 * Click
 */

function workClick() {
    coins = coins + work;
    document.getElementById("coins").innerHTML = accounting.formatMoney(coins);
};


/**
 * Expand
 */

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


/**
 * Recalculate
 */

window.setInterval(function () {

	revenueCalculation();

}, 5000);


/** 
 * Save
 */

 /* 60 seconds */
window.setInterval(function () {

    //console.log("I save now");

    FIND('notifications', function(component) {
        component.append('fa-lightbulb-o', 'Saving your progress.');
    });

    save = {
        coins: coins,
        toTurkey: toTurkey,
        toIndonesia: toIndonesia,
        toRussia: toRussia,
        toJapan: toJapan,
        toIndia: toIndia,
        toChina: toChina,
    }

    localStorage.setItem("save", JSON.stringify(save));
}, 60000);


/* 5 seconds */
window.setInterval(function () {

    revenueCalculation();

    // chart();
    //if (typeof chart() !== "undefined") chart();

    localStorage.setItem("save", JSON.stringify(save));
}, 5000);


/**
 * Notifications
 */

FIND('notifications', function (component) {
    component.append('fa-lightbulb-o', 'This is a new notification component.');
});

setTimeout(function () {
    FIND('notifications').append('fa-calendar', 'You have a meeting in the Central Park.', function () {
        alert('You clicked on the notification');
    }, 'red');
}, 3000);

setTimeout(function () {
    FIND('notifications').append('fa-link', 'Please support <a href="https://github.com/petersirka/jComponent" target="_blank">jComponent on GitHub</a>.');
}, 6000);

setTimeout(function () {
    FIND('notifications').append('fa-facebook-square', 'Total.js is node.js web application framework, please support it on social networks.');
}, 10000);