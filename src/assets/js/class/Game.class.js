//@ts-check
var Game = {
    coins: 0,
    work: 2,
    revenue: 0,
    expand: 1.1,
    odds: 50,
    version: "0.0.7",
    reasons: [
        'SEC violation.',
        'Politician bribe.',
        'IRS audit.',
        'EU complaint.',
        'Governor contribution.',
        'Senator donation.',
        'Ethics violation.',
        'Lawsuit settled.',
        'CFTC bribe.',
        'PAC donation',
    ],

    regions: [
        // Africa
        'Nigeria',
        'Ethiopia',
        'Egypt',
        'Congo',
        'Uganda',
        'Sudan',
        // Asia
        'Turkey',
        'Indonesia',
        'Russia',
        "Japan",
        "India",
        "China",
        // Europe
        'Poland',
        'Spain',
        'Italy',
        'England',
        'France',
        'Germany',
    ],

    // Africa

    Nigeria: {
        count: 0,
        cost: 100,
        power: 5,
        revenue: 0,
        //////////
        costDiv: "toNigeriaCost",
        countDiv: "toNigeriaCount",
        revenueDiv: "toNigeriaRevenue",
        button: "toNigeriaButton",
    },

    Ethiopia: {
        count: 0,
        cost: 200,
        power: 5,
        revenue: 0,
        //////////
        costDiv: "toEthiopiaCost",
        countDiv: "toEthiopiaCount",
        revenueDiv: "toEthiopiaRevenue",
        button: "toEthiopiaButton",
    },

    Egypt: {
        count: 0,
        cost: 300,
        power: 5,
        revenue: 0,
        //////////
        costDiv: "toEgyptCost",
        countDiv: "toEgyptCount",
        revenueDiv: "toEgyptRevenue",
        button: "toEgyptButton",
    },

    Congo: {
        count: 0,
        cost: 400,
        power: 5,
        revenue: 0,
        //////////
        costDiv: "toCongoCost",
        countDiv: "toCongoCount",
        revenueDiv: "toCongoRevenue",
        button: "toCongoButton",
    },

    Uganda: {
        count: 0,
        cost: 500,
        power: 5,
        revenue: 0,
        //////////
        costDiv: "toUgandaCost",
        countDiv: "toUgandaCount",
        revenueDiv: "toUgandaRevenue",
        button: "toUgandaButton",
    },

    Sudan: {
        count: 0,
        cost: 600,
        power: 5,
        revenue: 0,
        //////////
        costDiv: "toSudanCost",
        countDiv: "toSudanCount",
        revenueDiv: "toSudanRevenue",
        button: "toSudanButton",
    },

    // Asia

    Turkey: {
        count: 0,
        cost: 1000,
        power: 10,
        revenue: 0,
        //////////
        costDiv: "toTurkeyCost",
        countDiv: "toTurkeyCount",
        revenueDiv: "toTurkeyRevenue",
        button: "toTurkeyButton",
    },

    Indonesia: {
        count: 0,
        cost: 2000,
        power: 10,
        revenue: 0,
        //////////
        costDiv: "toIndonesiaCost",
        countDiv: "toIndonesiaCount",
        revenueDiv: "toIndonesiaRevenue",
        button: "toIndonesiaButton",
    },

    Russia: {
        count: 0,
        cost: 3000,
        power: 10,
        revenue: 0,
        //////////
        costDiv: "toRussiaCost",
        countDiv: "toRussiaCount",
        revenueDiv: "toRussiaRevenue",
        button: "toRussiaButton",
    },

    Japan: {
        count: 0,
        cost: 4000,
        power: 10,
        revenue: 0,
        //////////
        costDiv: "toJapanCost",
        countDiv: "toJapanCount",
        revenueDiv: "toJapanRevenue",
        button: "toJapanButton",
    },

    India: {
        count: 0,
        cost: 5000,
        power: 10,
        revenue: 0,
        //////////
        costDiv: "toIndiaCost",
        countDiv: "toIndiaCount",
        revenueDiv: "toIndiaRevenue",
        button: "toIndiaButton",
    },

    China: {
        count: 0,
        cost: 6000,
        power: 10,
        revenue: 0,
        //////////
        costDiv: "toChinaCost",
        countDiv: "toChinaCount",
        revenueDiv: "toChinaRevenue",
        button: "toChinaButton",
    },

    // Europe

    Poland: {
        count: 0,
        cost: 10000,
        power: 15,
        revenue: 0,
        //////////
        costDiv: "toPolandCost",
        countDiv: "toPolandCount",
        revenueDiv: "toPolandRevenue",
        button: "toPolandButton",
    },

    Spain: {
        count: 0,
        cost: 20000,
        power: 15,
        revenue: 0,
        //////////
        costDiv: "toSpainCost",
        countDiv: "toSpainCount",
        revenueDiv: "toSpainRevenue",
        button: "toSpainButton",
    },

    England: {
        count: 0,
        cost: 30000,
        power: 15,
        revenue: 0,
        //////////
        costDiv: "toEnglandCost",
        countDiv: "toEnglandCount",
        revenueDiv: "toEnglandRevenue",
        button: "toEnglandButton",
    },

    Italy: {
        count: 0,
        cost: 40000,
        power: 15,
        revenue: 0,
        //////////
        costDiv: "toItalyCost",
        countDiv: "toItalyCount",
        revenueDiv: "toItalyRevenue",
        button: "toItalyButton",
    },

    France: {
        count: 0,
        cost: 50000,
        power: 15,
        revenue: 0,
        //////////
        costDiv: "toFranceCost",
        countDiv: "toFranceCount",
        revenueDiv: "toFranceRevenue",
        button: "toFranceButton",
    },

    Germany: {
        count: 0,
        cost: 60000,
        power: 15,
        revenue: 0,
        //////////
        costDiv: "toGermanyCost",
        countDiv: "toGermanyCount",
        revenueDiv: "toGermanyRevenue",
        button: "toGermanyButton",
    },

    // Initial Save
    save: {
        coins: this.coins,
    },

    /**
     * @param {string} element
     * @param {any} variable
     */
    htmlElement: function (element, variable) {
        // @ts-ignore
        if (document.getElementById(element)) {
            document.getElementById(element).innerHTML = variable;
        }
    },

    /**
     * @param {string} element
     * @param {number} variable
     */
    htmlAccounting: function (element, variable) {
        // @ts-ignore
        document.getElementById(element).innerHTML = accounting.formatMoney(variable);
    },

    /**
     * @param {any} message
     */
    debug: function (message) {
        console.debug(message);
    },

    /**
     * @param {string} message
     */
    error: function (message) {
        //console.error(message);
    },

    loadSave: function () {
        try {
            var saveData = JSON.parse(localStorage.getItem("save"));

            this.debug("SAVEGAME: " + JSON.stringify(saveData));
            this.debug("SAVEGAME: " + saveData);


            if (saveData == null) {
                console.log("No save file");
            }
            else {
                if (typeof saveData.coins !== "undefined") {
                    this.coins = saveData.coins;
                }

                if (typeof saveData.odds !== "undefined") {
                    this.odds = saveData.odds;
                }

                var regions = this.regions;
                regions.forEach(region => {
                    this.debug("Loading " + region);
                    if (typeof saveData[region] !== "undefined") {
                        this[region] = saveData[region];
                    }
                });
            }

        }
        catch (error) {
            this.error(error);
        }
        finally {
            this.htmlElement("coins", this.coins);
            this.htmlElement("odds", this.odds);
        }

    },

    loadGame: function () {
        var regions = this.regions;
        regions.forEach(region => {
            this.debug("Loading " + region);
            this[region].cost = Math.floor(this[region].cost * Math.pow(this.expand, this[region].count));
            this.htmlElement(this[region].countDiv, this[region].count);
            this.htmlAccounting(this[region].costDiv, this[region].cost);
            this[region].revenue = this.revenueGeneration(this[region].counter, this[region].power, this[region].revenueDiv);
        });

        this.htmlElement("odds", this.odds);
        this.htmlElement("game_version", this.version);
    },

    workClick: function () {
        this.coins = this.coins + this.work;
        this.odds = this.odds + 1;

        this.debug("Coins: " + this.coins);
        this.htmlAccounting("coins", this.coins);
        this.htmlElement("odds", this.odds);
    },

    penalty: function () {
        if (this.odds > 0) {
            this.odds = this.odds - 1;
        }
        else {
            this.odds = 0;
        }
        this.htmlElement("odds", this.odds);
        console.log("Odds: " + this.odds);

        var isZero = (this.coins === 0 || this.coins === null || typeof this.coins === "undefined");
        console.log("IsZero: " + isZero);
        if (isZero) {
            return 0;
        }
        else {
            var isPrime = this.isPrime(this.randomNumber(this.odds));
            console.log("Prime: " + isPrime);
            if (isPrime) {
                var fee = this.randomNumber(this.coins);
                this.coins = this.coins - fee;
                console.log("PENALTY!!! Minus " + fee);

                let reason = this.reasons[this.randomNumber(this.reasons.length)];
                this.notification(reason + " Minus " + this.formatAsMoney(fee));
            }
        }
    },

    /**
    * @param {number} counter
    * @param {number} power
    * @param {string} revenueDiv
    */
    revenueGeneration: function (counter, power, revenueDiv) {
        this.debug("Counter: " + counter + ", Power: " + power + ", Div: " + revenueDiv);
        var new_revenue;
        if (counter > 0) {
            new_revenue = Math.floor(power * Math.pow(this.expand, counter));

            this.coins = this.coins + new_revenue;
        }
        else {
            new_revenue = 0;
        }

        this.htmlAccounting("coins", this.coins);
        this.htmlAccounting(revenueDiv, new_revenue);

        this.debug("Revenue for " + revenueDiv + " is " + new_revenue);

        return new_revenue;
    },

    revenueCalculation: function () {

        var regions = this.regions;
        regions.forEach(region => {
            this[region].revenue = this.revenueGeneration(this[region].count, this[region].power, this[region].revenueDiv);
            this.debug("revenue for " + region + " => " + this[region].revenue);
            this.htmlAccounting(this[region].revenueDiv, this[region].revenue);
        });

        var total_revenue = 0;
        regions.forEach(region => {
            //this.revenue = this.revenue + this[region].revenue / this.regions.length;
            total_revenue = total_revenue + this[region].revenue;

            this.debug("revenue is " + region + " => " + this[region].revenue);

            // check if i can buy
            this.debug("Can expand: " + region + " -> " + this.canExpand(region));

            if (this.canExpand(region)) {
                // @ts-ignore
                document.getElementById(this[region].button).disabled = false;
            }
            else {
                // @ts-ignore
                document.getElementById(this[region].button).disabled = true;
            }

        });

        this.debug("revenue is " + " => " + total_revenue);

        this.revenue = total_revenue;

        this.htmlAccounting("revenue", this.revenue);
        this.coins = this.coins + this.revenue;
        this.htmlAccounting("coins", this.coins);

    },

    /**
    * @param {string} regionObj
    */
    canExpand: function (regionObj) {
        this.debug(this[regionObj]);
        var result = false;
        try {
            result = (this.coins >= this[regionObj].cost);
        }
        catch (error) {
            this.error(error);
        }
        finally {
            return result;
        }
    },

    /**
     * @param {string} regionObj
     */
    expandRegion: function (regionObj) {
        this.debug(this.coins >= this[regionObj].cost);

        if (this.coins >= this[regionObj].cost) {
            this[regionObj].count = this[regionObj].count + 1;
            this.coins = this.coins - this[regionObj].cost;

            this[regionObj].cost = Math.floor(this[regionObj].cost * Math.pow(this.expand, this[regionObj].count));
            this.htmlAccounting(this[regionObj].costDiv, this[regionObj].cost);
        }

        this.htmlElement(this[regionObj].countDiv, this[regionObj].count);
        this.htmlAccounting("coins", this.coins);
    },

    saveGame: function () {
        setInterval(() => {
            this.notification("Saving your progress");
            this.save.coins = this.coins;
            this.save.odds = this.odds;

            var regions = this.regions;
            regions.forEach(region => {
                this.debug("Loading " + region);
                this.save[region] = this[region];
            });

            localStorage.removeItem("save");
            localStorage.setItem("save", JSON.stringify(this.save));
        }, 30000);
    },

    /**
     * @param {string} message
     */
    notification: function (message) {

        new Noty({
            text: message,
            timeout: 2000,
            layout: "topLeft",
        }).show();
    },

    isPrime: function (value) {
        if (value === 1 || value === 0) {
            return true;
        }
        else {
            for (var i = 2; i < value; i++) {
                if (value % i === 0) {
                    return false;
                }
            }
            return value > 1;
        }
    },

    /**
     * @param {number} max_number
     * @param {number} min_number
     */
    randomNumber: function (max_number, min_number = 1) {
        //return Math.floor(Math.random() * max_number);
        return Math.floor(Math.random() * (max_number - min_number + 1) + min_number);
    },

    /**
     * @param {number} number
     */
    formatAsMoney: function (number) {
        return accounting.formatMoney(number)
    },

    resetGame: function () {
        localStorage.removeItem("save");
        this.coins = 0;
        this.htmlAccounting("coins", this.coins);

        this.revenue = 0;
        this.htmlAccounting("revenue", this.revenue);

        var regions = this.regions;
        regions.forEach(region => {
            this[region] = this[region];
        });

        delete this.save;

        this.notification("Game has been reset");

        location.reload();
    },
}