//achievement
if($('div').hasClass('achievement-chart')) {
  am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_frozen);
    am4core.useTheme(am4themes_animated);
    // Themes end
  
    // Create chart instance
    var chart = am4core.create('achievement', am4charts.XYChart);
    var target = $('.graphs__data__row .target').text();
    var achievement = $('.graphs__data__row .achievement').text();
    var percent = 100 - (achievement * 100 / target);
    $('.achievement-chart span, .graphs__data__row .percent').text(percent.toFixed(1) + '%');
    // Add data
    chart.data = [{
      'country': 'Target',
      'visits': target
    }, {
      'country': 'Achievement',
      'visits': achievement
    }, {
      'country': 'Achievement %',
      'visits': 0
    }];
  
    // Create axes
  
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'country';
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;
  
 
  
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  
    // Create series
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = 'visits';
    series.dataFields.categoryX = 'country';
    series.columns.template.fillOpacity = 1;
  
    var columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 2;
    columnTemplate.strokeOpacity = 0;
  
  }); // end am4core.ready()
}











//inward
if($('div').hasClass('inward-chart')) {
  am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_kelly);
    am4core.useTheme(am4themes_animated);

    var c1 = $('.graphs__info .c1').text();
    var c2 = $('.graphs__info .c2').text();


    // Create chart instance
    var chart = am4core.create('inward', am4charts.PieChart);

    // Add data
    chart.data = [{
      'country': 'Total files in C1A',
      'litres': c1
    }, {
      'country': 'Total files in C1B',
      'litres': c2
    }];

    // Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = 'litres';
    pieSeries.dataFields.category = 'country';
    pieSeries.slices.template.stroke = am4core.color('#fff');
    pieSeries.innerRadius = am4core.percent(0);
    pieSeries.ticks.template.disabled = true;
    pieSeries.labels.template.disabled = true;
    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;


 

    chart.legend = new am4charts.Legend();
    chart.legend.position = 'right';
    chart.legend.maxWidth = 170;
  
  }); // end am4core.ready()
}


//management
if($('div').hasClass('management-chart')) {
  am4core.ready(function() {

    // Themes begin
    am4core.unuseTheme(am4themes_kelly);
    am4core.useTheme(am4themes_material);
    am4core.useTheme(am4themes_animated);


    // Create chart instance
    var chart = am4core.create('management', am4charts.PieChart);

    // Add data
    chart.data = [{
      'country': 'Ready to process',
      'litres': 60
    }, {
      'country': 'Customers not interested',
      'litres': 20
    },{
      'country': 'Future prospect',
      'litres': 10
    }, {
      'country': 'Converted',
      'litres': 10
    }];

    // Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = 'litres';
    pieSeries.dataFields.category = 'country';
    pieSeries.slices.template.stroke = am4core.color('#fff');
    pieSeries.innerRadius = am4core.percent(0);
    pieSeries.ticks.template.disabled = true;
    pieSeries.labels.template.disabled = true;
    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;


 

    chart.legend = new am4charts.Legend();
    chart.legend.position = 'right';
    chart.legend.maxWidth = 170;
  
  }); // end am4core.ready()
}







//closure
if($('div').hasClass('closure-chart')) {
  am4core.ready(function() {
    am4core.unuseTheme(am4themes_material);
    am4core.useTheme(am4themes_frozen);
    am4core.useTheme(am4themes_animated);
    // Create chart instance
    var chart = am4core.create('closure', am4charts.XYChart);
    
    // Add data
    chart.data = [{
      'country': 'Open',
      'visits': 3
    }, {
      'country': 'Closed',
      'visits': 5
    }, {
      'country': '%',
      'visits': 4
    }, {
      'country': 'Open 2',
      'visits': 2
    }, {
      'country': 'Closed 2',
      'visits': 4
    }, {
      'country': '% 2',
      'visits': 1
    }];
    
    // Create axes

    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'country';
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 10;

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = 'visits';
    series.dataFields.categoryX = 'country';
    series.name = 'Visits';
    series.columns.template.tooltipText = '{categoryX}: [bold]{valueY}[/]';
    series.columns.template.fillOpacity = 0.8;

    var columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 2;
    columnTemplate.strokeOpacity = 1;

  }); // end am4core.ready()
}
