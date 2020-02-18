//growth
if($('div').hasClass('growth-chart')) {

  am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
  
    // Create chart instance
    var chart = am4core.create('growth', am4charts.XYChart);
  

  
    // Data for both series
    var data = [ {
      'year': 'Jan',
      'income': 4,
    },{
      'year': 'Feb',
      'income': 6,
    },{
      'year': 'Mar',
      'income': 7.5,
    },{
      'year': 'Apr',
      'income': 6,
    },{
      'year': 'May',
      'income': 5,
    },{
      'year': 'June',
      'income': 8,
    },{
      'year': 'July',
      'income': 6.5,
    },{
      'year': 'Aug',
      'income': 5.5,
    },{
      'year': 'Sept',
      'income': 10,
    },{
      'year': 'Oct',
      'income': 4.4,
    },{
      'year': 'Nov',
      'income': 6.6,
    },{
      'year': 'Dec',
      'income': 9,
    },];
  
    /* Create axes */
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'year';
    categoryAxis.renderer.minGridDistance = 30;
    chart.numberFormatter.numberFormat = "#.#'%'";
  
    /* Create value axis */
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  
    /* Create series */
    var columnSeries = chart.series.push(new am4charts.ColumnSeries());

    columnSeries.dataFields.valueY = 'income';
    columnSeries.dataFields.categoryX = 'year';
    columnSeries.tooltip.label.textAlign = 'middle';
    columnSeries.columns.template.width = am4core.percent(40);

  
    var columnTemplate = columnSeries.columns.template;
    columnTemplate.column.cornerRadiusTopLeft = 20;
    columnTemplate.column.cornerRadiusTopRight = 20;


  
    // Add scrollbar
    chart.scrollbarX = new am4charts.XYChartScrollbar();
    // chart.scrollbarX.parent = chart.bottomAxesContainer;
  

  

    // Create value axis range
    var range = valueAxis.axisRanges.create();
    range.value = 10;
    range.grid.stroke = am4core.color('#00E808');
    range.grid.strokeWidth = 1;
    range.grid.strokeOpacity = 1;
    range.label.inside = true;
    range.label.text = 'Refine wide';
    range.label.fill = am4core.color('#9A9A9A');
    range.label.align = 'center';
    range.label.verticalCenter = 'bottom';
    range.grid.above = true;

    var range2 = valueAxis.axisRanges.create();
    range2.value = 7.5;
    range2.grid.stroke = am4core.color('#E88300');
    range2.grid.strokeWidth = 1;
    range2.grid.strokeOpacity = 1;
    range2.grid.above = true;
    range2.label.inside = true;
    range2.label.text = 'Org wide';
    range2.label.fill = am4core.color('#9A9A9A');
    range2.label.align = 'center';
    range2.label.verticalCenter = 'bottom';

    chart.data = data;
  
  }); // end am4core.ready()
}





if($('div').hasClass('growth-chart-2')) {

  am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
  
    // Create chart instance
    var chart = am4core.create('growth-2', am4charts.XYChart);
  

  
    // Data for both series
    var data = [ {
      'year': 'Jan 10, 2019',
      'income': 4,
      'expenses': 2
    },{
      'year': 'Feb 10, 2019',
      'income': 6,
      'expenses': 9
    },{
      'year': 'Mar 10, 2019',
      'income': 7.5,
      'expenses': 4
    },{
      'year': 'Apr 10, 2019',
      'income': 6,
      'expenses': 3
    },{
      'year': 'May 10, 2019',
      'income': 5,
      'expenses': 8
    },{
      'year': 'June 10, 2019',
      'income': 8,
      'expenses': 6
    },{
      'year': 'July 10, 2019',
      'income': 6.5,
      'expenses': 1
    },{
      'year': 'Aug 10, 2019',
      'income': 5.5,
      'expenses': 2
    },{
      'year': 'Sept 10, 2019',
      'income': 10,
      'expenses': 1
    },{
      'year': 'Oct 10, 2019',
      'income': 4.4,
      'expenses': 4
    },{
      'year': 'Nov 10, 2019',
      'income': 6.6,
      'expenses': 8
    },{
      'year': 'Dec 10, 2019',
      'income': 9,
      'expenses': 4
    },];
    chart.legend = new am4charts.Legend();
    /* Create axes */
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'year';
    categoryAxis.renderer.minGridDistance = 90;
    chart.numberFormatter.numberFormat = "#.#'%'";
  
    /* Create value axis */
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  
    /* Create series */
    var columnSeries = chart.series.push(new am4charts.ColumnSeries());
    columnSeries.name = 'Individual';
    columnSeries.dataFields.valueY = 'income';
    columnSeries.dataFields.categoryX = 'year';
    columnSeries.tooltip.label.textAlign = 'middle';
    columnSeries.columns.template.width = am4core.percent(40);



    var lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.name = 'Company wide';
    lineSeries.dataFields.valueY = 'expenses';
    lineSeries.tensionX = 0.7;
    lineSeries.dataFields.categoryX = 'year';

  
    var columnTemplate = columnSeries.columns.template;
    columnTemplate.column.cornerRadiusTopLeft = 20;
    columnTemplate.column.cornerRadiusTopRight = 20;


  
    // Add scrollbar
    chart.scrollbarX = new am4charts.XYChartScrollbar();
    // chart.scrollbarX.parent = chart.bottomAxesContainer;

    chart.data = data;
  
  }); // end am4core.ready()
  
}
