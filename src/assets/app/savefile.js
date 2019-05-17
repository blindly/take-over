//@ts-check
try {
    var indiaCost = Math.floor(toIndiaCost * Math.pow(1.1, toIndia));
    document.getElementById("toIndiaCost").innerHTML = accounting.formatMoney(indiaCost);
    revenueGeneration(toIndia, toIndiaRevenue, 'toIndiaRevenue');

    var africaCost = Math.floor(toAfricaCost * Math.pow(1.1, toAfrica));
    document.getElementById("toAfricaCost").innerHTML = accounting.formatMoney(africaCost);
    revenueGeneration(toAfrica, toAfricaRevenue, 'toAfricaRevenue');

    var asiaCost = Math.floor(toAsiaCost * Math.pow(1.1, toAsia));
    document.getElementById("toAsiaCost").innerHTML = accounting.formatMoney(asiaCost);
    revenueGeneration(toAsia, toAsiaRevenue, 'toAsiaRevenue');

    var europeCost = Math.floor(toEuropeCost * Math.pow(1.1, toEurope));
    document.getElementById("toEuropeCost").innerHTML = accounting.formatMoney(europeCost);
    revenueGeneration(toEurope, toEuropeRevenue, 'toEuropeRevenue');

    var americasCost = Math.floor(toAmericasCost * Math.pow(1.1, toAmericas));
    document.getElementById("toAmericasCost").innerHTML = accounting.formatMoney(americasCost);
    revenueGeneration(toAmericas, toAmericasRevenue, 'toAmericasRevenue');

    var atlantisCost = Math.floor(toAtlantisCost * Math.pow(1.1, toIndia));
    document.getElementById("toAtlantisCost").innerHTML = accounting.formatMoney(atlantisCost);
    revenueGeneration(toAtlantis, toAtlantisRevenue, 'toAtlantisRevenue');

} catch (error) {
    console.log(error);
}

save = {
    coins: coins,
    toTurkey: toTurkey,
    toIndonesia: toIndonesia,
    toRussia: toRussia,
    toJapan: toJapan,
    toIndia: toIndia,
    toChina: toChina,
}