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







//pipeline-status
if($('div').hasClass('pipeline-status-chart')) {
  am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
  
  
    var chart = am4core.create('pipeline-status', am4charts.XYChart);
  
    // some extra padding for range labels
    chart.paddingBottom = 50;

  
  
  

  
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'category';
    categoryAxis.renderer.minGridDistance = 10;
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataItems.template.text = '{realName}';
    categoryAxis.renderer.labels.template.rotation = -90;
    categoryAxis.renderer.labels.template.horizontalCenter = 'right';
    categoryAxis.renderer.labels.template.verticalCenter = 'middle';
    categoryAxis.adapter.add('tooltipText', function(tooltipText, target) {
      return categoryAxis.tooltipDataItem.dataContext.realName;
    });
  
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = false;
    valueAxis.min = 0;
  
    // single column series for all data
    var columnSeries = chart.series.push(new am4charts.ColumnSeries());
    columnSeries.columns.template.width = am4core.percent(40);

    columnSeries.dataFields.categoryX = 'category';
    columnSeries.dataFields.valueY = 'value';
  

  
    var rangeTemplate = categoryAxis.axisRanges.template;
    rangeTemplate.tick.disabled = false;
    rangeTemplate.tick.location = 0;
    rangeTemplate.tick.strokeOpacity = 0.8;
    rangeTemplate.tick.length = 60;
    rangeTemplate.grid.strokeOpacity = 0.1;
    rangeTemplate.label.tooltip = new am4core.Tooltip();
    rangeTemplate.label.tooltip.dy = -60;
    rangeTemplate.label.cloneTooltip = true;
  
    ///// DATA
    var chartData = [];

  
    var data =
  {
    'C1A': {
      'Nos1': 4,
      'Nos2': 20,
    },
    'C1B': {
      'Nos1': 3,
      'Nos3': 43,
    },
    'C2A': {
      'Nos1': 3,
      'Nos2': 12,
    },
    'C2B': {
      'Nos1': 4,
      'Nos2': 16,
    },
    'C3A': {
      'Nos1': 2,
      'Nos2': 12,
    },
    'C3B': {
      'Nos1': 4,
      'Nos2': 25,
    },
    'C4': {
      'Nos1': 3,
      'Nos2': 16,
    }
  };
  
    // process data ant prepare it for the chart
    for (var providerName in data) {
      var providerData = data[providerName];
  
      // add data of one provider to temp array
      var tempArray = [];
      var count = 0;
      // add items
      for (var itemName in providerData) {
        if(itemName !== 'quantity') {
          count++;
          // we generate unique category for each column (providerName + "_" + itemName) and store realName
          tempArray.push({ category: providerName + '_' + itemName, realName: itemName, value: providerData[itemName], provider: providerName});
        }
      }
      

    


  
      // add quantity and count to middle data item (line series uses it)
      var lineSeriesDataIndex = Math.floor(count / 2);
      tempArray[lineSeriesDataIndex].quantity = providerData.quantity;
      tempArray[lineSeriesDataIndex].count = count;
      // push to the final data
      am4core.array.each(tempArray, function(item) {
        chartData.push(item);
      });
  
      // create range (the additional label at the bottom)
      var range = categoryAxis.axisRanges.create();
      range.category = tempArray[0].category;
      range.endCategory = tempArray[tempArray.length - 1].category;
      range.label.text = tempArray[0].provider;
      range.label.dy = 50;
      range.label.truncate = false;
      range.label.fontWeight = 'bold';
      range.label.tooltipText = tempArray[0].provider;
  
      range.label.adapter.add('maxWidth', function(maxWidth, target) {
        var range = target.dataItem;
        var startPosition = categoryAxis.categoryToPosition(range.category, 0);
        var endPosition = categoryAxis.categoryToPosition(range.endCategory, 1);
        var startX = categoryAxis.positionToCoordinate(startPosition);
        var endX = categoryAxis.positionToCoordinate(endPosition);
        return endX - startX;
      });
    }
  
    chart.data = chartData;
  
  
    // last tick
    var range = categoryAxis.axisRanges.create();
    range.category = chart.data[chart.data.length - 1].category;
    range.label.disabled = true;
    range.tick.location = 1;
    range.grid.location = 0;
  
  }); // end am4core.ready()

}






//critical-account
if($('div').hasClass('critical-account-chart')) {
  am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    
    // Themes end
  
  
    var chart = am4core.create('critical-account', am4charts.XYChart);
    // some extra padding for range labels
    chart.paddingBottom = 50;

  
  
  

  
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'category';
    categoryAxis.renderer.minGridDistance = 10;
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataItems.template.text = '{realName}';
    // categoryAxis.renderer.labels.template.rotation = -90;
    // categoryAxis.renderer.labels.template.horizontalCenter = 'right';
    // categoryAxis.renderer.labels.template.verticalCenter = 'middle';
 
    // Configure axis label
    var label = categoryAxis.renderer.labels.template;
    label.truncate = true;

    categoryAxis.events.on('sizechanged', function(ev) {
      var axis = ev.target;
      var cellWidth = axis.pixelWidth / (axis.endIndex - axis.startIndex);
      axis.renderer.labels.template.maxWidth = cellWidth;
    });
    
  
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = false;
    valueAxis.min = 0;
  
    // single column series for all data
    var columnSeries = chart.series.push(new am4charts.ColumnSeries());
    columnSeries.columns.template.width = am4core.percent(40);

    columnSeries.dataFields.categoryX = 'category';
    columnSeries.dataFields.valueY = 'value';

  
    var rangeTemplate = categoryAxis.axisRanges.template;
    rangeTemplate.tick.disabled = false;
    rangeTemplate.tick.location = 0;
    rangeTemplate.tick.strokeOpacity = 0.8;
    rangeTemplate.tick.length = 50;
    rangeTemplate.grid.strokeOpacity = 0.1;
    rangeTemplate.label.tooltip = new am4core.Tooltip();
    rangeTemplate.label.tooltip.dy = -60;
    rangeTemplate.label.cloneTooltip = true;
  
    ///// DATA
    var chartData = [];

  
    var data =
  {
    'Demand Collection': {
      'Nos': 12,
      'DMD': 25,
      'DMD Collection': 15,
    },
    'Arrear Collection': {
      'Arrear': 18,
      'ARR Collection': 12,
    }
  };
  
    // process data ant prepare it for the chart
    for (var providerName in data) {
      var providerData = data[providerName];
  
      // add data of one provider to temp array
      var tempArray = [];
      var count = 0;
      // add items
      for (var itemName in providerData) {
        if(itemName !== 'quantity') {
          count++;
          // we generate unique category for each column (providerName + "_" + itemName) and store realName
          tempArray.push({ category: providerName + '_' + itemName, realName: itemName, value: providerData[itemName], provider: providerName});
        }
      }
      

    


  
      // add quantity and count to middle data item (line series uses it)
      var lineSeriesDataIndex = Math.floor(count / 2);
      tempArray[lineSeriesDataIndex].quantity = providerData.quantity;
      tempArray[lineSeriesDataIndex].count = count;
      // push to the final data
      am4core.array.each(tempArray, function(item) {
        chartData.push(item);
      });
  
      // create range (the additional label at the bottom)
      var range = categoryAxis.axisRanges.create();
      range.category = tempArray[0].category;
      range.endCategory = tempArray[tempArray.length - 1].category;
      range.label.text = tempArray[0].provider;
      range.label.dy = 20;
      range.label.truncate = false;
      range.label.fontWeight = 'bold';
      range.label.tooltipText = tempArray[0].provider;
  
      range.label.adapter.add('maxWidth', function(maxWidth, target) {
        var range = target.dataItem;
        var startPosition = categoryAxis.categoryToPosition(range.category, 0);
        var endPosition = categoryAxis.categoryToPosition(range.endCategory, 1);
        var startX = categoryAxis.positionToCoordinate(startPosition);
        var endX = categoryAxis.positionToCoordinate(endPosition);
        return endX - startX;
      });
    }
  
    chart.data = chartData;
  
  
    // last tick
    var range = categoryAxis.axisRanges.create();
    range.category = chart.data[chart.data.length - 1].category;
    range.label.disabled = true;
    range.tick.location = 1;
    range.grid.location = 0;
  
  }); // end am4core.ready()

}
