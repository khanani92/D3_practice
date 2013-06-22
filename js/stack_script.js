/**
 * Created with JetBrains WebStorm.
 * User: Mudassir
 * Date: 6/21/13
 * Time: 12:36 PM
 * To change this template use File | Settings | File Templates.
 */

    //Create svg
var svg = d3.select("#canvas")
    .append("svg")
    .attr("width",window.screen.width-20)
    .attr("height",window.screen.height-20)
    .style("border","solid");




//dataSet

var dataSet = [
               {apple: 5, oranges: 10, grapes :22},
               {apple: 4, oranges: 12, grapes :28},
               {apple: 2, oranges: 19, grapes :32},
               {apple: 7, oranges: 23, grapes :35},
               {apple: 23, oranges: 17, grapes :43}
              ]

//rearranging dataSet

var dataSet = [
                [{x:0 , y :5},{x:1 , y:4},{x:2 , y:2},{x:3 , y:7},{x:4 , y:23}],
                [{x:0, y:10},{x:1 , y:12},{x:2, y:19},{x:3 , y:23},{x:4 , y:17}],
                [{x:0, y:22},{x:1 , y:28},{x:2 , y:32},{x:3 , y:35},{x:4 , y:43}]
              ]

 //converting dataSet to required layout

 var stack = d3.layout.stack();

 //Data, stacked
 stack(dataSet);




//Scales

var w = 500;
var h = 700;

var xScale = d3.scale.ordinal()
    .domain(d3.range(dataSet[0].length))
    .rangeRoundBands([0, w], 0.05);

var yScale = d3.scale.linear()
    .domain([0,
        d3.max(dataSet, function(d) {
            return d3.max(d, function(d) {
                return d.y0 + d.y;
            });
        })
    ])
    .range([0, h]);




var color = d3.scale.category20();


//creating group layout

var group = svg.selectAll("g")
              .data(dataSet)
              .enter()
              .append("g")
              .style("fill",function(d,i){ return color(i);});



var rect = group.selectAll("rect")
                .data(function(d){return d;})
                .enter()
                .append("rect")
                .attr({x:function(d,i){ return xScale(i)},
                       y:function(d){return yScale(d.y0);},
                       height:function(d){return yScale(d.y);},
                       width:xScale.rangeBand()

                        });



