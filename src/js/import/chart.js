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
  chart.setInterval(randomValue, 5000);
  function randomValue() {
    let valChartdiv = $('.user-income__block--chart span').text();
    hand.showValue(+valChartdiv, 1000, am4core.ease.cubicOut);
    chart.setTimeout(randomValue, 2000);
  }
  
}); // end am4core.ready()









//home-user__statistics
function userStatistics() {
  $('.schedule-home__line b').each(function(index, item) {
    let widthLine = $(item).text();
    if(widthLine >= 32.1) {
      $(item).closest('span').prev('div').css({'width': '100px'});
    }
    else{
      $(item).closest('span').prev('div').css({'width': +widthLine * 2.5});
    }
  });
}
userStatistics();
setInterval(userStatistics, 5000);











//home pie-chart
am4core.ready(function() {

  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end
  
  // create chart
  var chart = am4core.create('pie-chart-1', am4charts.GaugeChart);
  chart.startAngle = -90;
  chart.endAngle = 270;
  chart.innerRadius = am4core.percent(82);
  
  
  
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
  range0.axisFill.fill = am4core.color('green');
  
  var range1 = axis2.axisRanges.create();
  range1.value = 50;
  range1.endValue = 100;
  range1.axisFill.fillOpacity = 1;
  range1.axisFill.fill = am4core.color('#eee');

  
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
    var value = +$('#pie-chart-1').attr('data-val');
    label.text = value + '%';
    var animation = new am4core.Animation(hand, {
      property: 'value',
      to: value
    }, 1000, am4core.ease.cubicOut).start();
  }, 2000);
  
}); // end am4core.ready()








//home pie-chart
am4core.ready(function() {

  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end
  
  // create chart
  var chart = am4core.create('pie-chart-2', am4charts.GaugeChart);
  chart.startAngle = -90;
  chart.endAngle = 270;
  chart.innerRadius = am4core.percent(82);
  
  
  
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
  range0.axisFill.fill = am4core.color('green');
  
  var range1 = axis2.axisRanges.create();
  range1.value = 50;
  range1.endValue = 100;
  range1.axisFill.fillOpacity = 1;
  range1.axisFill.fill = am4core.color('#eee');

  
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
    var value = +$('#pie-chart-2').attr('data-val');
    label.text = value + '%';
    var animation = new am4core.Animation(hand, {
      property: 'value',
      to: value
    }, 1000, am4core.ease.cubicOut).start();
  }, 2000);
  
}); // end am4core.ready()

