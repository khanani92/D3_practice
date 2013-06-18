/**
 * Created with JetBrains WebStorm.
 * User: Mudassir
 * Date: 6/17/13
 * Time: 7:06 PM
 * To change this template use File | Settings | File Templates.
 */


var dataSet= [5,10,11,20,13,7,8,15,19,3,6,14,17,2,18,23,25,4,22];

barChart(dataSet);

function barChart(udata){

    //making svg
    var svg= d3.select("#canvas")
        .append("svg")
        .attr("width",window.screen.width-100)
        .attr("height",window.screen.height-200)
        .style("border","solid");

    //Creating Scales
    var w =600;
    var h= 250;
    var xScale = d3.scale.ordinal()
                         .domain(d3.range(udata.length))//d3.range() generate sequential array
                         .rangeRoundBands([0,w],0.05)

   //making rect
   var rect = svg.selectAll("rect")
                  .data(udata)
                  .enter()
                  .append("rect")
                  .attr({
                        x:function(d,i){return xScale(i);},
                        y:function(d,i){return 565-xScale(d)},
                        width:function(d,i){return xScale.rangeBand()},
                        height:function(d,i){return xScale(d)},
                        fill:"red"

                        })

    //making Text
    var text = svg.selectAll("text")
        .data(dataSet)
        .enter()
        .append("text")
        .text(function(d){return d;})

        .attr({
            x:function(d,i){return xScale(i)+6;},
            y:function(d,i){return 580-xScale(d)},
            fontFamily:"sans-serif",
            "font-size":"11px",
            fill:"black"
        })

    //eventListener
     d3.select("#p1")
         .on("click",function(){
              dataSet= [15,6,3,25,10,17,18,5,9,13,16,4,7,12,8,3,5,24,2];
             svg.selectAll("rect")
                 .data(dataSet)
                 .transition()
                 .delay(function(d,i){return i*100;})
                 .duration(2000)
                 .ease("bounce")
                 .attr({
                     y:function(d,i){return 565-xScale(d)},
                     height:function(d,i){return xScale(d)}
                 })

                    console.log("clicked");
         })//eventfire


}
