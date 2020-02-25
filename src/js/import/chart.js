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






//promotional-activities
if($('div').hasClass('promotional-activities-chart')) {
  am4core.ready(function() {


    var chart = am4core.create('promotional-activities', am4charts.XYChart);

    chart.data = [
      {
        category: 'Customer',
        value1: 2,
        value2: 1,
      },
      {
        category: 'Total',
        value1: 2,
        value2: 3,
      },{
        category: 'Customer-1',
        value1: 1,
        value2: 1,
      },
      {
        category: 'Total-2',
        value1: 2,
        value2: 1,
      }
    ];

    chart.legend = new am4charts.Legend();



    chart.colors.step = 2;

    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'category';
    categoryAxis.renderer.minGridDistance = 10;
    categoryAxis.renderer.grid.template.location = 0;

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());  
    valueAxis.min = 0;
    valueAxis.renderer.minWidth = 35;

    var series1 = chart.series.push(new am4charts.ColumnSeries());
    series1.columns.template.width = am4core.percent(50);
    series1.columns.template.tooltipText = '{name}: {valueY.value}';
    series1.name = 'Pianned';
    series1.dataFields.categoryX = 'category';
    series1.dataFields.valueY = 'value1';
    series1.stacked = false;

    var series2 = chart.series.push(new am4charts.ColumnSeries());
    series2.columns.template.width = am4core.percent(50);
    series2.columns.template.tooltipText = '{name}: {valueY.value}';
    series2.name = 'Complieted';
    series2.dataFields.categoryX = 'category';
    series2.dataFields.valueY = 'value2';
    series2.stacked = false;

  
  
  }); // end am4core.ready()
}



//pending-status
if($('div').hasClass('pending-status-chart')) {
  am4core.ready(function() {


    var chart = am4core.create('pending-status', am4charts.XYChart);

    chart.data = [
      {
        category: 'TPS',
        value1: 10,
        value2: 3,
        value3: 3,
      },
      {
        category: 'PDD',
        value1: 2,
        value2: 2,
        value3: 0,
      }
    ];

    chart.legend = new am4charts.Legend();



    chart.colors.step = 2;

    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'category';
    categoryAxis.renderer.grid.template.location = 0;

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());  
    valueAxis.min = 0;
    valueAxis.renderer.minWidth = 35;

    var series1 = chart.series.push(new am4charts.ColumnSeries());
    series1.columns.template.width = am4core.percent(50);
    series1.columns.template.tooltipText = '{name}: {valueY.value}';
    series1.name = 'Total';
    series1.dataFields.categoryX = 'category';
    series1.dataFields.valueY = 'value1';
    series1.stacked = false;

    var series2 = chart.series.push(new am4charts.ColumnSeries());
    series2.columns.template.width = am4core.percent(50);
    series2.columns.template.tooltipText = '{name}: {valueY.value}';
    series2.name = 'Complieted';
    series2.dataFields.categoryX = 'category';
    series2.dataFields.valueY = 'value2';
    series2.stacked = false;

    var series3 = chart.series.push(new am4charts.ColumnSeries());
    series3.columns.template.width = am4core.percent(50);
    series3.columns.template.tooltipText = '{name}: {valueY.value}';
    series3.name = 'Pending';
    series3.dataFields.categoryX = 'category';
    series3.dataFields.valueY = 'value2';
    series3.stacked = false;
  
  }); // end am4core.ready()
}







if($('div').hasClass('debt-chart')) {
  am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    // Create chart instance
    var chart = am4core.create('debt', am4charts.XYChart);
    chart.paddingTop = 20;
    // Add data
    chart.data = [{
      'country': '[font-size: 7;]Aug-18',
      'visits': 22,
      'expenses': 8
    }, {
      'country': '[font-size: 7;]Aug-19',
      'visits': 22,
      'expenses': 9
    }, {
      'country': '[font-size: 7;]Aug-20',
      'visits': 21,
      'expenses': 10
    }, {
      'country': '[font-size: 7;]Aug-21',
      'visits': 22,
      'expenses': 8
    }, {
      'country': '[font-size: 7;]Aug-22',
      'visits': 22,
      'expenses': 8
    }, {
      'country': '[font-size: 7;]Aug-23',
      'visits': 23,
      'expenses': 20
    }, {
      'country': '[font-size: 7;]Aug-24',
      'visits': 22,
      'expenses': 22
    }, {
      'country': '[font-size: 7;]Aug-25',
      'visits': 20,
      'expenses': 27
    }, {
      'country': '[font-size: 7;]Aug-26',
      'visits': 24
    }, {
      'country': '[font-size: 7;]Aug-27',
      'visits': 28,
      'expenses': 8
    }, {
      'country': '[font-size: 7;]Aug-28',
      'visits': 27,
      'expenses': 8
    }, {
      'country': '[font-size: 7;]Aug-29',
      'visits': 26,
      'expenses': 8
    }];
    
    // Create axes
    
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'country';
    categoryAxis.renderer.grid.template.location = 0.5;
    categoryAxis.renderer.minGridDistance = 20;
    
    
    
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    
    // Create series
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = 'visits';
    series.dataFields.categoryX = 'country';
    series.columns.template.tooltipText = '{categoryX}: {valueY}[/]';
    series.columns.template.fillOpacity = 0.8;
    
    
    var columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 0;
    columnTemplate.strokeOpacity = 1;


    var femaleLabel = series.bullets.push(new am4charts.LabelBullet());
    femaleLabel.label.text = '{valueY}';
    femaleLabel.label.hideOversized = false;
    femaleLabel.label.truncate = false;
    femaleLabel.label.horizontalCenter = 'left';
    femaleLabel.label.dx = -8;
    femaleLabel.label.dy = -8;


    var lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.name = '[font-size: 8;]Company wide';
    lineSeries.dataFields.valueY = 'expenses';
    lineSeries.tensionX = 0.7;
    lineSeries.dataFields.categoryX = 'country';




    var range = valueAxis.axisRanges.create();
    range.value = 30;
    range.grid.stroke = am4core.color('#00E808');
    range.grid.strokeWidth = 1;
    range.grid.strokeOpacity = 1;
    range.label.inside = true;
    range.label.text = '[font-size: 8;baseline-shift: sub;]Refine wide';
    range.label.fill = am4core.color('#000');
    range.label.align = 'left';
    range.label.verticalCenter = 'bottom';
    range.grid.above = true;

    var range2 = valueAxis.axisRanges.create();
    range2.value = 20;
    range2.grid.stroke = am4core.color('#E88300');
    range2.grid.strokeWidth = 1;
    range2.grid.strokeOpacity = 1;
    range2.grid.above = true;
    range2.label.inside = true;
    range2.label.text = '[font-size: 8;baseline-shift: super;]Org wide';
    range2.label.fill = am4core.color('#000');
    range2.label.align = 'left';
    range2.label.verticalCenter = 'top';
    
  }); // end am4core.ready()
}







//page achievement - #disbursement
if($('div').hasClass('disbursement-chart')) {
  am4core.ready(function() {

    // Themes begin
    
    am4core.useTheme(am4themes_animated);
    // Themes end
  
    // create chart
    var chart = am4core.create('disbursement', am4charts.GaugeChart);
    chart.startAngle = -90;
    chart.endAngle = 270;
    chart.innerRadius = am4core.percent(62);
  
  
  
    /**
   * Normal axis
   */
  
    var axis = chart.xAxes.push(new am4charts.ValueAxis());
  
    axis.min = 0;
    axis.max = 100;
    axis.strictMinMax = true;
    axis.renderer.radius = am4core.percent(1);
    axis.renderer.labels.template.radius = -200;
    axis.renderer.labels.template.adapter.add('text', function(text) {
      return text + '%';
    });
  
    /**
   * Axis for ranges
   */
  
    var colorSet = new am4core.ColorSet();
  
    var axis2 = chart.xAxes.push(new am4charts.ValueAxis());
    axis2.min = 0;
    axis2.max = 100;
    axis2.renderer.labels.template.disabled = true;

  
    var range0 = axis2.axisRanges.create();
    range0.value = 0;
    range0.endValue = 50;
    range0.axisFill.fillOpacity = 1;
    range0.axisFill.fill = am4core.color('rgb(78, 152, 246)');
  
    var range1 = axis2.axisRanges.create();
    range1.value = 50;
    range1.endValue = 100;
    range1.axisFill.fillOpacity = 1;
    range1.axisFill.fill = am4core.color('rgb(98, 101, 246)');

  
    /**
   * Label
   */
  
    var label = chart.radarContainer.createChild(am4core.Label);
    label.fontSize = 11;
    label.x = am4core.percent(50);
    label.y = am4core.percent(100);
    label.horizontalCenter = 'middle';
    label.verticalCenter = 'middle';
    label.text = '0%';
  
  
    /**
   * Hand
   */
  

    var hand = chart.hands.push(new am4charts.ClockHand());
    hand.axis = axis;
    hand.innerRadius = am4core.percent(20);
    hand.startWidth = 0;
    hand.pin.disabled = true;
    hand.value = 0;

    hand.events.on('propertychanged', function(ev) {
      range0.endValue = ev.target.value;
      range1.value = ev.target.value;
      axis.invalidate();
    });

  
    setInterval(function() {
      var value = 50;
      label.text = value + '%';
      var animation = new am4core.Animation(hand, {
        property: 'value',
        to: value
      }, 1000, am4core.ease.cubicOut).start();
    }, 2000);
  
  }); // end am4core.ready()
}
