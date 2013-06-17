/**
 * Created with JetBrains WebStorm.
 * User: Taufiq
 * Date: 6/6/13
 * Time: 9:43 AM
 * To change this template use File | Settings | File Templates.
 */

var svg= d3.select("#canvas")
           .append("svg")
           .attr("width",window.screen.width+"px")
           .attr("height",window.screen.height+"px")
           .style("border","solid");

var dataSet = [100,200,500,600,700,800,900,1000];

var scale = d3.scale.linear()
                    .domain([d3.min(dataSet),d3.max(dataSet)])
                    .range([50,300]) ;

var axis = d3.svg.axis()
                   .scale(scale)
                   .ticks(7)
                   .orient("bottom");
// making barChart
var barChart = svg.selectAll("rect")
                  .data(dataSet)
                  .enter()
                  .append("rect")
                  .attr({
                       x:function(d,i){return (i*2)*18+50},
                       y:function(d,i){return 600-scale(d)},
                       width:20,
                       height:function(d,i){return scale(d);},
                       fill:function(d,i){return "rgb(0, 0, " + (d + i) + ")"}
                        })

//making Text
var text = svg.selectAll("text")
             .data(dataSet)
             .enter()
             .append("text")
             .text(function(d){return d;})
             .attr({
                x:function(d,i){return (i*2)*18+50},
                y:function(d,i){return 612-scale(d)},
                fontFamily:"sans-serif",
                "font-size":"11px",
                fill:"white"
                   })

//appending axis

svg.append("g")
   .attr("class","axis")
   .attr("transform","translate(10,620)")
   .call(axis)