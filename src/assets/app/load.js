//@ts-check
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