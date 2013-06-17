/**
 * Created with JetBrains WebStorm.
 * User: Taufiq
 * Date: 5/27/13
 * Time: 8:55 PM
 * To change this template use File | Settings | File Templates.
 */
(function(){
    var dataSet = [5,10,20,25,30,35,40];

    var canvas = d3.select("#canvas")
    .append("svg")
    .attr("width",window.screen.width+"px")
    .attr("height",window.screen.height+"px")
    .style("border","solid");

     var color = d3.scale.category20b();

    drawCircle();

function drawCircle(){

    canvas.selectAll("circle")
        .data(dataSet)
        .enter()
        .append("circle")
        .attr({
            cx:function(d,i){return (d*(i)*2)+15;},
            cy:function(d,i){return (d*(i)*2)+15;},
            r:function(d,i){return (d*2);},
            fill:function(d,i){return color(i);}
        });

};//drawCircle

   barChart();

 function barChart(){
     canvas.selectAll("rect")
         .data(dataSet)
         .enter()
         .append("rect")
         .attr({
             x:function(d,i){return (i*2)*30+400;},
             y:function(d,i){return 100-(d*3)+30;},
             width:20,
             height:function(d,i){return (d*3);},
             fill:function(d,i){return color(i)}
         })
 };//barChart()

})();