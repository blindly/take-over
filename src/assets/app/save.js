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
