/**
 * Created with JetBrains WebStorm.
 * User: Mudassir
 * Date: 6/16/13
 * Time: 4:29 PM
 * To change this template use File | Settings | File Templates.
 */

    var svg = d3.select("#canvas")
                .append("svg")
                .attr("width",window.screen.width-20)
                .attr("height",window.screen.height-20)
                .style("border","solid");


var dataSet = [10,20,30,40,50];
var pie = d3.layout.pie();
var a = pie(dataSet);

var color = d3.scale.category20c();

var width = 400;//custom widht for chart
var height = 400;//custom height for chart

var outerRadius = width/2; //custom
var innerRadius = 0;//custom

var arc = d3.svg.arc()
                .outerRadius(outerRadius)
                .innerRadius(innerRadius);




//set up Group
var arcs = svg.selectAll("g.arc")//g with class arc
              .data(a)
              .enter()
              .append("g")
              .attr("class","arc")
              .attr("transform","translate("+outerRadius+","+outerRadius+")");


//Draw arc path
arcs.append("path")
    .attr("fill",function(d,i){return color(i);   })
    .attr("d",arc);



//adding text
arcs.append("text")
    .attr("transform",function(d) {return "translate(" + arc.centroid(d) + ")";})
    .attr("text-anchor","middle")
    .text(function(d){return d.value;});
