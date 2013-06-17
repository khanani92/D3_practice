/**
 * Created with JetBrains WebStorm.
 * User: Mudassir
 * Date: 6/11/13
 * Time: 9:07 AM
 * To change this template use File | Settings | File Templates.
 */
var svg= d3.select("#canvas")
           .append("svg")
           .attr("width","700")
           .attr("height","600")
           .style("border","solid");

var data = [
           [50,60],
           [400,300],
           [200,80],
           [100,110],
           [300,140]
           ];

             scatterPlot(data);



            function scatterPlot(uData){
                var w = 700;// width of screen  "window.screen.width"
                var h =600;// height of screen  "window.screen.height"
                var Xscale = d3.scale.linear()
                                     .domain([0,d3.max(uData,function(d){return d[0];})])
                                     .range([0,(w-100)]);
                var Yscale = d3.scale.linear()
                                     .domain([0,d3.max(uData,function(d){return d[1];})])
                                     .range([0,(h-100)]) ;
                var axis = d3.svg.axis()
                                 .scale(Xscale)
                                 .orient("bottom")


                var color = d3.scale.category20b();

                var circle = svg.selectAll("circle")
                               .data(uData)
                               .enter()
                               .append("circle")
                               .attr({
                                     cx:function(d){return Xscale(d[0])},
                                     cy:function(d){return Yscale(d[1])},
                                      r:function(d) {return Math.sqrt(h - d[1]);},
                                   fill:function(d,i){return color(i)}

                                     }) ;
                var text = svg.selectAll("text")
                              .data(uData)
                              .enter()
                              .append("text")
                              .text(function(d){ return "x"+d[0]+"-y"+d[1];})
                              .attr({
                                    x:function(d){return Xscale(d[0])},
                                    y:function(d){return Yscale(d[1])},
                                    fontFamily:"sans-serif",
                                    "font-size":"9px",
                                    fill:"yellow"
                                   })
                              .attr("text-anchor", "middle");

                svg.append("g")
                    .attr("class","axis")
                    .call(axis);

            }//scatterPlot