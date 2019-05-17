//@ts-check
function revenueGeneration(region, power, revenueDiv) {

    //console.log(region + "," + power + "," + revenueDiv);

    if (region > 0) {
        new_revenue = Math.floor(power * Math.pow(1.1, region));
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