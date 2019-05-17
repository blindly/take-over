function chart() {
    var data = [{
        values: [toIndia, toAfrica, toAsia, toEurope, toAmericas, toAtlantis],
        labels: ['India', 'Africa', 'Asia', 'Europe', 'Americas', 'Atlantis'],
        type: 'pie'
    }];
    
    var layout = {
      height: 300,
      width: 400
    };

    Plotly.newPlot('chart', data, layout);
}


chart();