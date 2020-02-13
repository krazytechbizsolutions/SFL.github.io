//home
am4core.ready(function() {

  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end
  
  // create chart
  var chart = am4core.create('chartdiv', am4charts.GaugeChart);
  chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect

  chart.innerRadius = -25;
  
  var axis = chart.xAxes.push(new am4charts.ValueAxis());
  axis.min = 0;
  axis.max = 100;
  axis.strictMinMax = true;
  axis.renderer.radius = am4core.percent(130); //chart scale
  axis.renderer.inside = true;

  axis.renderer.grid.template.stroke = new am4core.InterfaceColorSet().getFor('background');
  
  
  var colorSet = new am4core.ColorSet();
  
  var range0 = axis.axisRanges.create();
  range0.value = 0;
  range0.endValue = 30;
  range0.axisFill.fillOpacity = 1;
  range0.axisFill.fill = am4core.color('red');
  range0.axisFill.zIndex = 1;
  
  var range1 = axis.axisRanges.create();
  range1.value = 30;
  range1.endValue = 70;
  range1.axisFill.fillOpacity = 1;
  range1.axisFill.fill = am4core.color('#F9DB69');
  range1.axisFill.zIndex = 1;
  
  var range2 = axis.axisRanges.create();
  range2.value = 70;
  range2.endValue = 100;
  range2.axisFill.fillOpacity = 1;
  range2.axisFill.fill = am4core.color('green');
  range2.axisFill.zIndex = 1;
  
  var hand = chart.hands.push(new am4charts.ClockHand());
  // hand.radius = am4core.percent(80);
  // hand.startWidth = 6;

  
  // using chart.setTimeout method as the timeout will be disposed together with a chart
  chart.setTimeout(randomValue, 2000);
  
  function randomValue() {
    hand.showValue(84, 1000, am4core.ease.cubicOut);
    chart.setTimeout(randomValue, 2000);
  }
  
}); // end am4core.ready()
